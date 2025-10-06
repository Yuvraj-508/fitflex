import React from 'react'
import Home from './Components/Hero'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Program from './Components/Program'
import Choose from './Components/Choose'
import Transformation from './Components/Transformation'
import PricingPlan from './Components/Pricing'
import TestimonialSection from './Components/testiminol'
import { Contact } from 'lucide-react'
import ContactForm from './Components/Contact'
import FitnessFooter from './Components/Footer'

function App() {
  return (
    <div className='bg-black h-full overflow-hidden'>
      <Navbar/>
     <Hero/>
     <Program/>
          <Transformation/>
     <Choose/>
     <PricingPlan/>
     <TestimonialSection/>
   <ContactForm/>
   <FitnessFooter/>

    </div>
  )
}

export default App