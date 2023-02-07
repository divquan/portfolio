import React from "react";
import profile from "../../../assets/avatar.png";
import Button from "../../Button/Button";
import { bios } from "../../../Data";
import "./About.scss";

// const Contact = () => {
//   return <div className="about_contacts"> </div>;
// };

function About() {
  return (
    <div id="about">
      <p className="about_header">Who am I?</p>
      <h3>About Me</h3>
      <div className="about_container">
        <div className="about_container-col1">
          <img src={profile} alt="my_avatar" />
        </div>
        <div className="about_container-col2">
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
        </div>
      </div>
    </div>
  );
}

export default About;
