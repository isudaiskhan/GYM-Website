import React from 'react'
import image from '../assets/feature (2).png'
import image1 from '../assets/first-trainer.jpg'
import image2 from '../assets/second-trainer.jpg'
import image3 from '../assets/third-trainer.jpg'
import { FaFacebookF,FaTwitter,FaLinkedinIn, FaBehance } from "react-icons/fa";



const Blogs  = () => {
  return (
    <>

<div className='w-full py-16 px-4'>
    <h1 className='text-center text-3xl font-bold mt-14 text-black'>EXPERT <span className='text-[#ed563b]'>TRAINERS</span></h1>
    <img src={image} className='mx-auto mt-6'/>

    <div className='sm:w-2/5 mx-auto text-center mt-7'>
      <p className='text-[#7a7a7a]'>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
    </div>
    </div>

       <div class="container mx-auto mt-10 max:w-[1100px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Blog 1 */}
            <div class="bg-white p-7 rounded-lg shadow-2xl border flex flex-col">
                <img src={image1}  class="w-80 mx-auto h-56 object-cover mb-8 rounded" />
                <h2 class="font-medium mb-2 mx-3 text-[#ed563b]">Strength Trainer</h2>
                <h2 class="text-xl font-semibold mx-3 mb-4 text-[#232d39]">Bret D. Bowers</h2>
                <p class="text-gray-600 flex-grow mx-3 leading-7 tracking-wide">Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                <a href="#" class="hover:no-underline">
                <div className='flex mx-3 mt-6 space-x-4 text-[#232d39] text-lg'>
                <FaFacebookF className='hover:text-blue-500' />
                <FaTwitter className='hover:text-cyan-400' />
                <FaLinkedinIn className='hover:text-blue-700' />
                <FaBehance className='hover:text-blue-800' />
                </div>
                </a>
            </div>
         

       
                 {/* Blog 2 */}
            <div class="bg-white p-7 rounded-lg shadow-2xl border flex flex-col">
                <img src={image2}  class="w-80 mx-auto h-56 object-cover mb-8 rounded" />
                <h2 class="font-medium mb-2 mx-3 text-[#ed563b]">Muscle Trainer</h2>
                <h2 class="text-xl font-semibold mx-3 mb-4 text-[#232d39]">Hector T. Daigl</h2>
                <p class="text-gray-600 flex-grow mx-3 leading-7 tracking-wide">Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                <a href="#" class="hover:no-underline">
                <div className='flex mx-3 mt-6 space-x-4 text-[#232d39] text-lg'>
                <FaFacebookF className='hover:text-blue-500' />
                <FaTwitter className='hover:text-cyan-400' />
                <FaLinkedinIn className='hover:text-blue-700' />
                <FaBehance className='hover:text-blue-800' />
                </div>
                </a>
            </div>



              {/* Blog 3 */}
            <div class="bg-white p-7 rounded-lg shadow-2xl border flex flex-col">
                <img src={image3}  class="w-80 mx-auto h-56 object-cover mb-8 rounded" />
                <h2 class="font-medium mb-2 mx-3 text-[#ed563b]">Power Trainer</h2>
                <h2 class="text-xl font-semibold mx-3 mb-4 text-[#232d39]">Paul D. Newman</h2>
                <p class="text-gray-600 flex-grow mx-3 leading-7 tracking-wide">Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                <a href="#" class="hover:no-underline">
                <div className='flex mx-3 mt-6 space-x-4 text-[#232d39] text-lg'>
                  <FaFacebookF className='hover:text-blue-500' />
                <FaTwitter className='hover:text-cyan-400' />
                <FaLinkedinIn className='hover:text-blue-700' />
                <FaBehance className='hover:text-blue-800' />
                </div>
                </a>
            </div>

            </div>
            </div>
      
    </>
  )
}

export default Blogs 
