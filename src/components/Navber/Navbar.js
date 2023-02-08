import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { navLinks, socials } from "../../Data";
import { MdClose, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

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
    hidden: { display: "none", opacitiy: 0 },
    visible: {
      opacitiy: 1,
      y: -30,
      transition: { delay: 0.7 },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
      setToggle(false);
    });
  }, []);

  return (
    <div className={scroll ? "nav_container active" : "nav_container"}>
      <div className="nav_logo">
        <h3>dq</h3>
      </div>
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
        <div className="menu-items">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={`#${navLink}`} onClick={() => setToggle(false)}>
                {navLink}
              </a>
            </li>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
