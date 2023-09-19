import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <img
            src="/assets/FifthFloor_Logo_1.png"
            className="w-20 h-20 text-white p-2 bg-white-500 rounded-full outline-style: solid"
          />

          <span className="ml-3 text-xl">FIFTH FLOOR</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <Link href="/">
          <p className="mr-5 text-xl hover:underline hover:scale-110 duration-150">
            Home
          </p>
        </Link>
        <Link href="/about">
          <p className="mr-5 text-xl hover:underline hover:scale-110 duration-150">
            About
          </p>
        </Link>
        <Link href="/services">
          <p className="mr-5 text-xl hover:underline hover:scale-110 duration-150">
            Services
          </p>
        </Link>
        <Link href="/media">
          <p className="mr-5 text-xl hover:underline hover:scale-110 duration-150">
            Media
          </p>
        </Link>
        <Link href="/contact">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:scale-110 duration-150">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
