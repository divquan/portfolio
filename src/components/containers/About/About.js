import React from "react";
import profile from "../../../assets/avatar.png";
import Button from "../../Button/Button";
import { bios } from "../../../Data";
import "./About.scss";
import { motion } from "framer-motion";

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
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="col2_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
            in ipsa quo, optio iste. Dolore sunt adipisci, iusto eligendi
            architecto neque eum, magnam minima libero aliquid, sequi sit quasi.
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
          <Button buttonName="Download Resume" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
