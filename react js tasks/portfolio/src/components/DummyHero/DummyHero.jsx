import React from 'react'
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter'
import './DummyHero.css'

const DummyHero = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Enthusiastic Web Developer', 'Mern Stack Developer'],
        loop: {},
    });

    return (
        <div className="waste">
            <div className="left-hero">
                <div className="intro">
                    <p> I'm Chandra Kiran Reddy</p>
                </div>
                <div className="typewriter">
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {text.length == 0 ? <br/> : text}
                    </span>
                    <p>   </p>
                    <p>knack of building application with front and back end operations</p>
                </div>

            </div>

            <div className="right-hero">
                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
            </div>
        </div>


    )
}

export default DummyHero
