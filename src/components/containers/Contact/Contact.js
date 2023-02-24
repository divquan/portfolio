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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
            consequatur iste impedit maiores adipisci pariatur perspiciatis
            eaque at quia non in nulla quae, recusandae veritatis tenetur
            fugiat, quod sunt!
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

          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="row">
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <a href="#null">Send</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
