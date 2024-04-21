'use client'

import { useEffect, useState } from 'react'
import { useWindowContext } from '@/app/windowContext'
import { Comfortaa } from "next/font/google";

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


const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

export default function Home() {
  const { width, setWidth, mainRef } = useWindowContext()
  const [ loaded, setLoaded ] = useState<boolean>(false)
  
  useEffect(() => {
    setLoaded(true) 
  },[])

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

  },[setWidth, loaded])

  return (
        <main ref={mainRef} className={`${comfortaa.className} absolute top-0 left-0 bg-purple-100 max-h-screen overflow-y-auto relative flex pb-40 w-full max-w-screen flex-col items-center`}>
          <Announcements width={width} />      
          {loaded ? <Menu /> : <div className="min-h-6 w-5/6 p-2 m-2 bg-purple-400 animate-pulse rounded-xl"></div>}
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
  );
}
