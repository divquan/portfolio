import React from "react";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineArrowOutward } from "react-icons/md";
const strasua = localFont({ src: "../public/fonts/strasua.otf" });
import hero from "@/public/images/hero swe.svg";
import Image from "next/image";
import Button from "./Button";
import { space_grotestk } from "./fonts";
import Socials from "./Socials";
import Link from "next/link";
// const Hero = () => hero;
const Herosection = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5 px-4 md:px-6 py-2 md:py-3">
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <p className={`text-2xl mb-3 ${space_grotestk.className}`}>
            HI! , i'm
          </p>
          <p
            className={`text-[50px] md:text-[64px] mb-0 ${strasua.className} leading-[66px] mb-5`}
          >
            Divine Quansah
          </p>
          <p className="text-[20px] mb-8">Software Engineer</p>
          <div className="flex gap-2 flex-col md:flex-row items-start flex-nowrap">
            <Link href={"/contact"}>
              <Button>
                <span className="text-xl">Say Hello</span>
                <SiMinutemailer size={24} />
              </Button>
            </Link>
            <Link href={"/projects"}>
              <button className="p-4 text-lg mb-3 flex gap-2 justify-center items-center transition-colors hover:bg-qred border border-transparent duration-700   hover:border-black">
                My Work <MdOutlineArrowOutward size={24} />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={hero.src}
            height={hero.height}
            width={hero.width}
            alt="hero"
          />
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Herosection;
