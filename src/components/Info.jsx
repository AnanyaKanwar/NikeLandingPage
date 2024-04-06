import React from 'react'
import Buttons from './Buttons'
import Footer from './Footer'

const Info = () => {
  return (
    <section className=' h-[613px] w-[595px] ml-20 pt-20  overflow-hidden flex flex-col gap-9 justify-start'>
      <h1 className='text-7xl font-extrabold'>YOUR FEET DESERVE <br />THE BEST</h1>
      <h4 className='font-bold text-[#2E2E2E] '>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h4>
       <div>
      <Buttons name={'Shop Now'} color={'bg-red-700'} />
      <Buttons name={'Category'} color={'bg-white'} text='text-[#2E2E2E]' border='border border-[#2E2E2E]'/>
      </div> 

      <Footer/>

    </section>
    
    
  )
}

export default Info
