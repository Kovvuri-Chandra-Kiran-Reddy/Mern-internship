import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaArrowCircleUp } from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const [color, setColor] = useState(false);
    const ChangeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", ChangeColor)

    const [visibility, setVisibility] = useState(false);
    const changeVisibility = () => {
        if (window.scrollY >= 100) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    window.addEventListener("scroll", changeVisibility)

    const handleClick2 = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <><div className="scroll-top" onClick={handleClick2} style={{ display: visibility ? "block" : "none" }} >
            <FaArrowCircleUp className='icon' />
        </div>
            <div className={color ? 'header header-bg' : 'header'}>
                <Link to="/">
                    <h2>Portfolio</h2>
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                        <Link to="/about" > About </Link>
                    </li>
                    <li>
                        <Link to="/projects" > Projects </Link>
                    </li>
                    <li>
                        <Link to="/contact" > Contact </Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: "#fff" }} />) :
                        <FaBars size={20} style={{ color: "#fff" }} />
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
