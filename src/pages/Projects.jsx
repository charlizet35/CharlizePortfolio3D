import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';
import { SceneContext } from '../App';

const Projects = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showUI, setShowUI] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [splineApp, setSplineApp] = useState(null);
    const navigate = useNavigate();
    const { setSceneReady: setGlobalReady, hasLoadedOnce } = useContext(SceneContext); 

    useEffect(() => {
      if (hasLoadedOnce.current) return;
      const loaderTimer = setTimeout(() => {
          setShowLoader(true);
      }, 2000);

      return () => clearTimeout(loaderTimer);
    }, []);

    function onLoad(spline) {
      console.log('Spline loaded:', spline);
      setSplineApp(spline);
      
      if (spline && typeof spline.getAllObjects === 'function') {
        const allObjects = spline.getAllObjects();
        console.log('=== ALL OBJECTS ===');
        allObjects.forEach(obj => {
          console.log('Name:', obj.name, '| Has events:', obj._emitter ? 'yes' : 'no');
        });
      }
      
      setTimeout(() => {
        setSceneReady(true);
        setShowLoader(false);
        hasLoadedOnce.current = true;
        setTimeout(() => {
          setShowUI(true);
          setGlobalReady(true); 
        }, 200);
      }, 200);
    }

    function onSplineMouseUp(e) {
      console.log('=== onSplineMouseUp triggered ===');
      console.log('Event:', e);
      console.log('Target:', e.target);
      console.log('Target name:', e.target?.name);
      
      if (e.target && e.target.name === 'Rectangle1') {
        navigate('/MichelinMaihem');
      } 
      else if (e.target && e.target.name === 'Rectangle2') {
        navigate('/UrgentCare');
      }
      else if (e.target && e.target.name === 'Rectangle3') {
        navigate('/Portfolio');
      }
      else if (e.target && e.target.name === 'Rectangle4') {
        navigate('/DemoReel');
      }
    }

  return (
    <div style={{width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        onLoad={onLoad}
        onSplineMouseUp={onSplineMouseUp}
      />
 
      {showLoader && !sceneReady && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, #f5f5f5, #eaeaea)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 40,
        }}>
          <p style={{ fontSize: '1.1rem', letterSpacing: '0.12em', color: '#777' }}>
            Loading experience…
          </p>
        </div>
      )}

      <div style={{
        opacity: showUI ? 1 : 0,
        visibility: showUI ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease',
      }}>
      </div>
    </div>
  );
};

export default Projects;