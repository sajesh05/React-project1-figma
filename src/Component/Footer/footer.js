import React from 'react'
import './footer.css'
import footer1 from '../../Assets/Social Links (1).png'

function footer() {
  return (
    <div class="footer">
        <div class="hh"><h2>Lets Work Together</h2></div>
        <div class="flx1">
            <div class="flx2">
                <div class="p1">This is a template Figma file, turned into code using anima.Learn<br></br>more at animaapp .com This is a template Figma file, turned into <br></br>code using anima.Learn more at animaapp .com</div>
                <div class="icon"><img src={footer1}/></div>
            </div>
            <form>
                <input type="text" name="name" id="name" placeholder="Name"/><br></br><br></br>
                <input type="email" name="email" id="email" placeholder="Email"/><br></br>
                <button type="submit">Submit</button>
            </form>
        
    </div>
    </div>
  )
}

export default footer
