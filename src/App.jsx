import React from 'react'
import NavBar from './components/NavBar'
import Info from './components/Info'
const App = () => {
  return (
    <div className='p-8'>
      <NavBar></NavBar>
      <Info></Info>
      <section className='absolute top-[26%] translate-x-[145%]'>
        <img src="img/shoe_image.png" alt="" />
      </section>
    </div>
  )
}
export default App
