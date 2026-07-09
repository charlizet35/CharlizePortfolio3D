import React from 'react';
import "../../App.css";
import final_render from '../../assets/final.jpg';
import aurora1 from '../../assets/aurora_wip.png';
import aurora2 from '../../assets/aurora_wip2.png';
//import aurora4 from '../../assets/aurora_wip_4.png';
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
            I was inspired to create this tool after my friend requested for me to make a 3D scene to use for his song on Spotify Canvas. After listening to his song, the energy and tone I felt reflected that of space, stars, and aurora borealis'. I decided to create this tool to generate aurora borealis effects that could be used in his scene, and potentially by other artists in the future. 
          </p>

          <p>
            I tried to plan this project using an informal version of the Software Development Life Cycle. As both the client (artist) and developer in this scenario, I made a requirement analysis for the parameters based on how I envisioned an artist would want to use the tool. For the design phase, I defined the UI and tech stacks for the project, in which I used Python and the OpenMaya API for the core logic, and Qt.py for the UI. 
          </p>

          <p>
            During my development phase, I created a mesh ribbon along the input curve, then developed a procedural shader network for that ribbon. I had many difficulties with the shader network, as I had to create a custom animation for the vertical streaks in the aurora, which involved testing many combinations of Maya's built-in noise and ramp nodes.
          </p>

          <p style={{ color: '#858585' }}>
            Implementation and testing:
          </p>


        </section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
            <img src={aurora1} alt="aurora_wip1" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption"></figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
            <img src={aurora2} alt="aurora_wip1" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption"></figcaption>
          </figure>
        </div>

        

      </article>
    </div>
  );
};

export default Aurora;