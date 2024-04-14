'use client'

import { useEffect } from 'react'
import { useWindowContext } from '@/app/windowContext'

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
  const { width, setWidth } = useWindowContext()
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('load', handleResize)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleResize)
        window.removeEventListener('resize', handleResize)
      }
    }    
  },[])

  return (
    <>
      <main className="relative flex min-h-screen pb-40 w-full flex-col items-center">
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
    </> 
  );
}
