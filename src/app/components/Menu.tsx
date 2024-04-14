import Image from "next/image";
import { useWindowContext } from '@/app/windowContext'

const Menu: React.FC = () => {
  const { width } = useWindowContext()

  const handleNavigate = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    
    return
  }

  return (
    <>      
      <div className="sticky top-0 w-full h-14 flex justify-center items-center text-xl overflow-hidden z-40">
        
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
            <div className="p-2">
              <Image
                src={"/images/menu.png"}
                alt={""}
                width={40}
                height={40}
                style={{objectFit:"contain"}}
              />
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