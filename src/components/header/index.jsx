import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../../assets/HomePage2.svg';
import AboutMeIcon from '../../assets/AboutMe.svg';
import ExperienceIcon from '../../assets/Experience.svg';
import ProjectsIcon from '../../assets/Projects.svg';

const s = (px) => `clamp(${px * 0.4}px, ${(px / 1440) * 100}vw, ${px}px)`;

const Header = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);

    const iconStyle = {
        border: `clamp(1.5px, 0.2vw, 3px) solid #838383`,
        borderColor: '#838383',
        borderRadius: s(20),
        padding: s(10),
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        width: s(85),
        height: s(85),
        position: 'relative',
        flexShrink: 0,
    };

    const hoverStyle = {
        borderColor: '#ffffff',
        backgroundColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 0 12px rgba(255,255,255,0.25)',
    };

    const labelStyle = {
        fontFamily: 'Contb',
        position: 'absolute',
        bottom: `calc(${s(-20)} - 2px)`,
        fontSize: s(12),
        letterSpacing: '1px',
        opacity: 0,
        transition: 'opacity 0.2s ease',
        whiteSpace: 'nowrap',
    };

    return (
        <nav
            className="w-full text-white fixed top-0 z-50 bg-white bg-opacity-100 flex items-center justify-between"
            style={{ pointerEvents: 'auto', padding: s(16) }}
        >
            {/* left — home button */}
            <button
                onClick={() => navigate('/')}
                className="flex items-center"
                aria-label="Home"
                style={{
                    ...iconStyle,
                    marginLeft: s(16),
                    ...(hovered === 'home' ? hoverStyle : {}),
                }}
                onMouseEnter={() => setHovered('home')}
                onMouseLeave={() => setHovered(null)}
            >
                <img src={MenuIcon} alt="Home" style={{ width: s(60), height: s(60) }} />
                <span style={{ ...labelStyle, opacity: hovered === 'home' ? 1 : 0 }}>
                    HOME
                </span>
            </button>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: s(35),
                    position: 'absolute',
                    left: '50%',
                    transform: `translateX(-50%) translateY(calc(-1 * ${s(85)}))`,
                }}
            >
                <button
                    onClick={() => navigate('/about')}
                    aria-label="About"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'about' ? hoverStyle : {}),
                    }}
                    onMouseEnter={() => setHovered('about')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={AboutMeIcon} alt="About Me" style={{ width: s(80), height: s(70) }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'about' ? 1 : 0 }}>
                        ABOUT
                    </span>
                </button>

                <button
                    onClick={() => navigate('/experience')}
                    aria-label="Experience"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'experience' ? hoverStyle : {}),
                    }}
                    onMouseEnter={() => setHovered('experience')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={ExperienceIcon} alt="Experience" style={{ width: s(45), height: s(70) }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'experience' ? 1 : 0 }}>
                        EXPERIENCE
                    </span>
                </button>

                <button
                    onClick={() => navigate('/projects')}
                    aria-label="Projects"
                    style={{
                        ...iconStyle,
                        ...(hovered === 'projects' ? hoverStyle : {}),
                    }}
                    onMouseEnter={() => setHovered('projects')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={ProjectsIcon} alt="Projects" style={{ width: s(80), height: s(70) }} />
                    <span style={{ ...labelStyle, opacity: hovered === 'projects' ? 1 : 0 }}>
                        PROJECTS
                    </span>
                </button>
            </div>

            <div style={{ width: s(120), flexShrink: 0 }} />
        </nav>
    );
};

export default Header;