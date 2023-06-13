import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work/Work'
import MainHero from './../components/MainHero/MainHero'
const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <MainHero />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
