"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    console.log("body: ", body);
    if (!body[0]) return;
    if (isOpen) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "visible";
    }
  }, [isOpen]);
  return (
    <div className="w-full flex justify-center items-center  px-4 md:px-6 py-2 md:py-3">
      <div className="flex justify-between items-center max-w-6xl  w-full">
        <Link href={"/"}>
          <span className="text-3xl font-extrabold">D.QUANSAH</span>
        </Link>
        <div className="hidden md:flex gap-6 ">
          {NavbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-semibold ${
                pathname === link.href ? "text-qgreen" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <HiMenuAlt3 size={32} onClick={() => setIsOpen(true)} />
        </div>
      </div>
      {isOpen && (
        <div className="bg-black bg-opacity-50 top-0 left-0 h-screen w-screen fixed z-50 ">
          <div
            className={`bg-white  h-full flex flex-col justify-center items-center gap-5`}
          >
            {NavbarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg md:text-2xl font-semibold ${
                  pathname === link.href ? "text-qgreen" : "text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="absolute top-0 right-0 p-4">
            <HiXMark size={32} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Navbar;

const NavbarLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
