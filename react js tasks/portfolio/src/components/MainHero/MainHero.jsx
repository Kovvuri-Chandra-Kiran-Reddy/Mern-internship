import React, { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import myImage from './../../assets/kiran photo.jpg'
import './MainHero.css'
import { FaArrowCircleUp, FaScroll } from 'react-icons/fa'

const MainHero = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Enthusiastic Web Developer', 'Mern Stack Developer'],
        loop: {},
    });



    const [visibility, setVisibility] = useState(false);
    const changeVisibility = () => {
        if (window.scrollY >= 100) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    window.addEventListener("scroll", changeVisibility)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="scroll-top" onClick={handleClick} style={{ display: visibility ? "block" : "none" }} >
                <FaArrowCircleUp className='icon' />
            </div>
            <div className="waste">
                <div className="left-hero">
                    <div className="intro">
                        <p> I'm Chandra Kiran Reddy</p>
                    </div>
                    <div className="typewriter">
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {text.length == 0 ? <br /> : text}
                        </span>
                        <p>   </p>
                        <p>knack of building application with front and back end operations</p>
                    </div>

                </div>

                <div className="right-hero">
                    <img src={myImage} alt="" style={{ width: "200px", height: "200px", borderRadius: 250 / 2, marginRight: "20px" }} />
                </div>
            </div>

        </>
    )
}

export default MainHero
