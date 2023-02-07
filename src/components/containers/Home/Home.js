import React from "react";
import "./Home.scss";
import profile from "../../../assets/avatar.png";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
const Home = () => {
  return (
    <div id="home">
      <div className="home_img">
        <img src={profile} alt="avatar" />
      </div>
      <div className="home_intro">
        <p>
          Hi, I'm <span style={{ color: "#8c12f0" }}>Quansah Divine</span>
        </p>
        <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.438)" }}>
          A fullstack developer
        </p>
        <p className="text">
          Passionate <br />
          to craft innovative
          <br /> web products
        </p>
      </div>
      <Button buttonName="Connect With Me " />
    </div>
  );
};

export default Home;
