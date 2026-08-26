import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { SceneContext } from '../App';
import './ProjectCards.css';

import urgentCareImg from '../assets/Clinic_Pic.png';
import portfolioImg from '../assets/homepage_wave_example.gif';
import demoReelImg from '../assets/ReelScreenShot.png';
import auroraImg from '../assets/final.jpg';

const projectsList = [
  { name: 'Urgent Care Management System', path: '/UrgentCare', description: 'Clinic management web app with full-stack database', tech: 'MySQL, Node.js, React.js, Vite, Azure', image: urgentCareImg },
  { name: '3D Portfolio Website', path: '/Portfolio', description: 'An interactive personal 3d portfolio website', tech: 'react.js, spline, blender', image: portfolioImg },
  { name: 'Demo Reel', path: '/DemoReel', description: 'Technical Director Demo Reel', tech: 'Unity, Blender, Maya, Python, Qt', image: demoReelImg },
  { name: 'Aurora Borealis Tool', path: '/Aurora', description: 'Autodesk Maya Aurora Borealis Maker', tech: 'Python, Maya, Arnold, Qt', image: auroraImg },
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

  // Dedicated navigation handler checking both e.target and direct payload
  const handleObjectClick = (e) => {
    console.log('=== Spline Click Event ===', e);
    const targetName = e?.target?.name || e?.name;
    console.log('Target name detected:', targetName);

    if (targetName === 'Rectangle1') {
      navigate('/MichelinMaihem');
    }
  };

  const onLoad = (spline) => {
    setSplineApp(spline);

    // Direct listener on the Spline runtime for both release and press
    spline.addEventListener('mouseUp', handleObjectClick);
    spline.addEventListener('mouseDown', handleObjectClick);

    setTimeout(() => {
      setSceneReady(true);
      setShowLoader(false);
      hasLoadedOnce.current = true;
      setTimeout(() => {
        setShowUI(true);
        setGlobalReady(true);
      }, 200);
    }, 200);
  };

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

        <div style={{ position: 'relative', width: '100%', height: '100vh', maxHeight: '800px', overflow: 'hidden', backgroundColor: 'rgb(240, 240, 240)' }}>
          <Spline
            scene="https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
            }}
            onLoad={onLoad}
            onSplineMouseDown={handleObjectClick}
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