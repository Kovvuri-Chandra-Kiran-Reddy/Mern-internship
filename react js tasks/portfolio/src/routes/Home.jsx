import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work/Work'
import MainHero from './../components/MainHero/MainHero'
import Skills from './../components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <MainHero />
      <Skills />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
