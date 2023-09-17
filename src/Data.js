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
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import afbr from "./assets/afbr.png";
import verliore from "./assets/verliore.png";
import photoguy from "./assets/photoguy.png";
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
    year: "2023 - present",
    position: "Full Stack Engineer Intern",
    company: "African Bully Registry",
    link: "https://africanbullyregistry.com/",
  },
  {
    year: "2020 - 2023",
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
    img: afbr,
    previewLink: "https://africanbullyregistry.com/",
    githubLink: "https://github.com/divquan/",
    title: ["African Bully Registry"],
    description:
      "This registry is created to bring and unite all passionate breeders and dog lovers together, especially in Africa..",
    stack: [
      "React Js",
      "Stripe",
      "MonogoDB",
      "NodeJs",
      "Express",
      "Redux",
      "Bootstrap",
      "Material UI",
    ],
    status: false,
  },
  {
    type: "web",
    img: portfolio,
    previewLink: "https://divquan.netlify.app/",
    githubLink: "https://github.com/divquan/portfolio",
    title: ["M", "y", " ", "P", "o", "r", "f", "o", "l", "i", "o"],
    description:
      "It's a user-friendly website with a professional design that's easy to navigate. I built it using HTML, CSS, JavaScript, and React, and made sure it works great on all devices. ",
    stack: ["React", "Scss", "NodeJs", "framer-motion"],
    status: true,
  },
  {
    type: "web",
    img: work2,
    previewLink: "https://campuswave.netlify.app",
    githubLink: "https://github.com/divquan/campuswave-frontend",
    title: ["C", "a", "m", "p", "u", "s", " ", "w", "a", "v", "e"],
    description:
      "Campuwave blog app  university students. The app has a user-friendly interface with user authentication, post validation, and image processing and hosting, and sharing features to encourage collaboration. The app is scalable and easy to maintain with Node.js as the backend. ",
    stack: ["React", "Scss", "NodeJs", "Express"],
    status: true,
  },
  {
    type: "app",
    img: work3,
    previewLink: "https://campuswave.netlify.app",
    githubLink: "https://github.com/divquan/campuswave-frontend",
    title: ["C", "L", "C", " ", "A", "p", "p"],
    description:
      "Campus Wave is a blogging app for students in the various universities in Ghana. It features an user authentication. One can, if logged in write blog posts, edit ones blog posts and delete them as well.",
    stack: [
      "React Native",
      "WordPress API",
      "REST api",
      "NodeJs",
      "Express",
      "mySQL",
    ],
    status: false,
  },

  {
    type: "web",
    img: verliore,
    previewLink: "https://veliore.vercel.app/",
    githubLink: "https://github.com/divquan/",
    title: ["Veliore"],
    //give me a sample description for the ecommerce site, verliore
    description:
      "Verliore is an upscale online fashion boutique that I developed from the ground up. This project demonstrates my ability to design and implement an elegant and responsive e-commerce platform. It includes features like product categorization, a user-friendly shopping cart, secure payment processing, and a visually appealing UI.",
    stack: [
      "React JS",
      "Tailwind",
      "Vercel Serverless Functions",
      "Firestore database",
    ],
    status: true,
  },

  {
    type: "web",
    img: photoguy,
    previewLink: "https://the-photo-chef-t9qnyfsdb-bismuthlabs.vercel.app/",
    githubLink: "https://github.com/bismuthlabs/the.photo.chef",
    title: ["The Photo Chef"],
    //give me a sample description for the ecommerce site, verliore
    description:
      "The Photo Chef is a custom linktree for the photographer, Chef. It features a custom design and a user-friendly interface.",
    stack: [
      "React JS",
      "Tailwind",
      "Vercel Serverless Functions",
      "Firestore database",
    ],
    status: true,
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
