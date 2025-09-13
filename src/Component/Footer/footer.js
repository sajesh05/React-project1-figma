import React from 'react'
import './footer.css'
import footer1 from '../../Assets/Social Links (1).png'

function footer() {
  return (
    <div className="footer">
        <div className="hh"><h2>Lets Work Together</h2></div>
        <div className="flx1">
            <div className="flx2">
                <div className="p1">This is a template Figma file, turned into code using anima.Learn<br/>more at animaapp .com This is a template Figma file, turned into <br/>code using anima.Learn more at animaapp .com</div>
                <div className="icon"><img src={footer1} alt='banner4'/></div>
            </div>
            <form>
                <input type="text" name="name" id="name" placeholder="Name"/><br/><br/>
                <input type="email" name="email" id="email" placeholder="Email"/><br/>
                <button type="submit">Submit</button>
            </form>
        
    </div>
    </div>
  )
}

export default footer
