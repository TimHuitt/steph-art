import { Cabin_Sketch } from "next/font/google";

const sketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: "400"
});

const Intro: React.FC = () => {
  return (
    <>
      <div className={`h-auto w-[full] flex justify-center items-center`}>
        <h1 className={`${sketch.className} text-[4rem] md:text-[8rem] text-purple-950`}>Hi! I&apos;m Steph!</h1>
      </div>
    </>
  )
}

export default Intro
