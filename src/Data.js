import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import {
  FaUser,
  FaPhoneAlt,
  FaPaperPlane,
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaFigma,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import portfolio from "./assets/portfolio.png";
import portfolio_x from "./assets/portfolio.webp";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
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

export const SkillIcons = [
  <FaHtml5 />,
  <FaCss3 />,
  <FaJs />,
  <FaReact />,
  <FaSass />,
  <FaFigma />,
  <FaWordpress />,
  <FaNodeJs />,
  // <FaReactNative />,
];

export const experiences = [
  {
    year: "2021 - Present",
    position: "Bsc. Computer Eng.",
    company: "KNUST -  Ghana",
    link: "https://compeng.knust.edu.gh",
  },
  {
    year: "2020 - Present",
    position: "Web Developer",
    company: "CLC - GH",
    link: "https://clcgh.org",
  },
  {
    year: "2022 - 2023",
    position: "Frontend Developer Intern",
    company: "MegaMind Inc",
    link: "",
  },
];

export const portfolios = [
  {
    type: "web",
    img: portfolio,
    img_x: portfolio_x,
    previewLink: "https://divquan.netlify.app/",
    githubLink: "https://github.com/divquan/portfolio",
    title: "",
    description: "In development...",
  },
  {
    type: "web",
    img: work2,
    previewLink: "",
    githubLink: "",
    title: "",
    description: "",
  },
  {
    type: "design",
    img: work3,
    previewLink: "",
    githubLink: "",
    title: "",
    description: "",
  },
  {
    type: "app",
    img: work4,
    previewLink: "",
    githubLink: "",
    title: "",
    description: "",
  },
  {
    type: "app",
    img: work5,
    previewLink: "",
    githubLink: "",
    title: "",
    description: "",
  },
  {
    type: "app",
    img: work6,
    previewLink: "",
    githubLink: "",
    title: "",
    description: "",
  },
];

export const Locations = [
  { icon: <FaMap />, link: <a href="#contact">Accra,Ghana</a> },
  {
    icon: <AiFillMail />,
    link: <a href="mailto:divquan@gmail.com">divquan@gmail.com</a>,
  },
  {
    icon: <FaPhone />,
    link: <a href="tel:+23321493526">+233 24 9352 628</a>,
  },
];
