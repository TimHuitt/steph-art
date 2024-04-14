'use client'

import Image from "next/image"
import { useEffect, useState } from 'react'

interface PropTypes {
  color: string
  rotation: number
  index: number
  image: string
}

const Images: React.FC<PropTypes> = ({ color, rotation, index, image }) => {

  return (
    <div className="w-[300px] h-[300px] flex justify-center items-center mt-2 md:mt-4 -mx-8 text-xl rounded-xl">
      <div style={{ transform: `rotate(${rotation}deg)`, zIndex: `${index}`, backgroundColor: `${color}` }} className={`h-[300px] w-[300px] shadow-lg  shadow-slate-600  border-purple-950 rounded-3xl hover:z-50 overflow-hidden`}>
        <Image 
          src={`/images/featured/${image}`}
          alt={""}
          width={300} 
          height={300}
          style={{ objectFit:"contain" }}
        />
      </div>
    </div>
  )
}

export default Images