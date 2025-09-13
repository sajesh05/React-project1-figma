import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import the icons you want
import {  faXmark} from '@fortawesome/free-solid-svg-icons'



function Contact() {
  const[visible,setVisible]=useState(true)
  
  return (
    <div>
      {visible &&(
  
    
    <div className='contact'>
         <div>
          
          
          {/* Cross (X mark) */}
          <div className='icon1'onClick={() => setVisible(false)} 
          style={{ cursor: 'pointer' }} ><FontAwesomeIcon icon={faXmark} /></div>
          

            
        </div>
      <div className='heading'><h2>Contact Form</h2></div>
     

      <form>
  
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="number" name="phno" id="phno" placeholder="Phone Number"/>
        <input type='text' name='msg' id='msg' placeholder='Message'/>
        <button type="submit" >Submit</button>
      </form>
    </div>
    )}
      </div>

  )
}

export default Contact
