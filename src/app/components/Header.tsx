import Image from "next/image"
import Divider from './Divider'
const Header: React.FC = () => {
  
  return (
    <>
      <div className="w-full h-0 pb-[25vh] md:pb-[35vh] relative flex flex-col justify-center items-center mt-2 md:mt-4 text-xl rounded-xl overflow-hidden">
        <Image 
          src={'/images/bg.png'} 
          alt={"header-background"}
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <Divider translate={true}/>
    </>
  )
}

export default Header