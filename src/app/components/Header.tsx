
import Image from "next/image"
import Divider from './Divider'
import { Cabin_Sketch } from "next/font/google";  

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: "400"
});

const Header: React.FC = () => {


  return (
    <div className="relative w-full h-auto">
      <div className="absolute top-0 left-0 w-full pb-[250px] md:pb-[350px] lg:pb-[450px] relative flex flex-col justify-center items-center mt-4 md:mt-6 text-xl rounded-xl overflow-hidden z-0">
        <Image 
          src={'/images/bg.png'} 
          alt={"header-background"}
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <Divider translate={true}/>
    </div>
  )
}

export default Header