import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label> Your Name</label>
            <input type="text" />

            <label> Email</label>
            <input type="email" />

            <label> Mobile </label>
            <input type="number" />

            <label> Subject</label>
            <input type="text" />

            <label> Message</label>
            <textarea rows={6} placeholder='Type your message here'></textarea>
            <button className='btn'> Submit </button>
        </form>
    </div>
  )
}

export default Form
