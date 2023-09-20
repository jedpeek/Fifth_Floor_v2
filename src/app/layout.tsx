import "../styles/globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fifth Floor Music",
  description: "Making Moments Magic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
