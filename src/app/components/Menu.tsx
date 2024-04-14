import Image from "next/image";

const Menu: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 h-14 flex justify-center items-center text-xl z-50">
        <ul className="flex w-auto text-green-700 bg-purple-100 py-2 bg-opacity-75 rounded-3xl">
          <li className="list-item selected">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Portfolio</li>
          <li className="list-item">Shop</li>
          <li className="list-item">Custom</li>
        </ul>
      </div>
      <div className="sticky top-0 w-full h-14 flex -mt-14 mr-8 justify-end items-center text-xl overflow-hidden z-40">
        <div className="flex w-auto h-[40px] justify-center items-center gap-2 px-2 py-0 mx-4 text-green-700 bg-purple-100 py-2 bg-opacity-75 rounded-3xl">
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