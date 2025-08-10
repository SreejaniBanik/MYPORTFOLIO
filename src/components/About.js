import React from "react";
 // update the path as needed
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>

        <div className="about-main">
          <div className="about-text">
            <div className="info-cards">
              <div className="info-card">
                <h3>Location</h3>
                <p>Roy Bahadur Road, Behala, Kolkata, WB</p>
              </div>
              <div className="info-card">
                <h3>Education</h3>
                <p>Bachelor of Technology, ECE</p>
              </div>
            </div>

            <p>
              I'm <strong>Sreejani Banik</strong>, a pre-final-year{" "}
              <strong>Electronics and Communication Engineering</strong> student passionate about
              building impactful, scalable, and efficient software solutions.
            </p>

            <p>
              With a strong foundation in <strong>Data Structures & Algorithms</strong>, problem-solving,
              and <strong>full-stack web development</strong>, I bring both technical depth and creative
              problem-solving to every project I work on.
            </p>

            <p>
              I have hands-on experience in developing real-time applications,
              responsive web platforms, and API integrations through internships and personal projects.
              My work spans technologies like <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>C++</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>Python</strong>, blending front-end creativity
              with back-end efficiency.
            </p>

            <p>
              Beyond academics, I’ve solved <strong>150+ coding problems</strong> on platforms like{" "}
              <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong>, mentored contributors in{" "}
              <strong>GirlScript Summer of Code</strong>, and collaborated with teams to deliver
              high-quality solutions. I thrive in dynamic environments where I can learn, adapt,
              and contribute to meaningful software innovations.
            </p>

            <blockquote className="about-quote">
              💡 <strong>Mission:</strong> To combine technical expertise, problem-solving skills, and
              teamwork to create software that makes a difference.
            </blockquote>
          </div>
          <div className="about-image-container">
    <img
      src="https://i.postimg.cc/0jTtC2Sq/Screenshot-2025-08-10-204417-removebg-preview.png"
      alt="Astronaut"
      className="about-image"
    />
  </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
