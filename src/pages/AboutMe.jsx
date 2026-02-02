import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import * as THREE from 'three';

const AboutMe = () => {
  const splineRef = useRef();
  const [scene, setScene] = useState(null);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textRotation, setTextRotation] = useState(0);

  const onSplineLoad = (splineScene) => {
    console.log('Spline scene loaded:', splineScene);
    
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

    const allObjects = scene.getAllObjects();
    const box = allObjects.find(obj => obj.name === 'AboutMeBox');
    
    console.log('Looking for AboutMeBox, found:', box);
    
    if (!box) {
      console.warn('AboutMeBox not found in scene');
      return;
    }

    console.log('Starting animation for:', box.name);
    
    let startY = box.position.y;
    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.06;
      box.position.y = startY + Math.sin(time) * 1.3;

      //convert 3D position to 2D coord
      if (scene._camera) {
        // Create a vector at the box's position
        const vector = new THREE.Vector3(
          box.position.x,
          box.position.y,
          box.position.z
        );

        // Project to screen space
        vector.project(scene._camera);

        // Convert to pixel coordinates
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

        setTextPosition({ x, y });

        // Get the box's Z rotation and convert to degrees for CSS
        // You can use rotation.x, rotation.y, or rotation.z depending on which axis it's rotated on
        const rotationDegrees = (box.rotation.z * 180) / Math.PI;
        setTextRotation(rotationDegrees + 180);
      }

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
      
      {/* Wrapper with perspective */}
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      perspective: '1000px', // Add perspective here!
      pointerEvents: 'none'
    }}></div>

      {/*2D text*/}
      <div
        style={{
          position: 'absolute',
          left: `${textPosition.x}px`,
          top: `${textPosition.y}px`,
          transform: `translate(-50%, -50%) rotateY(50deg) rotateZ(3deg)`,
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          pointerEvents: 'none',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          zIndex: 10
        }}
      >

        About Me
      </div>
    </div>
  );
};

export default AboutMe;