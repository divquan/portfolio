import React from "react";
import { motion } from "framer-motion";
import "./Button.scss";
const Button = ({ buttonName, onClick, addtionalStyles }) => {
  return (
    <motion.div
      className="button"
      animate={{ y: [0, 4, 8, 12, 8, 4, 0] }}
      transition={{ repeat: Infinity }}
      onClick={onClick}
      style={addtionalStyles}
    >
      <a href="#contact">
        <p>{buttonName}</p>
      </a>
    </motion.div>
  );
};

export default Button;
