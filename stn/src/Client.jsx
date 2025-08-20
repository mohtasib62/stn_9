import React from 'react'
import './Client.css'
import img from './image/about-us.jpg'
import img1 from './image/event.jpg'
import img2 from './image/manned.jpg'
import img3 from './image/support.jpg'
import { Link } from 'react-router-dom'

function Client() {
  return (
    <div className='client'>
       <h1 className='client-our'>Our Security Services</h1>
       <p className="client-stn">STN offer a range of Services, including Door Supervisors,
         Event Security, Manned Security and Support Security.
         With our SIA approved status, you can trust us to meet all your Security needs.
         </p>
         <div className="banner">
                  <div className="imgtext">
                   <img src={img} className="img" />
                  </div>
                  <div className="text">
                   <span className='our-mission'>Door Supervisors</span>
                   <p className="p-one">We are capable of offering superb, highly qualified door supervisors to stand and guard your premises. We keep a highly skilled team of reserve Door Supervisors on hand to provide cover on short notice and to support new contracts where it’s needed, allowing us to start with experience and stability.</p>
                   <p className="p-one">When clients approach a licensed venue or event, we understand that Door Supervisors are frequently their first point of contact. As a result, they often establish the tone for the evening before the customer even enters. To reflect this, we have a uniform dress code and a code of behavior that all of our Door Supervision staff must follow at all times to ensure that the client is adequately represented.</p>
                   <p className="p-one">All of our Door Supervision employees are licensed and have received basic training in accordance with industry norms. Some of our employees have extra certifications, such as First Aid, Physical Intervention, and more.</p>
                  </div>
                 </div>

                 <div className="banner">
                  <div className="text">
                   <span className='our-mission'>Events Security</span>
                   <p className="p-one">Our experienced specialists are equipped with the required training to handle mobs and other circumstances that could potentially cause injury to people or property damage during public events. We provide unique and integrated security solutions to all private/corporate or council financed events, with highly trained and licensed event officers and stewards staff.</p>
                   <p className="p-one">STN Security provides event security for various events, including music festivals, sporting events, and corporate celebrations. Our event security teams are well-versed in crowd control, vehicle entry/exit points, parking management, and dispute resolution. Security is required at all organized events, regardless of size, if only for health and safety reasons. Our event management team has a wealth of experience and can provide complete event support, including organization and planning, security surveys, and assignment instructions. Every event is unique.</p>
                   <p className="p-one">As a result, we will never recommend an off-the-shelf solution to you. The best approach to ensure that property and attendees are appropriately secured and that the event goes smoothly from start to finish is to use a custom event security solution.</p>
                  </div>
                  <div className="imgtext">
                   <img src={img1} className="img" />
                  </div>
                 </div>

                 <div className="banner">
                  <div className="imgtext">
                   <img src={img2} className="img" />
                  </div>
                  <div className="text">
                   <span className='our-mission'>Manned Security</span>
                   <p className="p1">Our experienced personnel are ready to protect your property. We are here to provide physical defense for your well-being, whether it is in a complex, business area, office, or any retail-based location. Most of the buildings where services are transferred already have an access control system and an intruder alarm, and some have even updated to remote CCTV surveillance.</p>
                   <p className="p1">Even if security systems must be purchased and installed, the annual savings compared to an ongoing guarding yearly service will be significant in the first year. It may be more expensive as a technological system, and systems may be defective. Manned security guarding service is suitable for a regulated setting where a hands-on approach is more efficient. Blind spots in CCTV will exist, and a criminal may choose to exploit them to get past the system.</p>
                   <p className="p1">Having security agents roaming your premises means you’re taking a proactive approach to your company’s security and reducing the chances of an intruder being missed. The mere presence of a skilled specialist on-site can deter criminal activity. When you see a security officer, it means you’re serious about keeping your business safe. It demonstrates to a possible intruder that you’ve gone above and beyond in preventing crime and theft, increasing your chances of getting detected.</p>
                  </div>
                 </div>

                 <div className="banner">
                  <div className="text">
                   <span className='our-mission'>Support Security</span>
                   <p className="p2" >Our company uses security services and has access to consultants and technical specialists who provide us with the most up-to-date information and skills.</p>
                   <p className="p2">We also aid in reducing the time it takes to detect and respond to threats. You’ll also be better able to adapt to shifting business goals by decreasing complexity</p>
                  </div>
                  <div className="imgtext">
                   <img src={img3} className="img" />
                  </div>

                 
    </div>
       
    <div className='touch'>
<h3 className='quote'>Needing A Quote</h3>
<p className="quote-text">Contact our security experts now to discuss your security requirements and get a quote from us</p>
<Link to="/contact" className='sp about'>
<button className='se'>Get In Touch</button>
</Link>
</div>

     </div>
  )
}

export default Client