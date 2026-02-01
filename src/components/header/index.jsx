import React from 'react';
import MenuIcon from '../../assets/HomePage2.svg';
import AboutMeIcon from '../../assets/AboutMe.svg';
import ExperienceIcon from '../../assets/Experience.svg';
import ProjectsIcon from '../../assets/Projects.svg';

const Header = () => {
  return (
    <nav className="w-full text-white fixed top-0 z-50 bg-white bg-opacity-100 flex items-center justify-center gap-30" style={{pointerEvents: 'auto', paddingTop: '20px', padding: '20px'}}>
      {/* fix left-aligned home button */}
      <button className="flex items-center absolute left-4">
        <img src={MenuIcon} alt="Home" style={{width: '100px', height: '100px'}} />
      </button>

      <button className="flex items-center">
        <img src={AboutMeIcon} alt="About Me" style={{width: '100px', height: '100px'}}/>
      </button>
      <button className="flex items-center">
        <img src={ExperienceIcon} alt="Experience" style={{width: '70px', height: '100px'}} />
      </button>
      <button className="flex items-center">
        <img src={ProjectsIcon} alt="Projects" style={{width: '100px', height: '100px'}} />
      </button>
    </nav>
  );
};

export default Header;