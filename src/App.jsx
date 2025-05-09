import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'

const App = () => {
  return (
  <>
  <div className='bg-[#222831]'>
    <Navbar />
    <Hero />
    <Menu />
  </div>
  </>
  )
}

export default App