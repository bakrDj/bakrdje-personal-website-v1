import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Menu, { Navbar } from "./components/Menu";
import TwoLinesCanvas from "./components/TwoLines";
import SlideEraser from "./components/SlideEraser";
import { AnimatePresence, motion } from "framer-motion";
import RouteAnimation from "./components/RouteAnimation";
import { Button } from "@/components/ui/button";
import Drawer from "./components/Drawer";
import { create } from "zustand";
import NextTopLoader from "nextjs-toploader";

const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap", adjustFontFallback: false /* , variable: "--font-comfortaa" */ });
// const lato = Spectral({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "BakrDje | Web Developer & Designer",
  description: "backrDje web Developer & designer portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={comfortaa.className}
        style={{ overflow: "hidden" }}
      >
        <NextTopLoader
          color="#113946"
          shadow={false}
          height={4}
        />
        {/* canvas */}
        <div className="flex justify-center fixed top-0 left-0 w-full h-full -z-10">
          <TwoLinesCanvas />
        </div>
        {/* slide earaser */}
        {/* <SlideEraser /> */}

        <main className="flex flex-col gap-2 [height:100dvh] md:h-screen w-auto ">
          {/* Header */}
          <header>
            <Menu></Menu>
          </header>

          <Drawer></Drawer>

          {/* content */}
          {/* <RouteAnimation> */}
          <section className="flex flex-col flex-1">{children}</section>
          {/* </RouteAnimation> */}
        </main>
      </body>
    </html>
  );
}
