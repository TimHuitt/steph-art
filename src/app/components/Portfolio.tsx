import Image from "next/image"
import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const Portfolio: React.FC = () => {
  return (
    <>
      <h1 className={`${sketch.className} font-thin mt-10 text-purple-950`}>Portfolio</h1>
      <small className="-mt-5 mb-10 opacity-30">click to enlarge</small>
      <div className="flex flex-col items-center justify-center w-[90%] md:w-5/6 lg:w-4/6 bg-purple-300 rounded-xl overflow-y-auto">
        <div className="relative flex flex-col items-center justify-center items-start h-auto gap-6 w-full my-6 px-6 overflow-hidden">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/14.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/15.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/16.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/17.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio