import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Content from "../components/content";
import Band from "@/components/band";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      {" "}
      <Hero />
      <Band />
      <Content />
      <Testimonial />
      <Contact />
    </main>
  );
}
