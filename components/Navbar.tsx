"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
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
          <HiMenuAlt3 size={32} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavbarLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
