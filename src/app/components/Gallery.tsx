import Images from "./Images"
const Gallery = () => {

  return (
    <div className="flex justify-center max-w-lg mt-20 z-30">
      <Images color={'#C4B5FD'} rotation={12} index={20} image={'1.png'} />
      <Images color={'#6EE7B7'} rotation={6} index={10} image={'2.png'} />
      <Images color={'#C4B5FD'} rotation={-6} index={20} image={'3.png'} />
      <Images color={'#FEF08A'} rotation={0} index={10} image={'4.png'} />
      <Images color={'#C4B5FD'} rotation={12} index={20} image={'5.png'} />
    </div>
  )
}

export default Gallery