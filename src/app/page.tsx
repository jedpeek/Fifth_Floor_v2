import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Content from "../components/content";
import Band from "@/components/band";
export default function Home() {
  return (
    <main>
      {" "}
      <Hero />
      <Content />
      <Band />
      <Contact />
    </main>
  );
}
