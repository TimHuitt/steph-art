import Image from "next/image"

const Divider: React.FC<{translate?: boolean}> = ({ translate }) => {
  return (
    <Image 
      src={'/images/divider.png'} 
      alt={"divider-image"} 
      width={4000} 
      height={200} 
      style={{objectFit: "cover", objectPosition: "center"}}
      className={translate ? "-translate-y-4 md:-translate-y-12" : 'mt-24'}
    />
  )
}

export default Divider