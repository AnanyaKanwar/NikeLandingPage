import React from 'react'

const Buttons = ({name,color,text='text-white',border='border-none'}) => {
  return (
    <button className={`${color } ${text} ${border} px-4 py-1  mr-4`}>{name}</button> 
  )
}

export default Buttons
