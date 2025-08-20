import React from 'react'
import './recruitment.css'
import { Link } from 'react-router-dom'

function Recruitment() {
  return (
    <div className='recruitment'>
      
      <h1 className="hame">
        Recruitment
      </h1>

      <p className='hamne'>If you are interested in pursuing a career within our dynamic and rapidly evolving security company, we invite you to provide </p>
      <p className="hamna">your details below. Should a vacancy arise, we shall reach out to you for further communication.</p>
   
    <div className='forms-one'>

     <h2>Contact details</h2>
     <br />
    <hr />
    <br />
     <div className="flak">
      <div className="flaki">
      <label htmlFor="" >First Name:</label>
      <input type="text" className='lali' />  
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
        <label htmlFor="">Your Address:</label>
        <input type="text" className='lalo'/>
        </div>
    </div>
    <hr />
    <div className="qi">
        <div className="qo">
        <label htmlFor="">Postcode:</label>
        <input type='text' className='lali'/>
        </div>
        <div className="qe">
        <label htmlFor="">Your phone number:</label>
        <input type='text' className='lali'/>
        </div>
    </div>
    <hr />
    <hr />
    <div className="pi">
        <h2>Please select which applies to you</h2>
        <div className="pe">
        
            <input type="checkbox" className='kafe'/>
            <label htmlFor="">Eligible to work in uk</label>
    
        
        <input type="checkbox" className='kafe'/>
        <label htmlFor="">Full driving license</label>
    
        
        <input type="checkbox"className='kafe'/>
        <label htmlFor="">Own transport</label>

        </div>
    </div>
 <hr />
    <div className="jobis">
      <h2>Select the job(s) you are intrested in</h2>
      <div className="jobes">
      <input type="checkbox"className='kafe'/>
      <label htmlFor="">Mobile response</label>

      <input type="checkbox"className='kafe'/>
        <label htmlFor="">Static Guarding</label>

        <input type="checkbox"className='kafe'/>
        <label htmlFor="">Retail security</label>

        <input type="checkbox"className='kafe'/>
        <label htmlFor="">Dog handling</label>
      </div>
    </div>
  <hr />
     <Link className='about' to="/submit">
     <button className='boo'>Submit</button>
     </Link>
    </div>
    
    </div>
  )
}

export default Recruitment