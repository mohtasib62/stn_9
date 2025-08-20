import React from 'react'
import img from './image/Screenshot 2025-02-02 180537.png'
import { Link } from 'react-router-dom'

function Business() {
  return (
    <div className='business'>
         <div className="ma">
            <h1>Business Development Executive (3543)</h1>
            <img src={img}  />
        </div>
        <div className="mq">
            <h2><b>Location: </b>London UK</h2>
            <h2><b>Type: </b>Full-Time</h2>
            <h2><b>Application Deadline: </b>13/02/25</h2>
            <h2><b>Salary: </b>£29,800 - £31,000 / PA</h2>

            <h1>About Us</h1>
            <h3>We are a private security company focused on innovation and excellence. As part of our growth strategy, we aspire to implement SAP or similar ERP systems in the near future. As we expand, we're looking for an Accounts Manager to help us maintain financial integrity and support our growth.</h3>

            <h1>Job Description</h1>
            <h2><b>• </b>Generate new business leads and manage existing client relationships </h2>
            <h2><b>• </b>Develop and implement sales and marketing strategies to drive revenue</h2>
            <h2><b>• </b>Analyze market trends and competitor activities to identify opportunities</h2>
            <h2><b>• </b>Coordinate with internal teams to ensure client satisfaction</h2>
            <h2><b>• </b>Provide timely and accurate reports to senior management</h2>

            <h1>Skills Required</h1>
            <h2><b>• </b>Strong communication and negotiation skills</h2>
            <h2><b>• </b>Ability to work in a fast-paced environment</h2>
            <h2><b>• </b>Experience in digital media marketing is a plus</h2>
            <h2><b>• </b>Team management and people management skills</h2>
            <h2><b>• </b>Analytical skills to evaluate market trends and customer needs</h2>

            <h1>Qualification</h1>
            <h2><b>• </b>Demonstrable experience in a marketing role is essential</h2>
            <h2><b>• </b>Minimum Bachelor's degree (preferably in Marketing or any other business-related field)</h2>

            <h1>How to Apply</h1>
            <h2>Please send your CV and cover letter to Info@stnsecurity.co.uk.</h2>
            
            <Link to="/three" className='about'>
            <h1 className='enp'>Enquire</h1>
            </Link>
        </div>
    </div>
  )
}

export default Business