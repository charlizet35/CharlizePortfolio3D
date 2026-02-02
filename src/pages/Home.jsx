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
        backgroundColor: 'white', // match your page background
        pointerEvents: 'none'
        }} />

      {/* left text */}
      <div style={{
        position: 'absolute',
        left: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        maxWidth: '350px',
        color: 'gray'
      }}>
        <h1 style={{fontSize: '3rem', margin: '0 0 1rem 0', lineHeight: 1.2}}>
          Welcome to My Portfolio
        </h1>
        <p style={{fontSize: '1.1rem', margin: '0', lineHeight: 1.6, opacity: 0.9}}>
          Explore my work, experience, and projects. Click through the navigation to learn more about me.
        </p>
      </div>
    </div>
  );
};

export default Home;
