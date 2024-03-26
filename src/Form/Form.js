import React from 'react'
import bgimage from '../assets/slide-01.jpg'

const Form = () => {
  return (
    <>

        <div className={'bg-no-repeat bg-cover bg-center'} 
       style={{ backgroundImage: `url(${bgimage})`}} >

        <div className='w-full mt-44 pt-16 pb-16' id='form'>
  

    <form class="grid grid-cols-1 gap-4 rounded-lg mx-auto w-full pt-10 sm:w-3/4 bg-white bg-opacity-20 p-10">
      <div class="flex flex-col md:flex-row">
        <div className='md:w-1/2 md:mr-7 my-3'>
          <input type="text" id="input1" name="input1" placeholder='Your Name' class="mr-3 placeholder:text-white w-full bg-opacity-20 bg-white border rounded border-white px-4 py-3 text-black lg:mr-5 focus:outline-blue-700" />
        </div>

        <div className='md:w-1/2 my-3'>
          <input type="email" id="input2" name="input2" placeholder='Your Email' class="mr-3 placeholder:text-white w-full border rounded bg-opacity-20 bg-white border-white px-4 py-3 text-black lg:mr-5 focus:outline-blue-700" />
        </div>
      </div>

      <div className='md:w-full my-3'>
          <input type="text" id="input3" name="input3" placeholder='Subject' class="mr-3 placeholder:text-white w-full border rounded bg-opacity-20 bg-white border-white px-4 py-3 text-black lg:mr-5 focus:outline-blue-700" />
        </div>

      <div>
        <textarea id="textarea" placeholder='Message' name="textarea" rows="10" class="p-2 placeholder:text-white px-4 py-3 w-full border border-white bg-opacity-20 bg-white rounded-md focus:outline-blue-700"></textarea>
      </div>

      <div class="flex items-center justify-start">
        <button type="submit" class="hover:bg-[#f83b19] mt-5 flex items-center text-white px-10 py-4 rounded bg-[#ed563b] focus:outline-none focus:ring focus:border-blue-700">
          SEND MESSAGE
        </button>
      </div>
    </form>
  </div>
</div>

      
    </>
  )
}

export default Form
