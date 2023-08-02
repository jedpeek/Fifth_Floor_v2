import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font" id="hero">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            FIFTH FLOOR
          </h1>
          <p class="mb-8 leading-relaxed">
            Fifth Floor, a name inspired by the band's desire to elevate every
            event to new heights, is a collective of highly talented musicians
            and vocalists who share a passion for creating captivating moments
            through music. With years of experience and a diverse range of
            influences, they have perfected the art of weaving melodies that
            resonate with the hearts of both the couple and their guests.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              CONTACT
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="h-auto max-w-full rounded-full"
            alt="hero"
            src="/assets/FifthFloor_Hero.JPG"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
