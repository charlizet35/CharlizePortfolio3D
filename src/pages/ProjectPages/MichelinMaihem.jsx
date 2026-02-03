import React from 'react';
import "../../App.css";

const MichelinMaihem = () => {
  return (
    <div className="gradient-background">
      <div className="project-card">
        {/* header*/}
        <header>
          <h1 style={{ margin: 0 }}>Michelin Maihem</h1>
          <p style={{ color: '#888' }}>Case Study: 3D Experience Design</p>
        </header>

        {/* image/caption */}
        <figure style={{ margin: 0 }}>
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Project Screenshot" 
            className="project-media"
          />
          <figcaption className="caption">Initial render of the Spline environment.</figcaption>
        </figure>

        {/* info */}
        <section>
          <h3>The Challenge</h3>
          <p>
            example example example example explanation etc. blah blah blah
            
          </p>
        </section>

      </div>
    </div>
  );
};

export default MichelinMaihem;