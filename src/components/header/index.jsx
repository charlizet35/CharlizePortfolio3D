import React from 'react';
import MenuIcon from '../../assets/HomePage2.svg';
import AboutMeIcon from '../../assets/AboutMe.svg';
import ExperienceIcon from '../../assets/Experience.svg';
import ProjectsIcon from '../../assets/Projects.svg';

const Header = () => {
  return (
    <nav className="relative w-full p-4 bg-gray-800 text-white fixed top-0 z-10 flex items-center">
      {/* Left-aligned Home button with spacing */}
      <div className="ml-4">
        <button>
          <img src={MenuIcon} alt="Home" className="w-4 h-4" />
        </button>
      </div>

      {/* Centered icons with equal spacing */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
        <button>
          <img src={AboutMeIcon} alt="About Me" className="w-4 h-4" />
        </button>
        <button>
          <img src={ExperienceIcon} alt="Experience" className="w-4 h-4" />
        </button>
        <button>
          <img src={ProjectsIcon} alt="Projects" className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Header;