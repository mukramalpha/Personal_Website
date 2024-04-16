import React from 'react'
import BannerImage from '../assets/mmg.png';
import BannerBackground from '../assets/banner_wallpaper.png'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Banner = () => {
     // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Database Developer", "Cloud Engineer","Full Stack Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });
     // Destropying
     return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div 
    style={{
        backgroundImage:`url(${BannerBackground})`,
        backgroundSize:"cover",
      }} 
       className='main-container flex items-center'>

     {/* text */}
     <div 
         
         className='w-full flex justify-center items-center'>
      <div className='w-2/3 ms-10'>
        <h3 className='mt-2 text-3xl font-semibold'>Hi, I am</h3>
        <h1 className='mt-2 text-6xl font-bold'>Mohd Mukram Ghori</h1>
        <h2 className='mt-2 text-3xl'>I am <span className='font-bold' ref={el}></span></h2>
        <p className='mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque, libero officiis voluptas ipsum deserunt sint adipisci veritatis nobis molestias architecto, tempora minima commodi dolores magnam quidem sit aut, similique praesentium atque natus cum. Quod repudiandae itaque, molestias corrupti, doloremque rem, excepturi quidem nobis omnis obcaecati dolore nesciunt non? Nam!</p>
        <div className='icons-container space-x-5'>
            <a href='https://www.facebook.com/mohdmukramghori' className=''>
                <i class="fa-brands fa-facebook text-4xl hover:text-green-400"></i>
            </a>
         
         <i class="cursor-pointer fa-brands fa-instagram text-4xl hover:text-green-400"></i>
         <i class="cursor-pointer fa-brands fa-linkedin text-4xl hover:text-green-400"></i>
         <i class="cursor-pointer fa-brands fa-whatsapp text-4xl hover:text-green-400"></i>
         <i class="cursor-pointer fa-brands fa-x-twitter text-4xl hover:text-green-300"></i>
         <i class="cursor-pointer fa-brands fa-discord text-4xl hover:text-green-300"></i>
         <i class="cursor-pointer fa-brands fa-github text-4xl hover:text-green-300"></i>
         <i class="cursor-pointer fa-brands fa-youtube text-4xl hover:text-green-300"></i>
        </div>
        <br/>
        <a href='/contact' className='bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'>Contact Me</a>
      </div>
     </div>

     {/* image */}
     <div className=' w-full flex justify-center'>
        <img className='rounded-full my-4 w-fit shadow-lg' src={BannerImage}/>
     </div>

    </div>
  )
}

export default Banner