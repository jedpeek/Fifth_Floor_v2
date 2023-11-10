"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <section className="text-gray-700 body-font " id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <a
              href="https://www.youtube.com/watch?v=uMmqrYJ8zZM"
              target="_blank"
            >
              <div className="relative bg-[url(/assets/fifth_floor_band_2.jpeg)] bg-cover bg-center bg-no-repeat rounded-lg h-64 overflow-hidden hover:scale-105 duration-150 opacity-75 transition duration-300 ease-in-out hover:opacity-100">
                <motion.div
                  initial={{ y: 30, opacity: 0.4, scale: 0.8 }}
                  whileHover={{ y: 30, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute py-12 p-12"
                >
                  <h1 className="text-white font-bold text-6xl uppercase ">
                    {" "}
                    Check Us Out{" "}
                  </h1>

                  <p className="text-gray-200 font-bold text-2xl">
                    Fifth Floor performing some of your favorite songs
                  </p>
                </motion.div>
              </div>
            </a>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <a
              href="https://www.youtube.com/watch?v=eH3giaIzONA"
              target="_blank"
            >
              <div className="relative bg-[url(/assets/FifthFloor_Band_1.jpg)] bg-cover bg-center bg-no-repeat rounded-lg h-64 overflow-hidden hover:scale-105 duration-150 opacity-75 transition duration-300 ease-in-out hover:opacity-100">
                <motion.div
                  initial={{ y: 30, opacity: 0.4, scale: 0.8 }}
                  whileHover={{ y: 30, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute py-12 p-12"
                >
                  <h1 className="text-white font-bold text-6xl uppercase ">
                    Meet the Band
                  </h1>

                  <p className="text-gray-200 font-bold text-2xl">
                    Meet the members of Fifth Floor with through BTS footage of
                    a recent performance
                  </p>
                </motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
