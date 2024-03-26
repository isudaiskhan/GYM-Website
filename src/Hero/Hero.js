import React from 'react'
import bgvideo from '../assets/gym-video.mp4'

const Hero = () => {
  return (
    <>


 <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-end" id='home'>
  <video
    autoPlay
    muted
    loop
    className="w-full h-full object-cover absolute inset-0"
  >
    <source src={bgvideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="bg-[#172d39a6] bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center">
    <div className="text-white sm:text-xl text-sm font-bold mb-5 w-full text-center">
      WORK HARDER, GET STRONGER
    </div>
    <div className="text-white lg:text-8xl md:text-7xl sm:text-6xl w-full text-center text-4xl font-bold mb-4">
      EASY WITH OUR <span className='text-[#ed563b]'>GYM</span>
    </div>
  </div>

  <button className="bg-[#ed563b] hover:bg-[#f83b19] text-white py-3 px-4 absolute mb-8 top-2/3">
    BECOME A MEMBER
  </button>
</div>

      
    </>
  )
}

export default Hero
