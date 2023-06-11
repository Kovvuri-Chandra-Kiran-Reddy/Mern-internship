import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work/Work'
import DummyHero from './../components/DummyHero/DummyHero'
const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <DummyHero />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
