import React from 'react';
import "../../App.css";
import reelScreenShot from '../../assets/ReelScreenShot.png';
import demoReel from '../../assets/Demo Reel 2026.mov';

const DemoReel = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Technical Direction Demo Reel</h1>
          <p className="project-date">An Ongoing Project, 2025</p>

          <figure className="image-hover-container" style={{ margin: 0, marginTop: '15px' }}>
            <img 
              src={reelScreenShot}
              alt="Project Screenshot" 
              className="project-media"
              style={{ width: '100%', maxWidth: '500px', height: 'auto'}}
            />
            <a 
              href="https://vimeo.com/1160704097" 
              target="_blank" 
              rel="noopener noreferrer"
              className="image-overlay-link"
            >
              <span className="overlay-icon">↗</span>
              <span style={{ color: '#cccccc' }}>View on Vimeo</span>
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
            This demo reel is a collection of my recent work across 3D design, game development, and technical tools. It includes environment and asset work, gameplay systems, and custom Maya tools buil to streamline workflows. I created and edited this using DaVinci Resolve.
          </p>
        </section>

        <section className="text-content">
          <h3>02 Result</h3>
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

export default DemoReel;