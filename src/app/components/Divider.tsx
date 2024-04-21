import Image from "next/image"

const Divider: React.FC<{header?: boolean}> = ({ header }) => {
  return (
    <Image 
      src={'/images/divider.png'} 
      alt={"divider-image"} 
      width={4000} 
      height={200} 
      style={{objectFit: "cover", objectPosition: "center"}}
      className={header ? '' : 'mt-12 mb-16'}
    />
  )
}

export default Divider