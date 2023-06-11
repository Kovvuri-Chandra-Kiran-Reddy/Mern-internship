import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroCom from '../components/HeroCom/HeroCom'
import Form from './../components/Form/Form'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroCom heading="CONTACT" text="Lets have a chat"/> */}
      <Form/>
      <Footer />
    </div>
  )
}

export default ContactUs
