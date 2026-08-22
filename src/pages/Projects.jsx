import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { SceneContext } from '../App';
import './ProjectCards.css';

const projectsList = [
  { name: 'Michelin Mayhem', path: '/MichelinMaihem', description: 'A short project description goes here.' },
  { name: 'Urgent Care Management System', path: '/UrgentCare', description: 'A short project description goes here.' },
  { name: '3D Portfolio Website', path: '/Portfolio', description: 'A short project description goes here.' },
  { name: 'Demo Reel', path: '/DemoReel', description: 'A short project description goes here.' },
  { name: 'Aurora Borealis Tool', path: '/Aurora', description: 'A short project description goes here.' },
];

const Projects = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showUI, setShowUI] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [splineApp, setSplineApp] = useState(null);
    const navigate = useNavigate();
    const { setSceneReady: setGlobalReady, hasLoadedOnce } = useContext(SceneContext);

    useEffect(() => {
      if (hasLoadedOnce.current) return;
      const loaderTimer = setTimeout(() => {
          setShowLoader(true);
      }, 2000);

      return () => clearTimeout(loaderTimer);
    }, []);

    function onLoad(spline) {
      setSplineApp(spline);
      setTimeout(() => {
        setSceneReady(true);
        setShowLoader(false);
        hasLoadedOnce.current = true;
        setTimeout(() => {
          setShowUI(true);
          setGlobalReady(true);
        }, 200);
      }, 200);
    }

    function onSplineMouseUp(e) {
      if (e.target && e.target.name === 'Rectangle1') {
        navigate('/MichelinMaihem');
      }
    }

  return (
    <div style={{ width: '100%', backgroundColor: '#777)', position: 'relative' }}>

      {showLoader && !sceneReady && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(180deg, #f5f5f5, #eaeaea)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
        }}>
          <p style={{ fontSize: '1.1rem', letterSpacing: '0.12em', color: '#777' }}>
            Loading experience…
          </p>
        </div>
      )}

      <div
        style={{
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >

        {/* Hero: full-screen Spline scene */}
        <div style={{ position: 'relative', width: '100%', height: '100vh', maxHeight: '800px',overflow: 'hidden', backgroundColor: 'rgb(240, 240, 240)' }}>
          <Spline
            scene="https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
            }}
            onLoad={onLoad}
            onSplineMouseUp={onSplineMouseUp}
          />
        </div>

        {/* Project cards section */}
        <div className="projects-gallery-section">
          <div className="projects-grid">
            {projectsList.map((project) => (
              <div
                key={project.path}
                className="project-gallery-card"
                onClick={() => navigate(project.path)}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;