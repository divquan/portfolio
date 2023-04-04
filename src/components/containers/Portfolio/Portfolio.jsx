import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { portfolios } from "../../../Data";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../Button/Button";
const Portfolio = () => {
  const [active_a, setActive_a] = useState(1);
  const [works, setWorks] = useState(portfolios);
  const [showModal, setShowModal] = useState(false);
  const [showBtmTxt, setShowBtm] = useState(false);
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
      <div
        className="modal"
        onClick={(e) => e.target.className === "modal" && setShowModal(false)}
        exit={{ opacity: 0, color: "white " }}
      >
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, scale: 0.3, y: -35 }}
          animate={{ opacity: 1, scale: [1.3, 1], y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          exit={{
            opacity: 0,
            height: [100, 80, 60, 40, 10],
            width: [100, 80, 60, 40, 10],
          }}
        >
          <div className="close">
            <AiFillCloseCircle
              size={32}
              color={"white"}
              style={{
                backgroundColor: "black",
                borderRadius: "50%",
              }}
              onClick={() => setShowModal(false)}
            />
          </div>
          <img
            src={modalProps.image}
            alt={modalProps.title}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "tween", times: 2, duration: 0.6 }}
          />
          <div className="modal-content">
            <div className="modal-content_title">
              {modalProps?.title.map((e, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ marginRight: "0.7px" }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
            <div className="modal-content_description">
              <h2>Description</h2>
              <motion.div exit={{ opacity: 0 }} className="modal-text">
                <p>{modalProps.description}</p>
              </motion.div>
            </div>
            <div className="modal-content_stack">
              <h2>Stack Used</h2>
              <div>
                {modalProps?.stack.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="modal-content_links">
              <h2>Links</h2>
              <div>
                <a
                  href={modalProps.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>
                <a href={modalProps.previewLink} target="_self">
                  preview
                </a>
              </div>
            </div>
          </div>
        </motion.div>
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
      <div
        className="portfolio_container-body"
        // initial={{ opacity: 0 }}
        // whileInView={{ x: [-200, 0], opacity: 1 }}
        // transition={{ duration: 1 }}
      >
        <AnimatePresence>{showModal && <Modal />}</AnimatePresence>
        {works.map((portfolio, index) => (
          <motion.div
            className="single_work"
            key={index}
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            // exit={{ opacity: 0, y: -50 }}
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
            <div>
              <motion.img
                src={portfolio.img}
                width={600}
                height={400}
                PlaceholderSrc={portfolio.img_x}
                alt="Image Alt"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.7 }}
              />
            </div>
            <div className="bottom-center">
              <span>{portfolio.title}</span>
            </div>
          </motion.div>
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
