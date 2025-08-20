import React from 'react'
import { Link } from 'react-router-dom'
import img from './image/Screenshot 2025-02-02 180537.png'

function Develop() {
  return (
    <div className='develop'>
       <div className="ma">
            <h1>Business Development Executive (3543)</h1>
            <img src={img}  />
        </div>
        <div className="mq">
            <h2><b>Location: </b>London UK</h2>
            <h2><b>Type: </b>Full-Time</h2>
            <h2><b>Application Deadline: </b>13/02/25</h2>
            <h2><b>Salary: </b>£37,000 - £40,000 / PA</h2>

            <h1>About Us</h1>
            <h3>STN Security Services provides comprehensive security solutions, including door supervision, event security, manned guarding, and support security. We are committed to delivering high-quality security services tailored to our clients' needs.</h3>

            <h1>Job Description</h1>
             <h3>We are seeking dedicated Operations Managers (Security Services) to join our dynamic team based in London. The successful candidates will be responsible for ensuring the safety and security of our clients' premises, assets, and personnel.</h3>

            <h1>Key Responsibility</h1>
            <h3>Conduct thorough security assessments and risk analysis.</h3>
            <h3>Manage crime scenes and coordinate with law enforcement when necessary.</h3>
            <h3>Develop and implement security protocols and emergency response plans.</h3>
            <h3>Oversee daily operations and ensure compliance with all security regulations.</h3>
            <h3>Provide detailed reports on incidents and security breaches.</h3>
            <h3>Manage and lead a team of security personnel, ensuring they are trained and perform their duties effectively.</h3>

            <h1>Qualification</h1>
            <h3>Strong leadership and communication skills.</h3>
            <h3>Ability to handle high-pressure situations with calm and efficiency.</h3>
            <h3>Excellent analytical and problem-solving abilities.</h3>
            <h3>Relevant certifications such as First Aid are a plus.</h3>

            <h1>Benefits</h1>
            <h3>Competitive salary and benefits package.</h3>
            <h3>Opportunities for professional growth and development.</h3>
            <h3>A supportive and inclusive work environment.</h3>

            <h1>Application Process</h1>
            <h3>To apply, please visit our recruitment page and complete the application form. Ensure to include your contact details and specify the position you are applying for.</h3>

            <h1>Contact Us</h1>
            <h3>For more information about STN Security Services and our current job openings, visit our website or contact us at:</h3>
            <h3>Email: info@stnsecurity.co.uk (CV and cover letter)</h3>
            <h3>Join STN Security Services and be part of a team dedicated to providing top-notch security solutions!</h3>
            
            <Link to="/three" className='about'>
            <h1 className='enp'>Enquire</h1>
            </Link>
        </div>
    </div>
  )
}

export default Develop