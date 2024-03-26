import React from 'react'
import bgimage from '../assets/cta-bg.jpg'

const Members = () => {
  return (
    <>
     
     <div className={'bg-no-repeat bg-cover bg-center'} 
        style={{ backgroundImage: `url(${bgimage})`}} >

        <div className='w-full py-28'>
        <div className='max-w-[1321px] mx-auto grid lg:grid-cols-3'>

        <div className='lg:col-span-3'>
            <h1 className='leading-tight font-bold tracking-wide text-white text-center sm:text-4xl text-3xl py-2'>DON'T <span className='font-bold text-[#ed563b]'>THINK, </span>BEGIN <span className='text-[#ed563b]'>TODAY</span>!</h1>
            <p className='text-white text-center mt-5 sm:w-2/3 mx-auto text-lg'>Ut consectetur, metus sit am aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>

            <div className='text-center mt-7'>
            <button className="bg-[#ed563b] hover:bg-[#f83b19] text-white py-3 px-4">
             BECOME A MEMBER
            </button>
            </div>

        </div>
        </div>
       </div>
       </div>

    </>
  )
}

export default Members
