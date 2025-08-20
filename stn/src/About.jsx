import React from 'react'
import './About.css'
import img from './image/about-us.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
       <h1 className='security'>About STN Security</h1>

       <p className='our'>Our dedicated STN Security team are here to provide you with
         a first class security services that you can depend on.</p>
       
        <div className="banner">
         <div className="imgtext">
          <img src={img} className="img" />
         </div>
         <div className="text">
          <span className='our-mission'>Our mission</span>
          <p className="p">Our officers use their vast training to focus on offering the highest quality security and safety
             solutions for each work. STN Security is delighted to outperform its competitors
              with superior security solutions.</p>
          <p className="p">We can handle individual security needs better than anyone 
            else at the most competitive pricing. That’s what most of our stakeholders and residents want, and it’s what we specialise in providing.</p>
          <p className="p">We take the time to learn about the security solutions that stakeholders 
            and residents require so that we can provide the most precise security solutions to everyone.</p>
         </div>
        </div>
     
     <div className="content">
       <h1 className='bespoke'>Bespoke Security Packages</h1>

       <p className='bespoke-text'>Although STN is essentially London based we provide security services throughout mainland UK.
         Our company comprises of professionals with years of extensive security industry experience.</p>

        <h1 className="bespoke">Customised Services</h1>

        <p className="bespoke-text">We are in the business of helping our clients protect the ones they love and the things they have worked hard for.
           We specialize in providing maximum security by designing a customized security system according to the preferences of the client.</p>

        <h1 className='bespoke'>Quality Services</h1>

        <p className="bespoke-text">We have reached towards offering outstanding levels of services through innovation, transparency and teamwork.
           We are proud to say that our services are considered to be the best.</p>

           <h1 className="bespoke">Right On Time</h1>

          <p className="bespoke-text">Place all your security worries behind you and take a sigh of relief because STN Security solutions can let you feel secure. 
            Our professional will be right on time whenever and wherever you will need it, even during emergencies.</p>
     </div>

     

    <div className='touch'>
      <h3 className='quote'>Needing A Quote</h3>
      <p className="quote-text">Contact our security experts now to discuss your security requirements and get a quote from us</p>
      <Link to="/contact" className='sp about'>
    <button className='so'>Get In Touch</button>
    </Link>
     
   
    </div>

    
     
    </div>

  )
}

export default About