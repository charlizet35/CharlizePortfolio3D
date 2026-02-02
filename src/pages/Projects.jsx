import React from 'react';
import Spline from '@splinetool/react-spline';

const Projects = () => {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Spline
        scene="https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode"
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

    </div>
  );
};

export default Projects;

