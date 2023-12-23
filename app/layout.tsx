import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import TwoLinesCanvas from "./components/TwoLines";
import SlideEraser from "./components/SlideEraser";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bakrDje",
  description: "backrDje portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={comfortaa.className}
        style={{ overflow: "hidden" }}
      >
        {/* canvas */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <TwoLinesCanvas />
        </div>
        {/* slide earaser */}
        <SlideEraser />

        <main className="flex flex-col h-screen  ">
          {/* menu */}
          <section>
            <Menu></Menu>
          </section>
          {/* content */}
          <section className="flex flex-col flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
