import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const Home = () => {
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
    <div style={{ position: 'absolute', inset: 0 }}>
      <Spline
        scene="https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode"
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
        {/* watermark cover */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 5,
            width: 180,
            height: 39,
            backgroundColor: 'white',
            pointerEvents: 'none',
          }}
        />

        {/* left text */}
        <div
          style={{
            position: 'absolute',
            left: '120px',
            top: '50%',
            transform: 'translateY(-55%)',
            maxWidth: '350px',
            color: 'gray',
            textAlign: 'left',
            pointerEvents: 'none',
          }}
        >
          <h1 style={{fontSize: '6rem', margin: '0 0 1rem 0', lineHeight: 1}}>
            <Typewriter
              onInit={(tw) => {
                tw.typeString("Hi, I'm Charlize").start();
              }}
              options={{ delay: 75, cursor: '' }}
            />
          </h1>
          <h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', lineHeight: 1}}>
            <Typewriter
              onInit={(tw) => {
                tw.typeString(
                  'Fullstack Developer / 3D Creative Technologist'
                ).start();
              }}
              options={{ delay: 60, cursor: '' }}
            />
          </h2>
        </div>

        {/* right text */}
        <div
          style={{
            position: 'absolute',
            right: '120px',
            top: '50%',
            transform: 'translateY(-55%)',
            maxWidth: '350px',
            color: 'gray',
            textAlign: 'right',
            pointerEvents: 'none',
          }}
        >
          <h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', lineHeight: 1}}>
            <Typewriter
              onInit={(tw) => {
                tw.typeString(
                  'Building interactive 3D experiences through code, tools, and design'
                ).start();
              }}
              options={{ delay: 45, cursor: '' }}
            />
          </h2>

          <h3 style={{fontSize: '1.3rem', margin: '0 0 1rem 0', lineHeight: 1}}>
            <Typewriter
              onInit={(tw) => {
                tw.typeString(
                  'Hover around the screen and interact with the model. Explore my portfolio through the navigation icons above :3'
                ).start();
              }}
              options={{ delay: 25, cursor: '' }}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
