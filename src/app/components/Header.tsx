import Image from "next/image"
import Divider from './Divider'
const Header: React.FC = () => {
  
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-2 md:mt-4 text-xl rounded-xl overflow-hidden">
      <Image 
        src={'/images/bg.png'} 
        alt={"header-background"} 
        width={4000} 
        height={200} 
        style={{objectFit: "cover", objectPosition: "center"}}
      />
      <Divider translate={true}/>
    </div>
  )
}

export default Header