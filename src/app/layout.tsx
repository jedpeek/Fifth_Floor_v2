import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
