import React, { useState } from "react";
import { experiences, SkillIcons } from "../../../Data";
import { motion } from "framer-motion";
import "./Skills.scss";
const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div id="skills" className="skills_container">
      <motion.div
        className="skills_container-header"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>What can I do?</p>
        <h3>Skills</h3>
      </motion.div>
      <motion.div
        className="skills-buttons"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
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
      </motion.div>
      {active === 1 && (
        <motion.div
          className="skillIcons"
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
        >
          {SkillIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </motion.div>
      )}

      {active === 2 && (
        <motion.div
          className="skillsExperiences"
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
