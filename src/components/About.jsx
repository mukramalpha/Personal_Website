import React from 'react'
import BannerImage from '../assets/mmg1.png'

const About = () => {
  return (
    <div className='main-container bg-green-100 py-8 border'>
       <h1 className='text-5xl font-bold text-green-300 underline text-center pb-16'>About Me</h1>
       <div className='flex items-center'>

         {/* image */}
         <div className='px-6 w-full flex justify-center'>
            <img className='rounded-full w-fit shadow-lg ' src={BannerImage} alt='Mohd Mukram Ghori'/>
         </div>

         {/* text */}
         <div className='w-full flex justify-center'>
            <div className='space-y-5'>
            <h1 className='text-4xl font-semibold'>Java Developer & Reactjs Developer</h1>
            <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem doloremque dolore consequatur perferendis dolores mollitia quae eius maiores facilis.</p>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde aliquam, dicta quasi sequi quidem. Omnis eveniet amet fuga, odit dolore rem veniam beatae alias, corporis asperiores a, laborum recusandae?</p>
            <a href='/readmore' className=' bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'>Read More...</a>
            </div>   
         </div>

       </div>
    </div>
  )
}

export default About