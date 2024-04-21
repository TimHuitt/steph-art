import Image from "next/image"
import { Cabin_Sketch } from "next/font/google";
import { useWindowContext } from "../windowContext";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const Shop: React.FC = () => {
  const { shopRef } = useWindowContext()
  return (
    <>
      <h1 ref={shopRef} className={`${sketch.className} font-thin text-purple-950`}>Shop</h1>
      <div className={`flex flex-col items-center`}>
        <p className="w-full text-center md:text-xl p-6 w-3/4">
          Browse my collection of paintings, prints, sculpts, and more at &nbsp;
        </p>
        <a href="https://www.etsy.com/shop/aDoodlingOctopus" target="_blank">
          <div className="relative max-h-20 max-w-50 px-2 mb-10 hover:border-b-4 hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-20 rounded-xl overflow-hidden cursor-pointer">
            <Image 
              src={"/images/icons/etsy.svg"}
              alt={""}
              width={100}
              height={40}
              style={{objectFit: "cover"}}
            />
          </div>
        </a>
        <h3>and</h3>
        <a href="https://adoodlingoctopus.threadless.com/" target="_blank">
          <div className="relative max-h-20 max-w-80 flex items-center mt-10 bg-gray-700 hover:border-b-4 hover:border-gray-500 hover:bg-gray-500 hover:bg-opacity-20 hover:rounded-b-lg overflow-hidden cursor-pointer">
            <Image 
              src={"/images/icons/threadless.svg"}
              alt={""}
              width={200}
              height={40}
              style={{objectFit: "cover"}}
            />
          </div>
        </a>
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