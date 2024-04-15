import Image from "next/image";
import { useState } from "react";
import { useWindowContext } from '@/app/windowContext'

const Menu: React.FC = () => {
  const { width } = useWindowContext()
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false)

  const handleNavigate = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLElement

  }

  const handleMenu = () => {
    setShowDropdown(prev => !prev)
  }

  return (
    <>      
      <div className={`sticky top-4 w-full h-8 mb-2 flex justify-center items-start text-xl z-40`}>
        
        { width > 950 ? (
          <>
            <div className="flex-grow"></div>
            <div className="flex-grow-0">
              <ul className="flex justify-center translate-x-[70px] text-green-700 bg-purple-100 py-2 bg-opacity-85 rounded-3xl">
                <li className="list-item selected" id="home" onClick={handleNavigate}>Home</li>
                <li className="list-item" id="about" onClick={handleNavigate}>About</li>
                <li className="list-item" id="portfolio" onClick={handleNavigate}>Portfolio</li>
                <li className="list-item" id="shop" onClick={handleNavigate}>Shop</li>
                <li className="list-item" id="custom" onClick={handleNavigate}>Custom</li>
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
                <ul className="flex flex-col items-center text-green-700 bg-purple-100 py-2 m-2 bg-opacity-85 border-2 border-purple-600 rounded-3xl">
                  <li className="dropdown-item selected" id="home" onClick={handleNavigate}>Home</li>
                  <li className="dropdown-item" id="about" onClick={handleNavigate}>About</li>
                  <li className="dropdown-item" id="portfolio" onClick={handleNavigate}>Portfolio</li>
                  <li className="dropdown-item" id="shop" onClick={handleNavigate}>Shop</li>
                  <li className="dropdown-item" id="custom" onClick={handleNavigate}>Custom</li>
                </ul>
                <div className="fixed top-0 left-0 min-w-screen min-h-screen bg-purple-950 z-50">

                </div>
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