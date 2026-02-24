import React from 'react';
import "../../App.css";
import homepageGif from '../../assets/homepage_wave_example.gif';


import HomePageDemo from '../../assets/HomePageDemo.gif';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import DBMS from '../../assets/DBMS.png';
import schema from '../../assets/schemaSQL.png';
import doctorVideo from '../../assets/doctor.mp4';
import receptionistVideo from '../../assets/Receptionist.mp4';
import adminVideo from '../../assets/admin_compressed.mp4';

const Portfolio = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Portfolio App</h1>
          <p className="project-date">A 2 month project, Jan 2026</p>

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
            
          </p>
        
          <p>
            Relational Models: 
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={image1} alt="Relational Schema 1" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Smaller Scope</figcaption>
            </figure>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={image2} alt="Relational Schema 2" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Larger Scope</figcaption>
            </figure>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin: 0 }}>
              <img src={schema} alt="Database Schema" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">Database Schema SQL Snippet</figcaption>
            </figure>
          </div>

          <p> 
            After designing our database schema, we implemented it in MySQL and built a Node.js backend to handle API requests and queries. We secured protected routes using JWT access tokens and tested all endpoints with Postman to ensure correct functionality in tandem with frontend development. The backend was designed to integrate with cloud services like Azure, though deployment was handled by the team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '20px' }}>
            <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '93%', margin: 0 }}>
              <img src={DBMS} alt="Database Schema" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
              <figcaption className="caption">MySQL Workbench with Appointments Table</figcaption>
            </figure>
          </div>
        </section>

        <section className="text-content">
          <h3>03 Result</h3>
          <p> 
            Below are a few videos of the final application separated by roles.
          </p>
        </section>


        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '40px' }}>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', margin: 0 }}>
            <video 
              src={doctorVideo} 
              controls
              style={{ width: '100%', borderRadius: '12px', display: 'block' }}
            />
            <figcaption className="caption">Doctor Role Demo</figcaption>
          </figure>
          
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', margin: 0 }}>
            <video 
              src={receptionistVideo} 
              controls
              style={{ width: '100%', borderRadius: '12px', display: 'block' }}
            />
            <figcaption className="caption">Receptionist Role Demo</figcaption>
          </figure>
          
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', margin: 0 }}>
            <video 
              src={adminVideo} 
              controls
              style={{ width: '100%', borderRadius: '12px', display: 'block' }}
            />
            <figcaption className="caption">Admin Role Demo</figcaption>
          </figure>
        </div>

      </article>
    </div>
  );
};

export default Portfolio;