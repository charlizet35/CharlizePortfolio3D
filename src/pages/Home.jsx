import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode"
        style={{width: '100%', height: '100%'}}
      />
    </div>
  );
};

export default Home;
