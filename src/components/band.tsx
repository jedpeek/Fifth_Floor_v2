"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Band() {
  const bandData = [
    {
      name: "Cameron Lewis",
      title: "Vocals / Guitar",
      bio: " Meet Cameron Lewis. Cameron has been a musician for 23 years and performing professionally for 14 years. Cameron studied music in college and earned a BA in Music from Point Loma Nazarene University in San Diego, CA.",
      instagram: "https://www.instagram.com/cam.lws/",
      photo: "/assets/Cam1.jpeg",
    },
    {
      name: "Jed Peek",
      title: "Bass / Keys",
      bio: "Meet Jed Peek. Jed has been a has been a professional musician for 15 years. Jed has toured the country and performed on national TV. Jed has performed with many artists including Olivia Rodrigo, Tayler Holder, and many more.",
      instagram: "https://www.instagram.com/jedtpeek/",
      photo: "/assets/Jed1.jpeg",
    },
    {
      name: "Stephen Thompson",
      title: "Lead Guitar",
      bio: "Meet Stephen Thompson. Stephen has been performing for 10 years. Stephen performs session work for various artists and has amassed a large following on social media as a content creator.",
      instagram: "https://www.instagram.com/stephen._.thompson/",
      photo: "/assets/Stephen1.jpeg",
    },
    {
      name: "Kaden McGarity",
      title: "Vocals",
      bio: "Meet Kaden McGarity. Kayden has been performing for almost14 years. Kaden performs around San Diego, CA various events. Kaden volunteers weekly at her church as part of the Worship Team.",
      instagram: "https://www.instagram.com/kadenmcgarity/",
      photo: "/assets/Kayden1.jpeg",
    },
    {
      name: "Josue Barragan",
      title: "Drums",
      bio: "Meet Josue Barragan. Josue has been performing since 10 years old and has over 30 years experience as a professional performing in front of audiences. Josue has toured around the world and has worked as a session musician for various artists.",
      instagram: "https://www.instagram.com/jbarragan1drums/",
      photo: "/assets/Josue1.jpeg",
    },
  ];

  const renderBand = (bandMember) => {
    return (
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4 lg:w-1/2"
        key={bandMember.name}
      >
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image
            alt="Band member"
            height={1000}
            width={1000}
            className="flex-shrink-0 rounded-lg w-60 h-60 object-cover object-top sm:mb-0 mb-4"
            src={bandMember.photo}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900 underline underline-offset-4">
              {bandMember.name}
            </h2>
            <h3 className="text-gray-500 mb-3">{bandMember.title}</h3>
            <p className="mb-4 font-semibold">{bandMember.bio}</p>
            <span className="inline-flex">
              <a href={bandMember.instagram} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:scale-110 duration-150 hover:text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="text-gray-600 body-font bg-gradient-to-l from-sky-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-extrabold sm:text-5xl underline underline-offset-8  title-font mb-4 text-gray-900 tracking-widest">
            MEET THE BAND
          </h1>
          <div className="justify justify-around ">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
              {" "}
              <b>HI EVERYONE!</b> We are <b>Fifth Floor</b>, a San Diego based
              band. We focus on <b>weddings & events</b> and would love to play
              at your next <b>celebration!</b> Reach out to us with any
              questions or interests!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">{bandData.map(renderBand)}</div>
      </div>
    </div>
  );
}
