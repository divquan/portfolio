import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaUser, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socials = [
  {
    svg: <AiFillTwitterCircle size={26} />,
    link: "https://twitter.com/divine_quansah",
  },
  { svg: <AiFillGithub size={26} />, link: "https://github.com/divquan" },
  {
    svg: <AiFillLinkedin size={26} />,
    link: "https://www.linkedin.com/in/divine-quansah/",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Divine Quansah",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+233 24 9352 628",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "divquan@gmail.com",
  },
];
