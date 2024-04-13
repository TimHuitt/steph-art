import Image from "next/image"

const Header: React.FC = () => {
  
  return (
    <div className="w-[95%] h-auto flex flex-col justify-center items-center mt-2 md:mt-4 text-xl rounded-xl overflow-hidden">
      <Image 
        src={'/images/bg.png'} 
        alt={"header-background"} 
        width={4000} 
        height={200} 
        style={{objectFit: "cover", objectPosition: "center"}}
      />
      <Image 
        src={'/images/divider.png'} 
        alt={"divider-image"} 
        width={4000} 
        height={200} 
        style={{objectFit: "cover", objectPosition: "center"}}
        className="-translate-y-12"
      />
    </div>
  )
}

export default Header