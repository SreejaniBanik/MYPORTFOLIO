import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: [
    { skill: 'C++', level: 80 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'Java', level: 60 },
  ],
  Frontend: [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 90 },
    { skill: 'JS', level: 80 },
    { skill: 'React', level: 80 },
  ],
  Backend: [
    { skill: 'Node.js', level: 70 },
    { skill: 'Express.js', level: 80 },
  ],
  Databases: [
    { skill: 'MySQL', level: 90 },
    { skill: 'MongoDB', level: 60 },
  ],
  'Core Fundamentals': [
    { skill: 'DBMS', level: 90 },
    { skill: 'OS', level: 60 },
    { skill: 'OOPs', level: 70 },
    { skill: 'CN', level: 80 },
  ],
  Tools: [
    { skill: 'VS Code', level: 90 },
    { skill: 'Git & GitHub', level: 80 },
  ],
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          {skills.map(({ skill, level }) => (
            <div key={skill} className="skill">
              <div className="skill-header">
                <span>{skill}</span>
                <span>{level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
