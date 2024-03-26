import React, { useState } from 'react';
import { AiOutlineClose} from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

  const triggerNavItem = (target) => {
    // Implement your logic here for handling navigation item clicks
    console.log(`Navigating to ${target}`);
  };

  const triggerMobileNavItem = (target) => {
    // Close the mobile menu after clicking an item
    setMobileMenu(false);
  
    // Scroll to the target section
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
         
     <div className="relative">
        {/* Navbar */}
        <div className="w-full z-50 lg:py-0 py-5 top-0 absolute sm:ps-0 ps-6 sm:pe-0 pe-6 lg:bg-[#6e7e868e] bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <a href="/">
                 <h1 className='w-full font-bold cursor-pointer text-3xl lg:text-white text-black'><a href='#'>TRAINING <span className='text-[#ed563b] font-bold'>STUDIO</span></a></h1>

              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

              <li className='p-7 border-transparent relative group'>
             <a href='#home' className='text-[#ed563b] font-semibold text-sm'>
                 Home
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#ed563b] transform scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>
       
         <li className='p-7 border-transparent relative group'>
             <a href='#about' className='text-white font-semibold text-sm group-hover:text-[#ed563b]'>
                 ABOUT
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#ed563b] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#classes' className='text-white font-semibold text-sm group-hover:text-[#ed563b]'>
                 CLASSES
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#ed563b] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#schedule' className='text-white font-semibold text-sm group-hover:text-[#ed563b]'>
                 SCHEDULES
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#ed563b] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#form' className='text-white font-semibold text-sm group-hover:text-[#ed563b]'>
                 CONTACT
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#ed563b] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <button className="bg-[#ed563b] hover:bg-[#f83b19] text-white text-sm py-3 px-5">
            SIGN UP
         </button>


            </ul>
          </div>

              <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu  className="text-3xl text-black" />
                ) : (
                  <IoMdMenu  className="text-3xl text-black" />
                )}
              </button>
            </div>
      </div>
      </div>
      </div>
   

      {/* Mobile Menu */}
       {mobileMenu && (
  <div className="lg:hidden fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
    <div className="absolute right-0 min-h-screen w-6/12 py-4 px-8 shadow md:w-1/3 bg-[#ed563b] z-50">
      <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
        <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
      </button>
      <ul className="mt-8 flex flex-col space-y-5">

        <MobileNavItem onClick={() => triggerMobileNavItem('#home')}> HOME</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#about')}> ABOUT</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#classes')}> CLASSES</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#schedule')}> SCHEDULES</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#form')}> CONTACT</MobileNavItem>

        <button className='bg-white py-2 font-semibold'>SIGN UP</button>

      </ul>
    </div>
  </div>
)}


    </>
  );
};


const NavItem = ({ children, onClick }) => {
  return (
    <li className="group pl-6">
      <span onClick={onClick} className="cursor-pointer pt-0.5 font-semibold uppercase text-black">
        {children}
      </span>
      
    </li>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5 font-semibold uppercase text-white">
        {children}
      </span>
          </li>
  );
};

export default Navbar;