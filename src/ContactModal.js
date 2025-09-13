import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import the icons you want
import {  faXmark} from '@fortawesome/free-solid-svg-icons'


function ContactModal({setModal}) {
  return (
    

      
     
    <div className='contacts'>
         <div>
          
          {/* Cross (X mark) */}
          <div className='icon1' onClick={() => setModal(false)} 
          style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faXmark}  /></div>
          

            
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
  )
}

  


export default ContactModal
