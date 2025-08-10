// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">SREEJANI BANIK</span>
      </div>
      <div className="navbar-right">
        <a
          href="https://github.com/SreejaniBanik"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sreejani-banik-4a2bab281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
