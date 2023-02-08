import React, { useState } from "react";
import { experiences, SkillIcons } from "../../../Data";

import "./Skills.scss";
const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div id="skills" className="skills_container">
      <div className="skills_container-header">
        <p>What can I do?</p>
        <h3>Skills</h3>
      </div>
      <div className="skills-buttons">
        <div
          className={active === 1 ? "buttona active" : "buttona inactive"}
          onClick={() => setActive(1)}
        >
          <div>
            <p>Skills</p>
          </div>
        </div>
        <div
          className={active === 2 ? "buttona active" : "buttona inactive"}
          onClick={() => setActive(2)}
        >
          <div>
            <p>Experiences</p>
          </div>
        </div>
      </div>
      {active === 1 && (
        <div className="skillIcons">
          {SkillIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      )}

      {active === 2 && (
        <div className="skillsExperiences">
          <div className="experiencs">
            {experiences.map((experience, index) => (
              <div className="experience" key={index}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <a href={experience.link}>{experience.company}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
