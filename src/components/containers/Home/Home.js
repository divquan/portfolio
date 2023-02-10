import React from "react";
import "./Home.scss";
import profile from "../../../assets/avatar.png";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    >
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
        <motion.p
          className="text"
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          Passionate <br />
          to craft innovative
          <br /> web products
        </motion.p>
      </div>
      <Button buttonName="Connect With Me " />
    </motion.div>
  );
};

export default Home;
