import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const AboutMe = () => {
  const splineRef = useRef();
  const [scene, setScene] = useState(null);

  const onSplineLoad = (splineScene) => {
    console.log('Spline scene loaded:', splineScene);
    
    //use getAllObjects to log all objects
    if (splineScene && typeof splineScene.getAllObjects === 'function') {
      const allObjects = splineScene.getAllObjects();
      console.log('=== ALL OBJECTS IN SCENE ===');
      allObjects.forEach((obj) => {
        console.log(`Name: "${obj.name}" | Type: ${obj.type}`);
      });
      console.log('=== END ===');
    }
    
    setScene(splineScene);
  };

  useEffect(() => {
    if (!scene || typeof scene.getAllObjects !== 'function') {
      console.log('Scene not ready or getAllObjects not available');
      return;
    }

    //get all obj, find aboutmebox
    const allObjects = scene.getAllObjects();
    const box = allObjects.find(obj => obj.name === 'AboutMeBox');
    
    console.log('Looking for AboutMeBox, found:', box);
    
    if (!box) {
      console.warn('AboutMeBox not found in scene');
      return;
    }

    console.log('Starting animation for:', box.name);
    
    //box animation
    let startY = box.position.y;
    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.06;     //speed
      box.position.y = startY + Math.sin(time) * 1.3;   //timeframe
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [scene]);

  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/xdjCnoAg0by-34dO/scene.splinecode"
        onLoad={onSplineLoad}
        style={{width: '100%', height: '100%'}}
      />
    </div>
  );
};

export default AboutMe;
