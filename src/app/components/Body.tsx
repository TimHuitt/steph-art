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
      <h1 className={`${sketch.className} text-[6rem] font-thin mt-40 text-purple-950`}>About Me</h1>
      <div className="flex flex-col items-center justify-center w-[90%] md:w-5/6 lg:w-4/6 bg-teal-400 rounded-xl overflow-y-auto">
        <p className="text-2xl p-6 w-3/4">My name is Steph Huitt and also known as aDoodlingOctopus on social media, I am an illustrator painter that specializes in whimsical colorful designs that bring smiles to faces of all ages! I love to create a sense of joy through the worlds I create and what I bring to life! </p>
        <div className="relative flex justify-center items-start h-[600px] gap-6 w-full my-6 px-6 overflow-hidden">
          <div className="relative w-1/4 h-1/2 rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/11.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-3/5 h-full rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/12.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-1/4 h-1/2 rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/13.jpg"}
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

export default Body
