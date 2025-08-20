import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact'>
    <h1>Get in touch</h1>
    <h2>Want to get in touch with us? Here is how you can contact us. We are here to answer all your queries.</h2>
    <div className="pol">
      <h2>Registered office </h2>
      <h3>City Gate House</h3>
      <h3>246-250 Romford Road,</h3>
      <h3>Forest Gate,</h3>
      <h3>London, E7 9HZ</h3>
      <h3 className='pil'><b>Call us:</b> 020 8534 9028</h3>
      <h3 className="pil"><b>Email us:</b> <a className='lqi'>info@stnsecurity.co.uk</a></h3>
      <h3 className='pil'><b>Sales:</b> 0333 0500230</h3>
      <h3 className='pil'><b>Sales:</b><a className='lqi'> sales@stnsecurity.co.uk</a> </h3>
      <div className="pmk">
      <h3 className='pkl'>If you wish us to contact you, please fill in the contact form below and we will be in touch.</h3>
      </div>
    </div >
    <div className='forms-one'>

     <h2>Contact details</h2>
    <hr />
     <div className="flak">
      <div className="flaki">
      <label htmlFor="" >First Name:</label>
      <input type="text" className='lali'/>  
      </div>
      <div className="flake">
      <label htmlFor="">Last Name:</label>
      <input type="text" className='lali'/>  
      </div>
       </div>
       <hr />
    <div className="kali">
      <div className="kalo">
      <label htmlFor="">Email:</label>
      <input type="text" className='lali'/>
        </div>  
        <div className="kale">
        <label htmlFor="">Your phone number:</label>
        <input type='number' className='lali'/>
        </div>
    </div>
    <hr />
    <div className="gru">
        <div className="gri">
        <label htmlFor="">Your enquiry:</label>
        <input type="text" className='lalo'/>
        </div>
    </div>
    <Link to="/submit" className='about'>
     <button className='boo'>Submit</button>
     </Link>
    </div>
    </div>
  
  )
}

export default Contact