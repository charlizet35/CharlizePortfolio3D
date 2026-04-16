import React from 'react';
import "../../App.css";
import final_render from '../../assets/final.jpg';
import demoReel from '../../assets/Demo Reel 2026.mov';
import { useEffect, useContext} from 'react';
import { SceneContext } from '../../App';

const Aurora = () => {
  const { setSceneReady: setGlobalReady } = useContext(SceneContext);
  useEffect(() => { setGlobalReady(true); }, []);

  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Aurora Borealis Procedural Tool</h1>
          <p className="project-date">A 1 month project, Feb 2026</p>

          <figure className="image-hover-container" style={{ margin: 0, marginTop: '15px' }}>
            <img 
              src={final_render}
              alt="Project Screenshot" 
              className="project-media"
              style={{ width: '100%', maxWidth: '500px', height: 'auto'}}
            />
            <a 
              href="https://github.com/charlizet35/maya-aurora-borealis-tool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="image-overlay-link"
            >
              <span className="overlay-icon">↗</span>
              <span style={{ color: '#cccccc' }}>View Code</span>
            </a>
          </figure>
          
          <p className="team-label"><i>Team:</i></p>
          <p className="team-list" >
            <span style={{ color: '#525252' }}>Charlize Tran </span>
          </p>
        </header>

        <section className="text-content">
          <h3>01 Description</h3>
          <p> 
            This is a procedural tool for generating Aurora Borealis effects using Autodesk Maya. The tool allows artists to create dynamic and customizable aurora effects for use in various virtual environments. 
          </p>
          <p>
            Artists draw a NURBS curve to define the shape and position of the aurora. The tool generates a ribbon mesh along the curve, applies a fully procedural shader network with animated vertical streaks, and outputs a render-ready result. All parameters — height, color, brightness, and animation speed — are controllable through a custom UI panel. Additionally, the tool supports exporting the aurora as USD.
          </p>
        </section>

        <section className="text-content">
          <h3>02 Process</h3>

          <p>
            I built this tool using Python 

          </p>
        </section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '40px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 0 }}>
            <video 
                src={demoReel} 
                controls
                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
            />
            <figcaption className="caption">Demo Reel 2026</figcaption>
            </figure>
        </div>
        

      </article>
    </div>
  );
};

export default Aurora;