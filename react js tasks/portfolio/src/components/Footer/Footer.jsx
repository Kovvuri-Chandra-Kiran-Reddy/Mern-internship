import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                            <p>Hiramandalam , Srikakulam</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 8099559911
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} /> chandrakiranreddykovvuri@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy discussing new projects and design challenges and enthusiastic to learn new technologies</p>
                    <div className="social">
                    <a href="https://twitter.com/Chandra93139561"><FaTwitter size={30} style={{ color: "white" }} />  </a> 
                    <a href="https://www.facebook.com/chandrakiranreddy.kovvuri/"> <FaFacebook size={30} style={{ color: "white" }} />  </a>
                    <a href="https://www.linkedin.com/in/chandra-kiran-reddy-kovvuri-9212a023b"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/Kovvuri-Chandra-Kiran-Reddy"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
