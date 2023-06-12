import './Hero.css'
import React from 'react'
import IntroImg from "./../../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'
// import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="" className="into-img" />
      </div>
      <div className="content">
        <p>Hi , I'm a Chandra Kiran Reddy</p>
        <pre> I am a Web Developer </pre>
        <div>
          <Link to="/projects" className='btn'> Projects </Link>
          <Link to="/contact" className='btn btn-light'> Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
