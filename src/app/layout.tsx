import "../styles/globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";

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
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
