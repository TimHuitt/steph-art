
import Image from "next/image"
import Divider from './Divider'
import { Cabin_Sketch } from "next/font/google";  

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: "400"
});

const Header: React.FC = () => {


  return (
    <div className="relative w-full">
      <div className="relative w-full h-[35vh] text-xl rounded-xl overflow-hidden z-0">
        <Image 
          src={'/images/bg.png'} 
          alt={"header-background"}
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="absolute bottom-[5vh] h-0">
        <Divider header={true} />
      </div>
    </div>
  )
}

export default Header