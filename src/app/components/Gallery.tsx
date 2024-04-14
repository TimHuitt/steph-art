'use client'

import Images from "./Images"
import { useEffect, useState } from "react"

const Gallery = () => {
  const [ width, setWidth ] = useState<number>(0)
  
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

  const renderImages = () => {
    if (width > 1264) {
      return (
        <>
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
          <Images color={'#6EE7B7'} rotation={6} index={10} image={'2.png'} />
          <Images color={'#C4B5FD'} rotation={-6} index={20} image={'3.png'} />
          <Images color={'#FEF08A'} rotation={0} index={10} image={'4.png'} />
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'5.png'} />
        </>
      )
    } else if (width > 1024) {
      return(
        <>
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
          <Images color={'#6EE7B7'} rotation={6} index={10} image={'2.png'} />
          <Images color={'#C4B5FD'} rotation={-6} index={20} image={'3.png'} />
          <Images color={'#FEF08A'} rotation={0} index={10} image={'4.png'} />
        </>
      )
     } else if (width > 768) {
      return (
        <>
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
          <Images color={'#6EE7B7'} rotation={6} index={10} image={'2.png'} />
          <Images color={'#C4B5FD'} rotation={-6} index={20} image={'3.png'} />
        </>
      )
    
    } else if (width > 550) {
      return (
        <>
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
          <Images color={'#6EE7B7'} rotation={6} index={10} image={'2.png'} />
        </>
      )
    } else {
      return (
        <>
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
          <Images color={'#6EE7B7'} rotation={-6} index={10} image={'2.png'} />
          <Images color={'#C4B5FD'} rotation={12} index={20} image={'5.png'} />
        </>
      )
    }
  }

  return (
    <div className={`flex ${width < 550 && 'flex-col'} items-center justify-center mt-20 z-30`}>
      {renderImages()}
    </div>
  )
}

export default Gallery