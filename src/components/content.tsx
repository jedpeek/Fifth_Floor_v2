import React from "react";
import ModalVideo from "./modalVideo";

const Content = () => {
  return (
    <section className="text-gray-700 body-font " id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden hover:scale-105 duration-150">
              <a
                href="https://www.youtube.com/watch?v=eH3giaIzONA"
                target="_blank"
              >
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-75 transition duration-300 ease-in-out hover:opacity-100 "
                  src="/assets/FifthFloor_Band_2.jpg"
                />
              </a>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Check Us Out
            </h2>
            <p className="leading-relaxed text-base">
              Fifth Floor performing some of your favorite songs
            </p>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden hover:scale-105 duration-150">
              <a
                href="https://www.youtube.com/watch?v=7UoP9ABJXGE"
                target="_blank"
              >
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-75 transition duration-300 ease-in-out hover:opacity-100"
                  src="/assets/fifth_floor_band_2.jpeg"
                />
              </a>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Meet the Band
            </h2>
            <p className="leading-relaxed text-base">
              Meet the members of Fifth Floor with through BTS footage of a
              recent performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
