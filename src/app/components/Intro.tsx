import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: "400"
});

const Intro: React.FC = () => {
  return (
    <>
      <div className={`h-auto w-[full] max-h-0 mt-10 lg:mt-20 flex justify-center items-center`}>
        <h2 className={`${sketch.className} text-[3rem] sm:text-[4rem] md:text-[8rem] text-purple-950`}>Hi! I&apos;m Steph!</h2>
      </div>
    </>
  )
}

export default Intro
