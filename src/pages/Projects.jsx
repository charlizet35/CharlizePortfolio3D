import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { SceneContext } from '../App';
import Footer from '../components/Footer';
import './ProjectCards.css';

const projectsList = [
  { name: 'Urgent Care Management System', path: '/UrgentCare', description: 'A short project description goes here.', tech: 'asdfasdf', image: '' },
  { name: '3D Portfolio Website', path: '/Portfolio', description: 'A short project description goes here.', tech: 'asdfasdf', image: '' },
  { name: 'Demo Reel', path: '/DemoReel', description: 'A short project description goes here.', tech: 'asdfasdf', image: '' },
  { name: 'Aurora Borealis Tool', path: '/Aurora', description: 'A short project description goes here.', tech: 'asdfasdf', image: '' },
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
    <div style={{ width: '100%', backgroundColor: '#777', position: 'relative' }}>

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

        <div className="projects-gallery-section">
          <div className="projects-grid">
            {projectsList.map((project) => (
              <div
                key={project.path}
                className="project-console-card" 
                onClick={() => navigate(project.path)}
              >
                <h3 className="console-title">{project.name}</h3>
                <p className="console-subtitle">{project.description}</p>

                <div className="console-screen-frame">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="console-screen-img" />
                  ) : (
                    <div className="console-screen-placeholder">
                      <span>Preview Image Placeholder</span>
                    </div>
                  )}
                </div>
                <span className="console-footer-tech">{project.tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;