import React from "react";
import Image from "next/image";
import aboutme from "@/public/images/aboutme.svg";
import { LuSheet } from "react-icons/lu";
import Button from "./Button";
import Heading from "./Heading";
const Aboutme = () => {
  return (
    <div className="mt-8 md:mt-16 flex flex-col gap-5 md:gap-12 items-center px-4 md:px-6 py-2 md:py-3">
      <Heading>About Me</Heading>
      <div className="flex justify-between flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <Image
            src={aboutme.src}
            height={aboutme.height}
            width={aboutme.width}
            alt="aboutme"
            className="h-auto w-auto"
          />
        </div>
        <div className="flex-1 gap-2">
          <p>
            I&apos;m a product developer, working at the intersection of
            technology, design & user. I build things that scale and have strong
            technical foundations. But, I&apos;m a designer at heart — I love
            getting my hands dirty, prototyping and listening to users.{"\n\n"}
          </p>
          <p>I&apos;m hands-on, curious, and pragmatic. I get things done.</p>
          <Button>
            My Resume <LuSheet size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
