import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { navLinks, socials } from "../../Data";
import { MdClose, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const menuVariants = {
    hidden: {
      scale: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    visible: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinksVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
      setToggle(false);
    });
  }, []);

  return (
    <motion.div
      className={scroll ? "nav_container active" : "nav_container"}
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="nav_logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h3>dq</h3>
      </motion.div>
      <div>
        <ul className="nav_links">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={`#${navLink}`}>{navLink}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_socials">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noreferrer">
            {social.svg}
          </a>
        ))}
      </div>
      <div
        className="nav_button"
        onClick={() => {
          setToggle((init) => (init ? false : true));
        }}
      >
        {toggle ? (
          <MdClose
            size={25}
            color="white"
            style={{ zIndex: 15, position: "relative" }}
            onClick={() => setScroll(true)}
          />
        ) : (
          <MdMenu size={25} color="white" onClick={() => setScroll(false)} />
        )}
      </div>
      <motion.div
        className="Menu"
        variants={menuVariants}
        initial="hidden"
        animate={toggle ? "visible" : "hidden"}
      >
        <motion.div className="menu-items">
          {navLinks.map((navLink, index) => (
            <motion.li
              key={index}
              variants={navLinksVariants}
              animate={toggle ? "visible" : "hidden"}
            >
              <a href={`#${navLink}`} onClick={() => setToggle(false)}>
                {navLink}
              </a>
            </motion.li>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
