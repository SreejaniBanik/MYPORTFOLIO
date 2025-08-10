// Projects.js
import React from 'react';
import './Project.css';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React.js showcasing skills, experiences, and projects.',
    techStack: ['React', 'CSS', 'JavaScript'],
    
  },
   {
    title: 'IntegriHire – AI-Powered Job Scam Detection',
    description: 'Built a full-stack platform for real-time fake job detection using Groq AI APIs with React.js, Node.js, Express.js, and MongoDB.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI'],
    
  },
 
   {
    title: 'CollabSphere – Student–Startup Collaboration',
    description: 'Developed a responsive landing page and designed full-stack features using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    // Replace with actual GitHub link
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map(({ title, description, techStack, link, github }, index) => (
          <div key={index} className="project-card">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <div className="tech-stack">
              {techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {link && <a href={link} target="_blank" rel="noopener noreferrer">Live</a>}
              {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
