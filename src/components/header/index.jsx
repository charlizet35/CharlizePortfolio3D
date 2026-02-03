import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../../assets/HomePage2.svg';
import AboutMeIcon from '../../assets/AboutMe.svg';
import ExperienceIcon from '../../assets/Experience.svg';
import ProjectsIcon from '../../assets/Projects.svg';

const Header = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = React.useState(null); 

    const iconStyle = {
        border: '3px solid #838383',
        borderColor: '#838383',
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: 'transparent', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        width: '85px',
        height: '85px',
        position: 'relative' 
    };

    const hoverStyle = {
        borderColor: '#d4d4d4',
        backgroundColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 0 12px rgba(255,255,255,0.25)'
    };

    const labelStyle = {
        fontFamily: 'Contb',
        position: 'absolute',
        bottom: '-20px',
        fontSize: '12px',
        letterSpacing: '1px',
        opacity: 0,
        transition: 'opacity 0.2s ease',
        whiteSpace: 'nowrap'
    };

    return (
        <nav className="w-full text-white fixed top-0 z-50 bg-white bg-opacity-100 flex items-center justify-between"
            style={{ pointerEvents: 'auto', padding: '16px' }}>

            {/* left */}
            <button
                onClick={() => navigate('/')}
                className="flex items-center ml-4"
                aria-label="Home"
                style={{
                    ...iconStyle,
                    ...(hovered === 'home' ? hoverStyle : {})
                }}
                onMouseEnter={() => setHovered('home')}
                onMouseLeave={() => setHovered(null)}
            >
                <img src={MenuIcon} alt="Home" style={{ width: '60px', height: '60px' }} />
                <span style={{ ...labelStyle, opacity: hovered === 'home' ? 1 : 0 }}>
                    HOME
                </span>
            </button>

            {/* center */}
            <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 35,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%) translateY(-85px)'
            }}>

                <button
                    onClick={() => navigate('/about')}
                    aria-label="About"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'about' ? hoverStyle : {})
                    }}
                    onMouseEnter={() => setHovered('about')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={AboutMeIcon} alt="About Me" style={{ width: '80px', height: '70px' }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'about' ? 1 : 0 }}>
                        ABOUT
                    </span>
                </button>

                <button
                    onClick={() => navigate('/experience')}
                    aria-label="Experience"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'experience' ? hoverStyle : {})
                    }}
                    onMouseEnter={() => setHovered('experience')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={ExperienceIcon} alt="Experience" style={{ width: '45px', height: '70px' }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'experience' ? 1 : 0 }}>
                        EXPERIENCE
                    </span>
                </button>

                <button
                    onClick={() => navigate('/projects')}
                    aria-label="Projects"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'projects' ? hoverStyle : {})
                    }}
                    onMouseEnter={() => setHovered('projects')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={ProjectsIcon} alt="Projects" style={{ width: '80px', height: '70px' }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'projects' ? 1 : 0 }}>
                        PROJECTS
                    </span>
                </button>
            </div>

            <div style={{ width: '120px' }}></div>
        </nav>
    );
};

export default Header;
