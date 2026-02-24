import React from 'react';
import "../../App.css";
import front from '../../assets/npc_front.png';
import side from '../../assets/npc_side.png';


import HomePageDemo from '../../assets/HomePageDemo.gif';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import DBMS from '../../assets/DBMS.png';
import schema from '../../assets/schemaSQL.png';
import doctorVideo from '../../assets/doctor.mp4';
import receptionistVideo from '../../assets/Receptionist.mp4';
import adminVideo from '../../assets/admin_compressed.mp4';

const UrgentCare = () => {
  return (
    <div className="gradient-background">
      <article className="project-card">
        
        <header>
          <h1 style={{fontSize: '3.5rem'}}>Urgent Care Management System</h1>
          <p className="project-date">A 4 month project, Feb 2025</p>

          <figure className="image-hover-container" style={{ margin: 0, marginTop: '15px' }}>
            <img 
              src={HomePageDemo}
              alt="Project Screenshot" 
              className="project-media"
              style={{ width: '100%', maxWidth: '500px', height: 'auto'}}
            />
            <a 
              href="https://github.com/daynesmith/Urgent-Care-App" 
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
            <span style={{ color: '#525252' }}>Charlize Tran, </span>
            <break />
            Dayne Smith, Karen Suensom, Billy Ngo, Asibong Ephraim
          </p>
        </header>

        <section className="text-content">
          <h3>01 Description</h3>
          <p> My team and I were tasked with creating a management system for clinics that handled patient appointment bookings and medical history, doctor and staff scheduling, specialist referrals, billing, and inventory. As a result, we built a full-stack web application that managed these requirements. Built with Node.js, MySQL, Vite, and Azure, it offers secure role-based access and streamlined workflows for medical staff and patients. 
            <break/>
          </p>
          <p>
            Along with these core features, we also implemented reports with data queried from the database for clinic administrators to view and analyze.
          </p>
        </section>

        <section className="text-content">
          <h3>02 Process</h3>
          <p> 
            Before building, my team and I completed a domain analysis to determine the key features and requirements for our application, which included referencing existing clinic websites and personal medical portals. Given this research, we could construct our mini-world and define our scope, and subsequently develop our relational model and database schema. 
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

export default UrgentCare;