import React from 'react';
import "../../App.css";
import final_render from '../../assets/final.jpg';
import aurora1 from '../../assets/aurora_wip.png';
import aurora2 from '../../assets/aurora_wip2.png';
import aurora4 from '../../assets/aurora_wip_4.png';
import hypershader from '../../assets/Aurora_Hypershader.png';
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
            Implementation:
          </p>

        </section>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
            <img src={aurora1} alt="aurora1" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption">Mesh WIP</figcaption>
          </figure>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '93%', margin: 0 }}>
            <img src={aurora4} alt="aurora4" style={{ width: '50%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption">Shader WIP 1</figcaption>
          </figure>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
            <img src={aurora2} alt="aurora2" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption">Shader WIP 2</figcaption>
          </figure>
        </div>

        <section className="text-content">
          <p>
          Testing was mostly visual — different curve shapes/lengths, rebuilding on top of existing meshes, invalid selections, and making sure saved auroras (aurora_mesh_001, _002, etc.) didn't collide with the in-progress WIP mesh.
          </p>

          <p>
          Since this runs inside Maya, deployment meant a small install script that adds the tool's path to Maya's userSetup.py, so it loads automatically on startup.
          </p>

          <p>
          For the maintenance stage I prioritized supporting multiple auroras at once, decoupling the shader from Arnold so it works in other render engines, and saving/loading shader presets.
          </p>
        </section>

        <section className="text-content">
          <h3>03 Challenges</h3>
          <p> 
            For the mesh, I sampled the input curve at fixed intervals, then duplicated that row of points upward in increments to build a height-wise grid, or a 2D array of vertices. I built it through Maya's lower-level API instead of a built-in curve-to-surface command, since I needed precise control over the vertex layout and UVs. That meant Maya didn't generate the mesh's structure for me and I had to derive it myself. This meant figuring out each quad's four vertex indices from its row/column position, in the right order for the face to wind correctly, and building a matching UV array so the shader would line up properly on the ribbon. Small errors in the indexing were tricky to catch, since the mesh could still look fine until you checked the shading.
          </p>

          <p>
            In actuality, the shader took far longer than the mesh code. I built the aurora's look from Maya's native ramp, noise, and multiplyDivide nodes chained together to drive emission and opacity over time. Most of my time went into nudging ramp stops and noise values, rendering test frames, and adjusting again.
          </p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
            <img src={hypershader} alt="hypershader" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
            <figcaption className="caption">Hypershader Setup</figcaption>
          </figure>
        </div>
        

        <section className="text-content">
          <h3>04 Result</h3>
          <p> 
            Below is a demo of the final result of the tool and an example render with a quick arctic landscape made with Bifrost.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={final_render} alt="final_render" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Example Render</figcaption>
            </figure>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '40px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/X2EnPphHqcw"
                title="Demo Result"
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: '12px',
                  border: 'none',
                  display: 'block',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <figcaption className="caption" style={{ marginTop: '12px' }}>
                Aurora Borealis Tool Demo
              </figcaption>
            </figure>
          </div>
        </section>
        

      </article>
    </div>
  );
};

export default Aurora;