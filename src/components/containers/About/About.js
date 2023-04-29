import React from "react";
import profile from "../../../assets/avatar_2.png";
import Button from "../../Button/Button";
import { bios } from "../../../Data";
import "./About.scss";
import { motion } from "framer-motion";
import resume from "../../../assets/resume.pdf";

// const Contact = () => {
//   return <div className="about_contacts"> </div>;
// };

function About() {
  return (
    <div id="about">
      <motion.div
        className="about_header"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>Who am I?</p>
        <h3>About Me</h3>
      </motion.div>
      <div className="about_container">
        <motion.div
          className="about_container-col1"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.3, type: "tween" }}
          whileHover={{ borderRadius: "50%" }}
        >
          <motion.img
            src={profile}
            whileHover={{ borderRadius: "50%" }}
            transition={{ duration: 0.3 }}
            alt="my_avatar"
          />
        </motion.div>
        <motion.div
          className="about_container-col2"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="col2_text">
            Hey there! I'm Divine Korankye Quansah, a full stack developer with
            2 years of experience. I specialize in developing web and mobile
            applications using the MERN stack. My portfolio showcases some of
            the apps I've built, and I hope you find them interesting. Thanks
            for checking it out, and I'd love to chat with you about any
            projects you have in mind!
          </div>
          <div className="col2_bios">
            {bios.map((bio) => (
              <div className="bio" key={bio.id}>
                <div>
                  <span>{bio.icon} </span>
                  <span>{bio.key} :</span>
                </div>
                <span>{bio.value}</span>
              </div>
            ))}
          </div>
          <a href={resume}>
            <Button buttonName="Download Resume" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
