import React, { useEffect, useState, useContext } from 'react';
import Spline from '@splinetool/react-spline';
import { SceneContext } from '../App';

const AboutMe = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const { setSceneReady: setGlobalReady } = useContext(SceneContext);

    useEffect(() => {
        const loaderTimer = setTimeout(() => {
            setShowLoader(true);
        }, 2000);
        return () => clearTimeout(loaderTimer);
    }, []);

  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/xdjCnoAg0by-34dO/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        onLoad={() => {
          setTimeout(() => {
            setSceneReady(true);
            setShowLoader(false);
            setTimeout(() => setGlobalReady(true), 200);
          }, 200);
        }}
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
    </div>
  );
};

export default AboutMe;