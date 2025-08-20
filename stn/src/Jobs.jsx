import React from 'react'
import './Jobs.css'
import img from './image/Screenshot 2025-02-01 123156.png'
import { Link } from 'react-router-dom'

function Jobs() {
  return (
    <div className='jobs'>
      <h1 className="aq">STN Security Vacancies</h1>
      <h1 className='qw'>Click on a job title below to learn more about our vaccacine</h1>
        
        <Link to="/manager" className='about'>
        <div className="wr">
          <h1>Accounts Manager - Finance (3538)</h1>
          <img src={img} />
        </div>
       </Link>
         
        <Link to="/business" className='about'>
        <div className="wr1">
          <h1>Business Development Executive (3543)</h1>
          <img src={img} />
        </div>
        </Link>
        
      <Link to="/develop" className='about'>
        <div className="wr2">
          <h1>Operations Manager (Security Services) - (3319)</h1>
          <img src={img} />
        </div>
        </Link>
    </div>
  )
}

export default Jobs