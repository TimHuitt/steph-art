import { useState } from 'react'

const Announcements: React.FC<{width: number}> = ({ width }) => {
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  
  return (
    <div className="relative w-[75%] min-h-8 flex justify-center items-center mt-2 md:mt-4 text-sm md:text-base lg:text-lg bg-purple-950 opacity-8 rounded-xl whitespace-nowrap overflow-hidden cursor-pointer">
      <p className="ticker absolute inline-block text-gray-100">
        LIVE PAINTING: Come see my live painting night at the OZO Latte Art Throwdown! Click here for details!
      </p>
    </div>
  )
}

export default Announcements