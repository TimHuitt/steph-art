'use client'

import Images from "./Images"
import { useWindowContext } from '@/app/windowContext'

const Gallery = () => {
  const { width } = useWindowContext()

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
    <div className={`flex ${width < 550 && 'flex-col'} items-center justify-center mt-10 md:mt-40 z-30`}>
      {renderImages()}
    </div>
  )
}

export default Gallery