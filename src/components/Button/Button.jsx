import React from "react";
import { motion } from "framer-motion";
import "./Button.scss";
const Button = ({ buttonName }) => {
  return (
    <motion.div
      className="button"
      animate={{ y: [0, 4, 8, 12, 8, 4, 0] }}
      transition={{ repeat: Infinity }}
    >
      <a href="#contact">
        <p>{buttonName}</p>
      </a>
    </motion.div>
  );
};

export default Button;
