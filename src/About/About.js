import React from 'react'
import image1 from '../assets/feature (2).png'
import image2 from '../assets/feature (1).png'

const About = () => {
  return (
    <>

  <div className='w-full py-36 px-4' id='about'>
    <h1 className='text-center text-3xl font-bold text-[#232d39]'>CHOOSE <span className='text-[#ed563b]'>PROGRAM</span></h1>
     <img src={image1} className='mx-auto mt-6'/>

    <div className='sm:w-2/5 mx-auto text-center mt-7'>
      <p className='text-[#7a7a7a]'>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
     </div>



 <div className='max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 mt-20'>

 {/* Program 1 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
        Basic Fitness
      </div>
      <p className='text-[#7a7a7a]'>
        Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>



 {/* Program 2 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
      Advanced Muscle Course
      </div>
      <p className='text-[#7a7a7a]'>
      You may want to browse through <span className='text-blue-600'>Digital Marketing</span> or <span className='text-blue-600'>Corporate</span> HTML CSS templates on our website.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>



   {/* Program 3 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
      New Gym Training
      </div>
      <p className='text-[#7a7a7a]'>
      If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>



 {/* Program 4 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
      Yoga Training
      </div>
      <p className='text-[#7a7a7a]'>
      This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>



 {/* Program 5 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
      Basic Muscle Course
      </div>
      <p className='text-[#7a7a7a]'>
      Credit goes to <span className='text-blue-600'>Pexels website</span> for images and video background used in this HTML template.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>



 {/* Program 6 */}
  <div className='flex items-center'>
    <img src={image2} className='object-contain md:object-cover md:rounded-lg mb-4 md:mb-0' alt='Basic Fitness Image' />
    <div className='ml-7'>
      <div className='text-xl font-semibold text-black mb-1'>
      Body Building Course
      </div>
      <p className='text-[#7a7a7a]'>
      Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.
      </p>
      <p className='text-sm font-semibold pt-2 text-[#ed563b]'>DISCOVER MORE</p>
    </div>
  </div>


</div>
</div>
      
    </>
  )
}

export default About
