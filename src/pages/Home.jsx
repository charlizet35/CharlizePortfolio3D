import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode"
        style={{width: '100%', height: '100%'}}
      />

        //cover up watermark
        <div style={{
        position: 'absolute',
        bottom: 20,
        right: 5,
        width: 180,
        height: 39,
        backgroundColor: 'white', 
        pointerEvents: 'none'
        }} />

      {/* left text */}
      <div style={{
        position: 'absolute',
        left: '120px',
        top: '50%',
        transform: 'translateY(-55%)',
        zIndex: 10,
        maxWidth: '350px',
        color: 'gray',
        textAlign: 'left',
        pointerEvents: 'none'
      }}>
        <h1 style={{fontSize: '6rem', margin: '0 0 1rem 0', lineHeight: 1}}>
          Hi, I'm Charlize
        </h1>
        <h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', lineHeight: 1}}>
          Fullstack Developer/3D Creative Technologist
        </h2>
      </div>

    {/* left text */}
      <div style={{
        position: 'absolute',
        right: '120px',
        top: '50%',
        transform: 'translateY(-55%)',
        zIndex: 10,
        maxWidth: '350px',
        color: 'gray',
        textAlign: 'right',
        pointerEvents: 'none'
      }}>
        <h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', lineHeight: 1}}>
          Building interactive 3D experiences through code, tools, and design
        </h2>
        <h3 style={{fontSize: '1.3rem', margin: '0 0 1rem 0', lineHeight: 1}}>
          Hover around the screen and interact with the model. Explore my portfolio through the navigation icons above :3 
        </h3>
      </div>
    </div>
  );
};

export default Home;
