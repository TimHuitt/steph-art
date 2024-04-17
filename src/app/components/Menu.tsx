import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useWindowContext } from '@/app/windowContext'

const Menu: React.FC = () => {
  const { width, mainRef, aboutRef, portfolioRef, shopRef, customRef, selected, setSelected } = useWindowContext()
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mainRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    const handleClose = (e: MouseEvent | TouchEvent) => {
      const dropdown = document.getElementById('dropdown-menu')

      const target = e.target as HTMLElement
      if (dropdown && !dropdown.contains(target)) {
        setShowDropdown(prev => !prev)
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClose)
      document.addEventListener('touchstart', handleClose)
    }

    return () => {
      document.removeEventListener('mousedown', handleClose)
      document.removeEventListener('touchstart', handleClose)
    }
  }, [showDropdown])

  const handleMenu = () => {
    if (menuRef && menuRef.current && !showDropdown) {
      menuRef.current.style.transform = "translateX(0)"
    } else if (menuRef && menuRef.current) {
      menuRef.current.style.transform = "translateX(-10rem)"
    }
    setShowDropdown(prev => !prev)
  } 

  const handleScroll = () => {
    if (!mainRef.current) return

    const offsets = {
      home: 0,
      about: aboutRef.current?.offsetTop ? aboutRef.current?.offsetTop - 50 : 0,
      portfolio: portfolioRef.current?.offsetTop ? portfolioRef.current?.offsetTop - 50 : 0,
      shop: shopRef.current?.offsetTop ? shopRef.current?.offsetTop - 50 : 0,
      custom: customRef.current?.offsetTop ? customRef.current?.offsetTop - 50 : 0,
      clientHeight: mainRef.current?.clientHeight || 0,
      scrollHeight: mainRef.current?.scrollHeight || 0,
      currentScroll: mainRef.current?.scrollTop || 0,
    }

    if (offsets.currentScroll >= offsets.home && offsets.currentScroll < offsets.about) {
      setSelected('home')
    } else if (offsets.currentScroll < offsets.portfolio) {
      setSelected('about')
    } else if (offsets.currentScroll >= offsets.portfolio && offsets.currentScroll < offsets.shop) {
      setSelected('portfolio')
    } else if (offsets.currentScroll >= offsets.shop && offsets.currentScroll < offsets.custom) {
      setSelected('shop')
    } else if (offsets.currentScroll + offsets.clientHeight >= offsets.scrollHeight || offsets.currentScroll >= offsets.custom) {
      setSelected('custom')
    }
  }

  const scrollToLoc = (ref?: React.RefObject<HTMLDivElement>) => {
    if (mainRef && ref && mainRef.current && ref.current) {
      const top = ref.current.offsetTop - 50
      mainRef.current.scrollTo({top,behavior: "smooth"})
    } else if (mainRef && mainRef.current) {
      mainRef.current.scrollTo({top: 0, behavior: "smooth"})
    }
    handleMenu()
  }

  return (
    <>      
      <div className={`sticky top-4 w-full h-8 mb-2 flex justify-center items-start text-xl z-40`}>
        
        { width > 950 ? (
          <>
            <div className="flex-grow"></div>
            <div className="flex-grow-0">
              <ul className="flex justify-center translate-x-[70px] text-green-700 bg-purple-100 py-2 bg-opacity-85 rounded-3xl">
                <li onClick={() => scrollToLoc()} className={`list-item ${selected === 'home' ? 'selected' : ''}`}>Home</li>
                <li onClick={() => scrollToLoc(aboutRef)} className={`${selected === 'about' ? 'selected' : ''} list-item`}>About</li>
                <li onClick={() => scrollToLoc(portfolioRef)} className={`${selected === 'portfolio' ? 'selected' : ''} list-item`}>Portfolio</li>
                <li onClick={() => scrollToLoc(shopRef)} className={`${selected === 'shop' ? 'selected' : ''} list-item`}>Shop</li>
                <li onClick={() => scrollToLoc(customRef)} className={`${selected === 'custom' ? 'selected' : ''} list-item`}>Custom</li>
              </ul>
            </div>
          </>
        ) : (
          <div id="dropdown-menu" className="flex flex-col items-start justify-center">
            <div className="h-[40px] px-2 cursor-pointer" onClick={handleMenu}>
              <Image
                src={"/images/menu.png"}
                alt={""}
                width={40}
                height={40}
                style={{objectFit:"contain"}}
              />
            </div>
            <div ref={menuRef} className={`translate-x-[-10rem] transition-all z-50`}>
              <ul className="flex flex-col items-center text-green-700 bg-purple-100 py-2 m-2 ml-0 bg-opacity-95 border-2 border-l-0 border-purple-600 rounded-3xl rounded-l-none">
                <li onClick={() => scrollToLoc()} className={`${selected === 'home' ? 'selected' : ''} dropdown-item`}>Home</li>
                <li onClick={() => scrollToLoc(aboutRef)} className={`${selected === 'about' ? 'selected' : ''} dropdown-item`}>About</li>
                <li onClick={() => scrollToLoc(portfolioRef)} className={`${selected === 'portfolio' ? 'selected' : ''} dropdown-item`}>Portfolio</li>
                <li onClick={() => scrollToLoc(shopRef)} className={`${selected === 'shop' ? 'selected' : ''} dropdown-item`}>Shop</li>
                <li onClick={() => scrollToLoc(customRef)} className={`${selected === 'custom' ? 'selected' : ''} dropdown-item`}>Custom</li>
              </ul>
            </div>
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