import Image from "next/image";
import Header from "../components/header.tsx";
import Hero from "../components/hero.tsx";
import Contact from "../components/contact.tsx";
import Content from "../components/content.tsx";
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
