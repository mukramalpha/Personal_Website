import React from 'react'
import BannerBackground from '../assets/banner_wallpaper.png'

const Expertise = () => {
  return (
    <>
         <div className='main-container bg-gray-100 py-8 border'>
          <h1 className='text-5xl font-bold text-green-300 underline text-center pb-16'>My Expertise</h1>
          {/* expertise container */}
          <div 
                style={{
                    backgroundImage:`url(${BannerBackground})`,
                    backgroundSize:"cover",
                }}
                className='expertise-contaier items-center flex py-16'>

            {/* text */}
        <div className='flex justify-center text-white'>
           <div className='w-2/3 text-center space-y-3'>
                <h1 className='text-4xl font-bold'>I Love these technologies</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ad eligendi hic repellendus nisi repellat consequatur numquam, veritatis deserunt architecto, ut saepe voluptatum. Corporis fugit perspiciatis soluta autem cumque dicta.</p>
                <br/>
                <a href='/hireme' className=' bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'><span className='fa-fade'>Hire me</span></a>
            </div>
         </div>

            {/* skills */}
            <div className='flex justify-center'>
            <div className='flex w-2/3 h-fit space-x-3  flex-wrap'>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Core Java</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Servlet</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>JSP</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Spring Framework</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Spring Boot</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Spring Cloud</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Html</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>CSS</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Javascript</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>React JS</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Next JS</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Tailwind CSS</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Bootstrap</p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-4 cursor-pointer rounded-full shadow-lg hover:bg-green-200'>Angular</p>
            </div>

            </div>
          </div>
         </div> 
    </>
  )
}

export default Expertise