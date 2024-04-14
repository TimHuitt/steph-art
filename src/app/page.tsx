'use client'

import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Divider from "./components/Divider";
import Shop from "./components/Shop";
import Custom from "./components/Custom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-[5000px] pb-40 w-full flex-col items-center">
        <Announcements />      
        <Menu />
        <Header />
        <Intro />
        <Gallery />
        <About />
        <Divider />
        <Portfolio />
        <Divider />
        <Shop />
        <Divider />
        <Custom />
      </main>
      <style jsx global>{`
        :root {
          --comfortaa: ${sketch.style.fontFamily}
          --sketch: ${sketch.style.fontFamily}
        }
      `}</style>
    </> 
  );
}
