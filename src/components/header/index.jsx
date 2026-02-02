import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../../assets/HomePage2.svg';
import AboutMeIcon from '../../assets/AboutMe.svg';
import ExperienceIcon from '../../assets/Experience.svg';
import ProjectsIcon from '../../assets/Projects.svg';

const Header = () => {
    const navigate = useNavigate();
    const iconStyle = {
    border: '3px solid #838383',
    borderRadius: '20px',
    padding: '10px',
    backgroundColor: 'transparent', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    width: '90px',  // fixed w
    height: '90px'  // fixed h
    };

    return (
    <nav className="w-full text-white fixed top-0 z-50 bg-white bg-opacity-100 flex items-center justify-between" style={{pointerEvents: 'auto', padding: '14px'}}>
        
        {/* left */}
        <button
        onClick={() => navigate('/')}
        className="flex items-center ml-4"
        aria-label="Home"
        style={iconStyle}
        >
        <img src={MenuIcon} alt="Home" style={{width: '80px', height: '70px'}} />
        </button>

        {/* center */}
        <div style={{ 
        display: 'flex', 
        alignItems: 'center',  
        gap: 35,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%) translateY(-90px)'  //fix height
        }}>
        <button 
            onClick={() => navigate('/about')}
            aria-label="About"
            style={iconStyle}
        >
            <img src={AboutMeIcon} alt="About Me" style={{width: '80px', height: '70px'}} />
        </button>
        <button 
            onClick={() => navigate('/experience')}
            aria-label="Experience"
            style={iconStyle}
        >
            <img src={ExperienceIcon} alt="Experience" style={{width: '50px', height: '70px'}} />
        </button>
        <button 
            onClick={() => navigate('/projects')}
            aria-label="Projects"
            style={iconStyle}
        >
            <img src={ProjectsIcon} alt="Projects" style={{width: '80px', height: '70px'}} />
        </button>
        </div>

        {/* empty for flex balance */}
        <div style={{width: '120px'}}></div>
    </nav>
    );
};

export default Header;