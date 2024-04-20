import Image from "next/image"
import { Cabin_Sketch } from "next/font/google";
import { useWindowContext } from "../windowContext";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const About: React.FC = () => {
  const { aboutRef } = useWindowContext()

  return (
    <>
      <h1 ref={aboutRef} className={`${sketch.className} text-purple-950 mt-40`}>About Me</h1>
      <div className="flex flex-col items-center justify-center w-[90%] md:w-5/6 lg:w-4/6 bg-teal-400 rounded-xl">
        <p className="md:text-2xl py-8 px-4 md:px-12 w-full text-center">My name is Steph Huitt and also known as aDoodlingOctopus on social media, I am an illustrator painter that specializes in whimsical colorful designs that bring smiles to faces of all ages! I love to create a sense of joy through the worlds I create and what I bring to life! </p>
        <div className="relative w-[95%] h-[600px] grid grid-rows-3 grid-cols-2 md:grid-rows-1 md:grid-cols-[25%_50%_25%] justify-center items-start gap-5 my-6 px-6 overflow-hidden">
          <div className="relative w-full h-full md:h-3/5 row-start-3 md:row-start-1 rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/11.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-full row-start-1 row-span-2 col-span-2 md:row-span-1 md:col-span-1 md:row-start-1 md:col-start-2 md:row-span-2 lg:col-start-2 rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/12.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover", objectPosition: "top"}}
            />
          </div>
          <div className="relative w-full h-full md:h-3/5 row-start-3 md:row-start-1 md:col-start-3 rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/13.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover", objectPosition: "top"}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About