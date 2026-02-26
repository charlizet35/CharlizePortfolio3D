import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showUI, setShowUI] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    
      //show loader if load > 2s
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
          transition: 'opacity 0.8s ease',
        }}
        onLoad={() => {
          // let shaders + animation settle
          setTimeout(() => {
            setSceneReady(true);
            setShowLoader(false);
            setTimeout(() => setShowUI(true), 600);
          }, 400);
        }}
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
        
        {/*
        <div style={{
        position: 'absolute',
        bottom: 20,
        right: 5,
        width: 180,
        height: 39,
        backgroundColor: 'white',
        pointerEvents: 'none'
        }} />

        */}
      </div>
    </div>
  );
};

export default AboutMe;

