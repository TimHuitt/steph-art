'use client'

import { useEffect } from 'react'
import { useWindowContext } from '@/app/windowContext'
import debounce from 'lodash/debounce'

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
  
  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth)
    }, 100)

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('load', handleResize)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleResize)
        window.removeEventListener('resize', handleResize)
        handleResize.cancel()
      }
    }    
  },[setWidth])

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
