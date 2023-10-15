"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/Fi";
import Image from "next/image";
const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    // { name: "CONTACT", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <Image
            alt="Fifth Floor Logo"
            height={1000}
            width={1000}
            src="/assets/FifthFloor_Logo_1.png"
            className="w-20 h-20 text-white p-2 bg-white-500 rounded-full outline-style: solid"
          />
          <span className="ml-3 text-xl">FIFTH FLOOR</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

        {Links.map((link) => (
          <Link href={link.link} key={link.link}>
            <p className="mr-7 text-xl my-5 hover:underline underline-offset-4 hover:scale-110 duration-150">
              {link.name}
            </p>
          </Link>
        ))}
        <Link href="/contact">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:scale-110 duration-150">
            CONTACT
          </button>
        </Link>
        {/* <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden hover:scale-110 duration-150">
          <FiMenu onClick={() => setOpen(!open)} />
        </div> */}
      </div>
    </header>
  );
};
export default Header;
