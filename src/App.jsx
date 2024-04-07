import React from 'react'
import NavBar from './components/NavBar'
import Info from './components/Info'
import shoe from '../img/shoe_image.png'
const App = () => {
  return (
    <div className='p-8'>
      <NavBar></NavBar>
      <Info></Info>
      <section className='absolute top-[26%] translate-x-[145%]'>
        <img src={shoe} alt="" />
      </section>
    </div>
  )
}
export default App
