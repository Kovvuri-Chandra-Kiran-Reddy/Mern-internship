import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from 'axios';
import Navbar2 from '../Navbar2/Navbar2';
import './CustomerHome.css'
import ImagesData from './ImagesData';
import ContactN from '../ContactN/ContactN';
import Contact from '../Contact/Contact';
import Contact2 from '../Contact2/Contact2';
import Footer from '../Footer/Footer';
const CustomerHome = () => {

    const location = useLocation();
    const [userDetails, setUserDetails] = useState({
        OwnerName: '', OwnerEmail: ''
    });

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j5lrs3i', 'template_1mqzjhr', form.current, '0dDqhZg44Stl2PfQ7')
            .then((result) => {
                alert("Sent Message Successfully ✅")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        emailjs.sendForm('service_j5lrs3i', 'template_y8rmu1m', form.current, '0dDqhZg44Stl2PfQ7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        Axios.get('https://online-food-delivery-system.onrender.com/getresownerdet', { params: { email: location.state.email.toLowerCase() } })
            .then((res) => {
                // console.log(res.data[0])
                setUserDetails(res.data[0]);
            })
            .catch(err => console.log(err))
    }, [location])

    return (
        <>
            <Navbar2 ownerName={userDetails.OwnerName} className='abcdd' />
            <section className="home" id="home">
                <div className="contentt">
                    <h3>
                        welcome! <span>Enjoy </span>your Meal
                    </h3>
                    <p>
                        Every taste tells a story, come choose your story!
                    </p>
                    <Link to="/menu" className="btn btn-primary">
                        Get yours now
                    </Link>
                </div>

            </section>
            {/* <section className='something'>
                {ImagesData.map(({ Imgsrc, ImgName, ImgPrice }) => {
                    return <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={Imgsrc} style={{ height: "200px", width: "200px" }} alt="nanna" />
                        <div > {ImgName} </div>
                        <div>{ImgPrice}</div>
                    </div>
                })}
            </section> */}
            <section className="contact-section">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    <p>Have a question or feedback? Reach out to us!</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' placeholder="Your Name" required />
                        <input type="email" name='user_email' placeholder="Your Email" required />
                        <input type="phone" name='user_phone' placeholder="Your Mobile" required />
                        <textarea required name='user_message' placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default CustomerHome
