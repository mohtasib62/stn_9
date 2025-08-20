import React from 'react'
import './Manager.css'
import img from './image/Screenshot 2025-02-02 180537.png'
import { Link } from 'react-router-dom'

function Manager() {
  return (
    <div className='manager'>
        <div className="ma">
            <h1>Accounts Manager - Finance (3538)</h1>
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
            <h2><b>• </b>Oversee and manage the general accounting functions, including overseeing accounts, compliance, and credit contron. </h2>
            <h2><b>• </b>Responsible for risk management and budget planning</h2>
            <h2><b>• </b>Ensure the integrity of all financial data, bookkeeping etc</h2>
            <h2><b>• </b>Work closely with management and coworkers and doing performing some administrative tasks as well</h2>

            <h1>Skills Required</h1>
            <h2><b>• </b>7-8 years of experience in accounting and financial management</h2>
            <h2><b>• </b>Good understanding of SAP or similar ERP systems</h2>
            <h2><b>• </b>Excellent problem-solving, analytical, and communication skills</h2>
            <h2><b>• </b>Proven track record of ethical work and maintaining financial data integrity</h2>
            <h2><b>• </b>Risk Management: Ability to identify and manage financial risks</h2>
            <h2><b>• </b>Budget Planning: Experience in creating and overseeing budgets</h2>
            <h2><b>• </b>Integrated Financial Management: Understanding of integrated financial systems</h2>
            <h2><b>• </b>CRM: Customer Relationship Management skills</h2>
            <h2><b>• </b>Supply Chain Management: Experience in managing or overseeing supply chains</h2>
            <Link to="/account" className='about'>
            <h1 className='enp'>Enquire</h1>
            </Link>
        </div>
    </div>
  )
}

export default Manager