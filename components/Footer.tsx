import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="p-4 items-center flex-col justify-center flex border-t border-black">
      <div>
        <Socials />
      </div>
      <div> Made with ❤️ in Ghana</div>
    </div>
  );
};

export default Footer;
