import React from "react";

import RoundButton from "./RoundButton";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex justify-end w-full mt-3">
      <div className="flex gap-2 ">
        <Link href={"https://linkedin.com/in/divine-quansah"} target="_blank">
          <RoundButton color="pink">
            <FaLinkedinIn size={24} />
          </RoundButton>
        </Link>
        <Link href={"https://github.com/divquan"} target="_blank">
          <RoundButton color="red">
            <FaGithub size={24} />
          </RoundButton>
        </Link>
        <Link href={"https://twitter.com/divine_quansah"} target="_blank">
          <RoundButton>
            <BsTwitterX size={24} />
          </RoundButton>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
