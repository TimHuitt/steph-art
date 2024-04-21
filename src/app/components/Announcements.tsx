import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const Announcements: React.FC<{width: number}> = ({ width }) => {
  const [ showDetails, setShowDetails ] = useState<boolean>(false)

  const handleDetails = () => {
    setShowDetails(prev => !prev)
  }
  
  return (
    <>
      <div 
        onClick={handleDetails}
        className="relative w-[75%] min-h-8 flex justify-center items-center mt-2 md:mt-4 text-sm md:text-base lg:text-lg bg-purple-950 opacity-8 rounded-xl shadow whitespace-nowrap overflow-hidden cursor-pointer z-40"
      >
        <p className="ticker absolute inline-block text-gray-100">
          LIVE PAINTING: Come see my live painting night at the OZO Latte Art Throwdown! Click here for details!
        </p>
      </div>
      { showDetails && (
        <div className='fixed top-0 left-0 h-screen w-screen max-h-screen max-w-screen flex justify-center items-start pt-10 text-purple-200 bg-purple-950 bg-opacity-60 z-50'>
          <div 
            id="details-window" 
            className='relative w-[90%] max-w-xl h-auto max-h-[80vh] flex flex-col justify-center border-4 border-purple-950 bg-purple-700 rounded-xl z-[60]'
          >
            <div className='w-full h-auto flex flex-col items-center p-4 pt-8 md:pt-12 overflow-auto'>
              <h2 className='text-2xl text-center'>OZO Coffee Roasters Annual Spring Latte Art ThrowDown</h2>
              <small className='py-4 text-center'>
                OZO Coffee West Pearl (1015 Pearl St) <br/>
                Friday, April 26th at 6pm
              </small>
              <div className='relative'>
                <Image 
                  src="/images/featured/1.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <p className='w-full h-auto flex items-center text-center py-4'>
              Come witness a latte art throw down, where local and regional baristas gather to stregthen the Specialty Coffee Industry , build community and give back to local non-profits.<br /><br />
              This event is a fundraiser for Mindful Works and Bridge House, two Boulder based non profits on a mission
              to end homelessness.<br /><br />
              Free to Attend
              </p>
            </div>
            <div 
              onClick={handleDetails}
              className='absolute top-2 right-2 w-[30px] h-[30px] flex justify-center items-center text-lg text-purple-100 bg-purple-900 border-2 border-purple-950 rounded-full cursor-pointer select-none'
            >
              <p className=''>x</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Announcements