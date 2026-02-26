import React from 'react';
import "../../App.css";
import homepageGif from '../../assets/homepage_wave_example.gif';
import moodBoard from '../../assets/Moodboard.png';
import wireframe from '../../assets/AboutMeLofiWireframe.png';
import rig from '../../assets/rig.gif';
import wip1 from '../../assets/white_projects_page.png';
import wip2 from '../../assets/WIPOutlineVideo.gif';

const Portfolio = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Portfolio App</h1>
          <p className="project-date">A 1 month project, Jan 2026</p>

          <figure className="image-hover-container" style={{ margin: 0, marginTop: '15px' }}>
            <img 
              src={homepageGif}
              alt="Project Screenshot" 
              className="project-media"
              style={{ width: '100%', maxWidth: '500px', height: 'auto'}}
            />
            <a 
              href="https://github.com/charlizet35/CharlizePortfolio3D" 
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
            I built this portfolio app as a way to showcase my projects in an interactive and engaging way. I wanted to create a unique experience that reflected my personality and skills as a developer and 3D artist, while also providing an easy way for visitors to navigate through my work. My website features a 3D model that reacts to user interactions, as well as a dynamic layout that highlights my projects and achievements. 
          </p>
          <p>
            I built the frontend with Spline and React, and the app is deployed on Vercel for seamless hosting and performance.
          </p>
        </section>

        <section className="text-content">
          <h3>02 Process</h3>
          <p> 
            My inspiration first came from the NPC models I created for my game, Michelin Maihem. Having already rigged them, I realized I could create simple yet interesting animations that could follow small user interactions but wouldn't affect overall site performance.   
          </p>
          <p>
            I drew inspiration from multiple sources, most notably the font and gray gradient from Nintendo's Wii interface, Toro Inoue (Sony's official mascot), and Chiikawa.  
          </p>
        
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={moodBoard} alt="Moodboard" style={{ width: '200%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Moodboard</figcaption>
            </figure>
          </div>
          <p> 
            I then sketched out some rough outlines for the layout of each page on paper, and used Framer to design the low fidelity wireframe. 
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '93%', margin: 0 }}>
              <img src={wireframe} alt="About Me Lofi Wireframe" style={{ width: '50%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Lo-fi Wireframe for AboutMe Page</figcaption>
            </figure>
          </div>
          <p>
            My character was originally modeled and rigged in Blender, but I chose to animate some momevements and poses to be triggered by user interactions in Spline. 
          </p>
          <p>
            Although I had an idea of the aesthetic I wanted to achieve, I had to experiment with different types shaders and materials before deciding on the final look. However, I chose to minimize the textures but used a few of Spline's built in shaders such as their outline shader (inverse hull) and toon shader to emulate the low-poly minimal grey gradient aesthetic.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={rig} alt="Model rig" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Model Rig</figcaption>
            </figure>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={wip1} alt="Projects Page Model WIP" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Projects Page Work in Progress</figcaption>
            </figure>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={wip2} alt="Projects Page Model WIP" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Home Page Work in Progress</figcaption>
            </figure>
          </div>

          <p>
            Finally, I used Spline's code export for React.js to implement the 3D scene and CSS for styling. The icons were created with a combination of using Framer's vector editing tool and taking screenshots of my models and using Adobe Express to convert them into SVGs.
          </p>
        </section>

        <section className="text-content">
          <h3>03 Result</h3>
          <p> 
            Although I had some challenges implementing Spline with React, I am happy to have brought my vision to life. It was a good opportunity for me to experiment with new tools and workflows to develop a website that combines my creativity and technical skills. I hope you enjoyed interacting with my portfolio!
          </p>
        </section>

      </article>
    </div>
  );
};

export default Portfolio;