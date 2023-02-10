import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { portfolios } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [active_a, setActive_a] = useState(1);
  const [works, setWorks] = useState(portfolios);
  const Button = ({ id, buttonName, active_a, setActive_a }) => {
    return (
      <div
        className={active_a === id ? "buttona active" : "buttona inactive"}
        onClick={() => setActive_a(id)}
      >
        <div>
          <p>{buttonName}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (active_a === 1) {
      setWorks(portfolios);
      return;
    }
    if (active_a === 2) {
      setWorks(portfolios.filter((portfolio) => portfolio.type === "web"));
      return;
    }
    if (active_a === 3) {
      setWorks(portfolios.filter((portfolio) => portfolio.type === "app"));
      return;
    }
    if (active_a === 4) {
      setWorks(portfolios.filter((portfolio) => portfolio.type === "design"));
      return;
    }
  }, [active_a]);

  return (
    <div id="portfolio" className="portfolio_container">
      <div className="portfolio_container-header">
        <p>My Works</p>
        <h3>Awesome Projects</h3>
      </div>
      <div className="portfolio_container-buttons skills-buttons">
        <Button
          id={1}
          buttonName=" All "
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button
          id={2}
          buttonName="Webs"
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button
          id={3}
          buttonName="Apps"
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button
          id={4}
          buttonName="Designs"
          active_a={active_a}
          setActive_a={setActive_a}
        />
      </div>
      <motion.div
        className="portfolio_container-body"
        initial={{ opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
      >
        {works.map((portfolio, index) => (
          <div className="single_work" key={index}>
            <img src={portfolio.img} alt={portfolio.title}></img>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hover-layer"
            >
              <p style={{ color: "white" }}>{portfolio.description}</p>
              <div>
                <motion.a
                  href={portfolio.previewLink}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <FiEye size={24} />
                </motion.a>
                <motion.a
                  href={portfolio.githubLink}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <FiGithub size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
