"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative bg-[url(/assets/fifth_floor_band_2.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/60 sm:bg-transparent sm:from-white/75 sm:to-white/25 sm:bg-gradient-to-r bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
          <motion.h1
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold sm:text-5xl"
          >
            Fifth Floor
            <motion.strong
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="block font-extrabold text-sky-600"
            >
              Music to Elevate your next event.
            </motion.strong>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className=" gap-4 flex flex-wrap text-center py-3"
          >
            <a
              href="/contact"
              className="flex justify w-full rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-600 hover:scale-110 duration-150 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            >
              CONTACT
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
