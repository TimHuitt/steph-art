import { useState, useEffect, useCallback } from 'react'

const Announcements: React.FC<{width: number}> = ({ width }) => {
  const [ showDetails, setShowDetails ] = useState<boolean>(false)

  const handleDetails = () => {
    setShowDetails(prev => !prev)
  }
  
  useEffect(() => {

    const handleClose = (e: MouseEvent | TouchEvent) => {
      const detailsWindow = document.getElementById('details-window')
      const target = e.target as HTMLElement
      
      if (detailsWindow && !detailsWindow.contains(target)) {
        handleDetails()
      }
    }

    if (showDetails) {
      document.addEventListener('mousedown', handleClose)
      document.addEventListener('touchstart', handleClose)
    }

    return () => {
      document.removeEventListener('mousedown', handleClose)
      document.removeEventListener('touchstart', handleClose)
    }
  }, [showDetails])

  return (
    <>
      <div 
        onClick={handleDetails}
        className="relative w-[75%] min-h-8 flex justify-center items-center mt-2 md:mt-4 text-sm md:text-base lg:text-lg bg-purple-950 opacity-8 rounded-xl shadow whitespace-nowrap overflow-hidden cursor-pointer"
      >
        <p className="ticker absolute inline-block text-gray-100">
          LIVE PAINTING: Come see my live painting night at the OZO Latte Art Throwdown! Click here for details!
        </p>
      </div>
      { showDetails && (
        <div className='fixed top-0 left-0 h-screen w-screen min-w-screen min-h-screen flex justify-center items-center bg-purple-950 bg-opacity-60 z-50'>
          <div 
            id="details-window" 
            className='relative w-[90%] max-w-xl h-1/2 flex justify-center p-4 pt-8 border-4 border-purple-950 bg-purple-700 rounded-xl z-[60]'
          >
            <h2 className='text-2xl'>Live Painting</h2>
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