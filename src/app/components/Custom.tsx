import Image from "next/image"
import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: "400"
});

const Custom: React.FC = () => {
  
  return (
    <>
      <h1 className={`${sketch.className} text-[6rem] font-thin mt-10 text-purple-950`}>Custom</h1>
      <div className="flex flex-col items-center justify-center w-[90%] md:w-5/6 lg:w-4/6 pt-20 bg-orange-300 rounded-xl overflow-y-auto">
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
        <div className="w-full flex justify-center">
          <form className="w-full flex flex-col items-center text-center">
            <label className="label" htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              className="input">
            </input>
            <label className="label" htmlFor="email">Email</label>
            <input type="email" className="input" name="email" />
            <label className="label" htmlFor="message">Message</label>
            <textarea className="input text-area" name="message"></textarea>
            
            <div className="w-full p-4 my-4">
              <button type="submit" className="form-button">Submit</button>
              <button className="form-button">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Custom