import React from 'react';
import './footer.css';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/charlizet35" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/charlize-tran/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <p>© 2026 Charlize Tran</p>
    </footer>
  );
};

export default Footer;