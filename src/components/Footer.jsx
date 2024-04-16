import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 border bg-gray-100 flex justify-between px-72'>
        <div>
            <p>@2024 Mohd Mukram Ghori <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'>
            <a href='/about'className='hover:text-green-600 hover:underline'>About</a>
            <a href='/policy'className='hover:text-green-600 hover:underline'>Privacy Policy</a>
            <a href='/license'className='hover:text-green-600 hover:underline'>Licencing</a>
            <a href='/contact'className='hover:text-green-600 hover:underline'>Contact</a>
        </div>
    </div>
  )
}

export default Footer