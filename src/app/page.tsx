import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero.tsx";
import Contact from "../components/contact";
import Content from "../components/content";
export default function Home() {
  return (
    <main>
      {" "}
      <Hero />
      <Content />
      <Contact />
    </main>
  );
}
