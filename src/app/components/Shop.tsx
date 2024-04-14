import Image from "next/image"
import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const Shop: React.FC = () => {
  return (
    <>
      <h1 className={`${sketch.className} text-[6rem] font-thin mt-10 text-purple-950`}>Shop</h1>
      <div className="flex justify-between items-center">
        <p className="w-full text-xl p-6 pe-0 w-3/4">
          Browse my collection of paintings, prints, sculpts, and more at &nbsp;
        </p>
        <div className="relative max-h-20 max-w-50 border-b-4 border-orange-500 hover:bg-orange-500 hover:bg-opacity-20 rounded-xl overflow-hidden cursor-pointer">
          <Image 
            src={"/images/icons/etsy.svg"}
            alt={""}
            width={100}
            height={40}
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
      <div className="relative flex justify-center items-start h-[300px] gap-6 w-full my-6 px-6 overflow-hidden">
        <div className="relative w-1/4 h-full rounded-xl overflow-hidden">
          <Image 
            src={"/images/featured/15.jpg"}
            alt={""}
            fill
            style={{objectFit: "cover"}}
          />
        </div>
        <div className="relative w-1/4 h-full rounded-xl overflow-hidden">
          <Image 
            src={"/images/featured/16.jpg"}
            alt={""}
            fill
            style={{objectFit: "cover"}}
          />
        </div>
        <div className="relative w-1/4 h-full rounded-xl overflow-hidden">
          <Image 
            src={"/images/featured/17.jpg"}
            alt={""}
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
    </>
  )
}

export default Shop