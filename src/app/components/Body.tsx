import Image from "next/image";
import Gallery from "./Gallery";
import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const Body: React.FC = () => {
  return (
    <>
      <div className={`h-[200px] w-[full] flex justify-center items-center`}>

        <Image 
          src={"/images/hi.png"}
          alt={""}
          width={1000}
          height={50}
          style={{objectFit: "contain"}}
        />

      </div>
      <Gallery />
    </>
  )
}

export default Body
