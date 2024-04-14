import Images from "./Images"
const Gallery = () => {

  return (
    <div className="flex max-w-screen z-40">
      <Images color={'#C4B5FD'} rotation={12} index={40} image={'1.png'} />
      <Images color={'#6EE7B7'} rotation={6} index={30} image={'2.png'} />
      <Images color={'#C4B5FD'} rotation={-6} index={40} image={'3.png'} />
      <Images color={'#FEF08A'} rotation={0} index={30} image={'4.png'} />
      <Images color={'#C4B5FD'} rotation={12} index={40} image={'5.png'} />
      {/* <Images color={'#FEF08A'} rotation={-6} index={30} /> */}
    </div>
  )
}

export default Gallery