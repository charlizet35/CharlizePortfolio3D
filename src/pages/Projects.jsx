import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const Projects = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showUI, setShowUI] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [splineApp, setSplineApp] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
            const loaderTimer = setTimeout(() => {
                setShowLoader(true);
            }, 2000);
    
            return () => clearTimeout(loaderTimer);
    }, []);

    function onLoad(spline) {
      console.log('Spline loaded:', spline);
      setSplineApp(spline);
      
      //log all obj
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
        setTimeout(() => setShowUI(true), 600);
      }, 400);
    }

    function onSplineMouseUp(e) {
      console.log('=== onSplineMouseUp triggered ===');
      console.log('Event:', e);
      console.log('Target:', e.target);
      console.log('Target name:', e.target?.name);
      
        //here for navigation
      if (e.target && e.target.name === 'Rectangle1') {
        console.log('Rectangle1 clic, navigating...');
        navigate('/MichelinMaihem');
      } else {
        console.log('Not Rectangle1. Name was:', e.target?.name);
      }


        
    }

  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
        onLoad={onLoad}
        onSplineMouseUp={onSplineMouseUp}
      />
 
      {/* loader */}
      {showLoader && !sceneReady && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #f5f5f5, #eaeaea)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 40,
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              color: '#777',
            }}
          >
            Loading experience…
          </p>
        </div>
      )}

      {/* gated ui/text */}
      <div
        style={{
          opacity: showUI ? 1 : 0,
          visibility: showUI ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease',
        }}
      >

        <div style={{
        position: 'absolute',
        bottom: 20,
        right: 5,
        width: 180,
        height: 39,
        backgroundColor: '#ebebeb',
        pointerEvents: 'none'
        }} />
      </div>
    </div>
  );
};

export default Projects;