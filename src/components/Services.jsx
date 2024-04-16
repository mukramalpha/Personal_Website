import React from 'react'

const Services = () => {
  return (
    <>
    <div className='main-container bg-black py-8 border'>
       <h1 className='text-5xl font-bold text-green-300 underline text-center pb-16'>My Services</h1>
       <div className='service-container space-x-5 px-6  text-white flex justify-center mt-4'>
        <div className='services1 space-y-4 bg-slate-200 p-5 text-center text-black rounded-xl shadow-lg hover:bg-green-200'>
            <i class="text-5xl fa-brands fa-react"></i>
            <h1 className='text-4xl font-semibold'>Frontend Developer</h1>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate quod illo quaerat nobis impedit. Minus accusantium, architecto quod animi eius amet. Tenetur consectetur sint soluta cupiditate distinctio, eveniet sed!</p>
            <br/>
            <a href='/check' className=' bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'>Check</a>
        </div>
        <div className='services2  space-y-4 bg-slate-200 p-5 text-center text-black rounded-xl shadow-lg hover:bg-green-200'>
            <i class="text-5xl fa-brands fa-java"></i>
            <h1 className='text-4xl font-semibold'>Backend Developer</h1>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate quod illo quaerat nobis impedit. Minus accusantium, architecto quod animi eius amet. Tenetur consectetur sint soluta cupiditate distinctio, eveniet sed!</p>
            <br/>
            <a href='/check' className=' bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'>Check</a>
        </div>
        <div className='services3 space-y-4  bg-slate-200 p-5 text-center text-black rounded-xl shadow-lg hover:bg-green-200'>
            <i class="text-5xl fa-brands fa-codepen"></i>
            <h1 className='text-4xl font-semibold '>Database Developer</h1>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate quod illo quaerat nobis impedit. Minus accusantium, architecto quod animi eius amet. Tenetur consectetur sint soluta cupiditate distinctio, eveniet sed!</p>
            <br/>
            <a href='/check' className='bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'>Check</a>
        </div>
       </div>
    </div>
    </>
  )
}

export default Services