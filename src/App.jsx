import React from 'react'
import Home from './Components/Hero'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Program from './Components/Program'
import Choose from './Components/Choose'

function App() {
  return (
    <div className='bg-black h-full overflow-hidden'>
      <Navbar/>
     <Hero/>
     <Program/>
     <Choose/>
    </div>
  )
}

export default App