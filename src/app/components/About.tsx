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
        <p className="text-2xl py-8 px-12 w-full text-center">My name is Steph Huitt and also known as aDoodlingOctopus on social media, I am an illustrator painter that specializes in whimsical colorful designs that bring smiles to faces of all ages! I love to create a sense of joy through the worlds I create and what I bring to life! </p>
        <div className="relative grid grid-rows-[20%_60%_20%] grid-cols-2 md:grid-rows-1 md:grid-cols-3 justify-center items-start h-[600px] gap-6 w-full my-6 px-6 overflow-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/11.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image 
              src={"/images/featured/12.jpg"}
              alt={""}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative w-full h-4/5 rounded-xl overflow-hidden">
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

export default About