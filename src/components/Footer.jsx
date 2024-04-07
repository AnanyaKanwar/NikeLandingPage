import React from 'react'
import flipkart from '../../img/flipkart.png'
import amazon from '../../img/amazon.png'

const Footer = () => {
  return (
    <div>
    <p className=' text-sm'>Also Available on</p>
    <div className='flex items-center gap-4'>
    <img src={flipkart} className='h-10 ' alt="" />
    <img src={amazon} className='h-10 mt-2' alt="" />
    </div>
  </div>
  )
}

export default Footer
