import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import r1 from './../../assets/react1.jpg'
import r2 from './../../assets/react2.webp'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I</h1>
                <p>I always excited to learn new technologies related to any background. I am strongly motivated, fast learner, hardworker.i always gives my complete effort towards the work.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={r1} alt="image" className='img' />
                    </div>
                    <div className="image-stack bottom">
                        <img src={r2} alt="image" className='img' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContent
