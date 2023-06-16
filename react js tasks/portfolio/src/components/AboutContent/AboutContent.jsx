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
                <p>Hello 👋, my name is Chandra Kiran Reddy. I am currently pursuing B.Tech Fourth year in Computer Science and Engineering at VIT Chennai. I am a front end developer with great passion for website design. I have been working on the front end for some time, have also created some projects which you can see on my GitHub and will continue to do so. Apart from front end skills, I also know some programming languages like c, c++, python and java. A lot of work has also been done on machine learning and some projects have also been created. But right now my focus is on the front end because these skills give me the freedom to make anything new and innovative so that I can find a solution of any problem.</p>
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
