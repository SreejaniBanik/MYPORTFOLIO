// Experiences.js
import React from 'react';
import './Experiences.css';

const experiencesData = [
    {
    title: 'Hybrid Intern',
    company: 'Infosys - Pragati: Path to Future ',
      // example link
    duration: 'Jul 2025 – Present',
    description: [
       'Currently working on projects involving Cloud Computing and Generative AI under industry mentorship.',
    'Exploring real-world applications of modern AI tools and scalable cloud solutions.',
    'Participating in a flagship 3-month hybrid internship with hands-on project exposure and expert guidance.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'MSME Initiative, Govt. of India – Pinnacle Labs',
      // example link
    duration: 'Jul 2025 – Aug 2025',
    location: 'Kolkata, India',
    description: [
       'Built responsive web applications using HTML, CSS, JavaScript, and React, enhancing UI/UX and overall performance.',
    'Focused entirely on frontend development under the guidance of mentors.',
    'Collaborated across the Software Development Life Cycle (SDLC) in a mentor-guided environment.'
    ],
  },
  
  {
    title: 'Technology Consulting Intern (Remote)',
    company: 'Accenture Australia – Forage Virtual Internship',
    // example link
    duration: 'May 2025',
    description: [
      'Conducted process analysis, identified inefficiencies, and recommended data-driven improvements.',
      'Delivered a professional consulting report with actionable business solutions.',
    ],
  },
  
];

const Experiences = () => {
  return (
    <section className="experiences-section">
      <h2>Experiences</h2>
      {experiencesData.map(({ title, company, companyLink, duration, location, description }, index) => (
        <div key={index} className="experience-card">
          <h3>{title}</h3>
          <p className="company">
            {companyLink ? (
              <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
            ) : (
              company
            )}
          </p>
          {location && <p className="location">{location}</p>}
          <p className="duration">{duration}</p>
          <ul>
            {description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
