import Image from "next/image";
import { useState } from "react";
import { useWindowContext } from '@/app/windowContext'

const Menu: React.FC = () => {
  const { width, mainRef, aboutRef, portfolioRef, shopRef, customRef } = useWindowContext()
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false)


  const handleMenu = () => {
    setShowDropdown(prev => !prev)
  }


  const scrollToLoc = (ref?: React.RefObject<HTMLDivElement>) => {
    

    if (mainRef && ref && mainRef.current && ref.current) {
      const top = ref.current.offsetTop - 50
      mainRef.current.scrollTo({top,behavior: "smooth"})
    } else if (mainRef && mainRef.current) {
      mainRef.current.scrollTo({top: 0, behavior: "smooth"})
    }

    setShowDropdown(false)
  }

  return (
    <>      
      <div className={`sticky top-4 w-full h-8 mb-2 flex justify-center items-start text-xl z-40`}>
        
        { width > 950 ? (
          <>
            <div className="flex-grow"></div>
            <div className="flex-grow-0">
              <ul className="flex justify-center translate-x-[70px] text-green-700 bg-purple-100 py-2 bg-opacity-85 rounded-3xl">
                <li onClick={() => scrollToLoc()} className="list-item selected">Home</li>
                <li onClick={() => scrollToLoc(aboutRef)} className="list-item">About</li>
                <li onClick={() => scrollToLoc(portfolioRef)} className="list-item">Portfolio</li>
                <li onClick={() => scrollToLoc(shopRef)} className="list-item">Shop</li>
                <li onClick={() => scrollToLoc(customRef)} className="list-item">Custom</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start justify-center">
            <div className="h-[40px] px-2 cursor-pointer" onClick={handleMenu}>
              <Image
                src={"/images/menu.png"}
                alt={""}
                width={40}
                height={40}
                style={{objectFit:"contain"}}
              />
            </div>
            { showDropdown &&
              <div>
                <ul className="flex flex-col items-center text-green-700 bg-purple-100 py-2 m-2 ml-0 bg-opacity-95 border-2 border-l-0 border-purple-600 rounded-3xl rounded-l-none">
                  <li onClick={() => scrollToLoc()} className="dropdown-item selected">Home</li>
                  <li onClick={() => scrollToLoc(aboutRef)} className="dropdown-item">About</li>
                  <li onClick={() => scrollToLoc(portfolioRef)} className="dropdown-item">Portfolio</li>
                  <li onClick={() => scrollToLoc(shopRef)} className="dropdown-item">Shop</li>
                  <li onClick={() => scrollToLoc(customRef)} className="dropdown-item">Custom</li>
                </ul>
              </div>
            }
        </div>
        )}
        <div className="flex-grow"></div>
        <div className="flex-grow-0 flex h-[40px] gap-2 mr-6 text-green-700 bg-purple-100 bg-opacity-75 rounded-3xl">
          <a href="#" className="relative flex justify-center items-center w-[40px] h-[40px] cursor-pointer">
            <div className="relative w-[30px] h-[30px] hover:w-[40px] h-[40px]">
              <Image 
                src={"/images/icons/instagram.svg"}
                alt={""}
                fill
                style={{objectFit: "contain"}}
              />
            </div>
          </a>
          <a href="#" className="relative flex justify-center items-center w-[40px] h-[40px] cursor-pointer">
            <div className="relative w-[30px] h-[30px] hover:w-[40px] h-[40px]">
              <Image 
                src={"/images/icons/facebook.svg"}
                alt={""}
                fill
                style={{objectFit: "contain"}}
              />
            </div>
          </a>
          <a href="#" className="relative flex justify-center items-center w-[40px] h-[40px] cursor-pointer">
            <div className="relative w-[30px] h-[30px] hover:w-[40px] h-[40px]">
              <Image 
                src={"/images/icons/email.svg"}
                alt={""}
                fill
                style={{objectFit: "contain"}}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu