import React from 'react'

const NavBar = () => {
  return (
    <section>
    <nav className='flex justify-between items-center'>
      <img src=" img/nike.png" alt="" className=' h-[42.75px] w-[76px] ' />
      <div className='font-bold text-[#2E2E2E] '>
        <a href="" className=' pr-7'>MENU</a>
        <a href="" className=' pr-7'>LOCATION</a>
        <a href="" className=' pr-7'>ABOUT</a>
        <a href="" className=' pr-7'>CONTACT</a>
      </div>
      <button className=' bg-red-700 px-4 py-1 text-white'>Login</button>
    </nav>
    </section> 
    
  )
}

export default NavBar
