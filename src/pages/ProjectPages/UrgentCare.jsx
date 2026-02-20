import React from 'react';
import "../../App.css";
import GameImage from '../../assets/3d_play_scene.png';
import Level1Gif from '../../assets/Level1.gif';
import Level1Img from '../../assets/Level1.png';
import Level2Gif from '../../assets/Level2.gif';
import Level2Img from '../../assets/Level2.png';
import Sketch from '../../assets/npc_design.jpg';
import front from '../../assets/npc_front.png';
import side from '../../assets/npc_side.png';
import back from '../../assets/npc_back.png';
import walk from '../../assets/npc_walk.png';

const UrgentCare = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Urgent Care Management System</h1>
          <p className="project-date">A 3 month project, Sep 2025</p>

          <figure>
            <img 
              src={GameImage}
              alt="Project Screenshot" 
              className="project-media"
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            />
            {/*<figcaption className="caption">Initial render of the Spline environment.</figcaption>*/}
          </figure>
          
          <p className="team-label"><i>Team:</i></p>
          <p className="team-list" >
            <span style={{ color: '#525252' }}>Charlize Tran, </span>
            <break />
            Dayne Smith, Karen Suensom, Billy Ngo, Asibong Ephraim
          </p>
        </header>

        <section className="text-content">
          <h3>01 Description</h3>
          <p> Michelin Maihem is a frantic, physics-based couch co-op game where players are robots running the world's first fully automated restaurant. Players must work together to prepare and serve food to customers while dodging obstacles in a chaotic kitchen environment.
            <break/>
          </p>
          <p>
            This game is heavily inspired by the Overcooked series by Ghost Town Games. We wanted to recreate the same chaotic stress and fun with a heavier emphasis on character physics-based controls and in-level modifiers including bombs, lightning, and trains.
          </p>
          <p>
            I was primarily responsible for designing and building the 3D level layouts and start screen including lighting and post processing, although Alan provided the initial sketch layout. I also designed and created the NPCs with Blender, implemented them using Unity's AI Navmesh system, and was a developer for various gameplay features.
          </p>
        </section>

        <section className="text-content">
          <h3>02 Process</h3>
          <p> 
            Levels in progress
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
              <img src={Level1Gif} alt="Level 1 Gif" style={{ width: '100%', borderRadius: '12px' }} />
              <figcaption className="caption">Level 1 Layout</figcaption>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
              <img src={Level2Gif} alt="Level 2 Gif" style={{ width: '100%', borderRadius: '12px' }} />
              <figcaption className="caption">Level 2 Layout</figcaption>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img src={Level1Img} alt="Level 2 Gif" style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img src={Level2Img} alt="Level 2 Image" style={{ width: '100%', borderRadius: '12px' }} />
            </div>
          </div>
          <figcaption className="caption">Level In-Game Perspective</figcaption>

          <p> 
            NPCs in progress
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', paddingLeft: '45px', paddingRight: '45px', marginTop: '12px' }}>
            <img src={Sketch} alt="NPC Design Sketch" style={{ width: '50%', borderRadius: '12px' }} />
          </div>
          <figcaption className="caption">Initial NPC Design Sketch</figcaption>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '35px', paddingLeft: '45px', paddingRight: '45px', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img src={front} alt="front" style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img src={side} alt="side" style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img src={walk} alt="walk" style={{ width: '100%', borderRadius: '12px' }} />
            </div>
          </div>
          <figcaption className="caption">NPC Model</figcaption>


        </section>

        <section className="text-content">
          <h3>03 Result</h3>
          <p> 

          </p>
        </section>

        <figure style={{ margin: 0, marginTop: '30px' }}>
          <div className="video-container" style={{ borderRadius: '12px', overflow: 'hidden', width: '65%', margin: '0 auto' }}>
            <iframe
              src="https://www.youtube.com/embed/9iDPN0rl_x8?si=YhWfQ7g6kMEI84hA&loop=1&playlist=9iDPN0rl_x8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', aspectRatio: '16/9', display: 'block', borderRadius: '12px' }}
            ></iframe>
          </div>
          <figcaption className="caption">Michelin Maihem Gameplay Preview</figcaption>
        </figure>

      </article>
    </div>
  );
};

export default UrgentCare;