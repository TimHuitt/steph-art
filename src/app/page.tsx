'use client'

import { useEffect, useState } from 'react'
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


export default function Home() {
  const { setWidth } = useWindowContext()
  const [ loaded, setLoaded ] = useState<boolean>(false)
  
  useEffect(() => {

    setLoaded(true) 
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

  },[setWidth])

  return (
    <>
      <main className="relative flex min-h-screen pb-40 w-full max-w-screen flex-col items-center">
        <Announcements />      
        {loaded ? <Menu /> : <div className="h-8"></div>}
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
