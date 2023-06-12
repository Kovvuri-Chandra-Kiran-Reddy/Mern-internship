import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes ,FaArrowCircleUp} from 'react-icons/fa'

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

    return (
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
    )
}

export default Navbar
