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
      <p className="text-2xl p-6 w-3/4">My name is Steph Huitt and also known as aDoodlingOctopus on social media, I am an illustrator painter that specializes in whimsical colorful designs that bring smiles to faces of all ages! I love to create a sense of joy through the worlds I create and what I bring to life! </p>
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