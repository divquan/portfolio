import React from "react";
import Heading from "./Heading";
import { space_grotestk } from "./fonts";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import liink from "@/public/images/liink.png";
import amext from "@/public/images/amext.png";
import kakerabi from "@/public/images/kakerabi.png";
import VMODEL from "@/public/images/VMODEL.png";
import Image, { StaticImageData } from "next/image";

const Projects = () => {
  return (
    <div className="mt-8 md:mt-20  flex flex-col gap-5 md:gap-10 items-center w-full px-4 md:px-6 py-2 md:py-3">
      <Heading>Projects</Heading>
      <div className="flex flex-col gap-5 md:gap-14 w-full">
        {projects.slice(0, 2).map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </div>
      <div>
        <Link href={"/projects"}>
          <button className="p-4 text-lg mb-3 flex gap-2 justify-center items-center  transition-colors hover:bg-qred border border-transparent hover:border-black">
            See More <MdOutlineArrowOutward size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

export const ProjectCard = ({
  title,
  stack,
  description,
  github,
  preview,
  image,
}: {
  title: string;
  stack?: string[];
  description?: string;
  github?: string;
  preview?: string;
  image?: StaticImageData;
}) => {
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col md:flex-row border-[2px] border-black p-3 rounded-lg w-full h-full bg-white gap-5">
        <div className="bg-gray-50 border border-black flex-1 rounded-lg h-[300px] overflow-y-hidden">
          {image && (
            <Image
              src={image?.src}
              width={image?.width}
              height={image?.height}
              alt={title}
              className="object-contain"
            />
          )}
        </div>
        <div className="flex-1 flex flex-col items-end gap justify-between">
          <h1
            className={`text-[36px] md:text-[40px] font-bold ${space_grotestk.className} mb-12`}
          >
            {title}
          </h1>
          <div className="flex flex-col items-end gap justify-between">
            <span>{description}</span>
            <div className="flex w-full items-start gap-3 flex-wrap mt-2 ">
              {stack?.map((item, index) => (
                <Stack text={item} key={index} />
              ))}
            </div>
            <div className="flex gap-2 ">
              {github && (
                <Link href={github}>
                  <FiGithub className="text-qyellow" size={32} />
                </Link>
              )}
              {preview && (
                <Link href={preview}>
                  <HiExternalLink className="text-qyellow " size={32} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-black rounded-lg inset-0 h-full w-full -z-10 translate-y-2"></div>
    </div>
  );
};

const Stack = ({ text }: { text: string }) => {
  return (
    <div className="border-qgreen border rounded-2xl font-bold text-qgreen p-2">
      {text}
    </div>
  );
};

export const projects = [
  {
    title: "kakerabi",
    stack: ["NextJs"],
    description:
      "A crowd funding platform for individuals and institutions to raise funds for their causes",
    preview: "https://kakerabi.vercel.app",
    image: kakerabi,
    // github: "https://github.com",
  },
  {
    title: "Liink App",
    stack: ["Next.js", "Firebase", "Tailwind", "Redux"],
    description:
      "LiinkApp helps you create website to show to your audience everything you are online",
    // github: "https://github.com",
    preview: "https://liinkapp.vercel.app",
    image: liink,
  },
  {
    title: "AMEXT Consult",
    stack: ["Next.js"],
    description:
      "A landing page and dashboard for a consulting firm for users to book and manage appointments",
    github: "https://amext.vercel.app",
    // preview: "https://github.com",
    image: amext,
  },

  {
    title: "VModel Help center",
    stack: ["NextJs"],
    description:
      "A dynamic help center for users to get help on how to use the VModel platform",
    preview: "vmodel-test.vercel.app",
    image: VMODEL,
    github: "https://github.com/divquan/vmodel-test",
  },
];
