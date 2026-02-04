import React from 'react';
import "../../App.css";
import GameImage from '../../assets/3d_play_scene.png';

const MichelinMaihem = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Michelin Maihem</h1>
          <p className="project-date">A 3 month project, Dec 2025</p>

          <figure>
          <img 
            src={GameImage}
            alt="Project Screenshot" 
            className="project-media"
            style={{ width: '500px', height: 'auto' }}
          />
          <figcaption className="caption">Initial render of the Spline environment.</figcaption>
        </figure>
          
          <p className="team-label"><i>Team:</i></p>
          <p className="team-list">
            <span style={{ color: '#525252' }}>Charlize Tran (3D Level Designer/3D Artist/Developer), </span>
            <break />
              Abida Ahmed (Developer/Artist), 
            Josh Miguel (Team Lead/Developer), Alan Tony-Itoya (Developer/Sound Designer), 
            Derek Herrera (UI Designer), Ebrahim Vejlani (UI Designer), Ishita Uddarraju (Artist), 
            Siara Uddin (Artist)
          </p>
        </header>

        <section className="text-content">
          <h3>Description</h3>
          <p> Michelin Maihem is a frantic, physics-based couch co-op game where players are robots running the world's first fully automated restaurant. Players must work together to prepare and serve food to customers while dodging obstacles in a chaotic kitchen environment.
            <break/>
          </p>
        </section>

      </article>
    </div>
  );
};

export default MichelinMaihem;