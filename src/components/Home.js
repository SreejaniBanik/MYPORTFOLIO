import React from "react";
import "./Home.css";
import profilePic from '../assets/profilepicture.jpg';
 // adjust the path if needed

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Floating bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>

      <div className="home-text">
        <p className="intro">Hello</p>
        <h1>I'm Sreejani Banik</h1>
        <div className="social-icons">
          <a
            href="https://github.com/SreejaniBanik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sreejani-banik-4a2bab281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <a href="/resumesreejani.pdf" download className="download-cv">
          Download CV
        </a>
      </div>
      <div className="profile-image-container">
        <img src={profilePic} alt="Sreejani Banik" className="profile-image" />
      </div>

      
    </section>
  );
};

export default Home;
