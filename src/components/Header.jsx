import React, { useState } from 'react'

const Header = () => {

    const [brandName,setBrandName]=useState("Mohd Mukram Ghori");
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/about",
            id:2,
        },
        {
            title:"Skills",
            link:"/skills",
            id:3,
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4,
        },
        {
            title:"Contact",
            link:"/contact",
            id:5,
        }
    ])
    const [actionButton,setActionButton]=useState({
        title:"Hire me",
        link:"/hire-me",
    })

  return (
    <>
      <div className='main flex justify-between h-20 border items-center px-16 bg-green-100'>
        
        {/* brand logo */}
        <div>
           <h1 className='text-3xl font-bold'>{brandName}</h1>
        </div>
          
        {/* menu links */}
        <div className='space-x-3'>
              {
                menuLinks.map((link)=>(
                    <a key={link.id} href={link.link} className='hover:text-orange-500'>{link.title}</a>  
                ))
              }
            {/* 
           <a href='/home'className='hover:text-orange-500'>Home</a>
           <a href='/about'className='hover:text-orange-500'>About</a>
           <a href='/skills'className='hover:text-orange-500'>Skills</a>
           <a href='/portfolio'className='hover:text-orange-500'>Portfolia</a>
           <a href='/contact'className='hover:text-orange-500'>Contact</a>
           */}

        </div>
           
         {/* buttons */}
        <div>
           <a href={actionButton.link} className='bg-green-200 text-black hover:bg-green-500 hover:text-white  text-2xl p-2 px-3 py-2 rounded-full shadow-lg'><span className='fa-fade'>{actionButton.title}</span></a>
        </div>
        
      </div>
    </>
  )
}

export default Header