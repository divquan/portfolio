import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { portfolios } from "../../../Data";
// import { FiGithub, react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../Button/Button";
const Portfolio = () => {
  const [active_a, setActive_a] = useState(1);
  const [works, setWorks] = useState(portfolios);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const Button1 = ({ id, buttonName, active_a, setActive_a }) => {
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
  const Modal = () => {
    return (
      <div className="modal" onClick={() => setShowModal(false)}>
        <div className="modal-box">
          <div className="close">
            <AiOutlineCloseCircle
              size={32}
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="modal-img">
            <img src={modalProps.image} alt={"port"} />
          </div>
          <div className="modal-content">
            <div>
              <h1>{modalProps.title}</h1>
            </div>
            <div>
              <h2>Description</h2>
              <p>{modalProps.description}</p>
            </div>
            <div>
              <h2>Stack Used</h2>
              <p>{modalProps.stack}</p>
            </div>
            <div>
              <h2>Links</h2>
              <a href="/"> {modalProps.githublink}</a>
              <a href="/"> {modalProps.previewLink}</a>
            </div>
          </div>
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
      <motion.div
        className="portfolio_container-header"
        // initial={{ opacity: 0 }}
        // whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>My Works</p>
        <h3>Awesome Projects</h3>
      </motion.div>
      <motion.div
        className="portfolio_container-buttons skills-buttons "
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        <Button1
          id={1}
          buttonName=" All "
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button1
          id={2}
          buttonName="Webs"
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button1
          id={3}
          buttonName="Apps"
          active_a={active_a}
          setActive_a={setActive_a}
        />
        <Button1
          id={4}
          buttonName="Designs"
          active_a={active_a}
          setActive_a={setActive_a}
        />
      </motion.div>
      {showModal && <Modal />}
      <div
        className="portfolio_container-body"
        // initial={{ opacity: 0 }}
        // whileInView={{ x: [-200, 0], opacity: 1 }}
        // transition={{ duration: 1 }}
        // exit={{ opacity: 0, y: -50 }}
      >
        {works.map((portfolio, index) => (
          <>
            <motion.div
              className="single_work"
              key={index}
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              onClick={() => {
                setShowModal(true);
                setModalProps({
                  description: portfolio.description,
                  title: portfolio.title,
                  stack: portfolio.stack,
                  githubLink: portfolio.githubLink,
                  image: portfolio.img,
                  previewLink: portfolio.previewLink,
                });
              }}
            >
              <LazyLoadImage
                src={portfolio.img}
                width={600}
                height={400}
                PlaceholderSrc={portfolio.img_x}
                alt="Image Alt"
              />
              <div className="single_work-info">
                <div>
                  {/* <span>Project Name:</span> */}
                  <span>{portfolio.title}</span>
                  <i>Click to know more</i>
                </div>
              </div>
            </motion.div>
          </>
        ))}
      </div>
      <div className="portfolio_container-footer">
        <h2>so let's talk about</h2>
        <div>
          <h2>your next projects</h2>
          <Button
            buttonName="Contact Me"
            addtionalStyles={{
              border: "#8c12f0 3px solid",
              margin: 0,
            }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Portfolio;
