import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import { Locations, socials } from "../../../Data";
function Contact() {
  return (
    <div className="contact_container" id="contact">
      <motion.div
        className="portfolio_container-header"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>Let's Get In Touch</p>
        <h3>Contact</h3>
      </motion.div>

      <motion.div className="portfolio_body">
        <div className="portfolio_body-left">
          <h2> Just Say Hi</h2>
          <p>
            Hi there! Thanks for stopping by my portfolio website. If you're
            interested in collaborating on a project, or have any questions or
            comments about my work, I'd love to hear from you. I'm always
            excited to connect with new people and discuss interesting ideas. So
            don't be shy - drop me a line using the contact form below and let's
            get the conversation started
          </p>
          <div className="loc">
            {Locations.map((item) => (
              <div>
                <div className="ico">{item.icon}</div>
                <div className="link">{item.link}</div>
              </div>
            ))}
          </div>
          <div className="contact_socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
        <div className="portfolio_body-right">
          <h2> Get In Touch</h2>
          <form netlify name="contact">
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="row">
              <textarea placeholder="message"></textarea>
            </div>
            <motion.button
              whileHover={{
                backgroundColor: "white",
                border: "#8c12f0 solid 1px",
                color: "#8c12f0",
              }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              Send
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
