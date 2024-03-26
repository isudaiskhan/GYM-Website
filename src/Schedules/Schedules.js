import React from 'react'
import bgimage from '../assets/schedule-bg.jpg'
import image from '../assets/feature (2).png'

const Schedules = () => {
  return (
    <>
    

 <div className='w-full mt-36' id='schedule'>

<div className={'bg-no-repeat bg-cover bg-center h-[1000px]'} 
    style={{ backgroundImage: `url(${bgimage})`}} >

  <div className='w-full py-14 px-4'>
    <h1 className='text-center text-3xl font-bold mt-14 text-white'>CLASSES <span className='text-[#ed563b]'>SCHEDULE</span></h1>
    <img src={image} className='mx-auto mt-6'/>

    <div className='sm:w-2/5 mx-auto text-center mt-7'>
      <p className='text-white'>Nunc urna sem, laeet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
    </div>

    <div className='text-center flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 text-white mt-4 md:mt-8'>
      <h1 className='text-[#ed563b]'>Monday</h1>
      <h1>Tuesday</h1>
      <h1>Wednesday</h1>
      <h1>Thursday</h1>
      <h1>Friday</h1>
    </div>
  </div>

  <div className='mx-auto overflow-x-hidden'>
  <table className="border-collapse border border-white mx-auto w-1/4 sm:w-3/5 md:w-4/5 lg:w-2/3 xl:w-2/3">
    <tbody>
      <tr>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Fitness Class</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">10:00AM - 11:30AM</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">William G. Stewart</td>
      </tr>


      <tr>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Muscle Training</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Paul D. Newman</td>
      </tr>


      <tr>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Body Building</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">2:00PM - 3:30PM</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Boyd C. Harris</td>
      </tr>

      <tr>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Yoga Training Class</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Hector T. Daigle</td>
      </tr>

      <tr>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Advanced Training</td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7"></td>
        <td className="border border-white sm:px-4 md:px-6 lg:px-10 md:py-7 lg:py-7 text-white">Bret D. Bowers</td>
      </tr>


    </tbody>
  </table>
</div>

</div>
 </div>

    </>
  )
}

export default Schedules
