import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

function header() {
const nav=[{
  name:"About",
  value:'/about'
},{
  name:"Work",
  value:"/work"
},{
  name:"Contact",
  value:"/contact"
}]




  return (
    <div className="header">
        < NavLink  to={'/'} className="hl">Logo</NavLink>
        <div className="hr">

          {
            nav.map((i) =>(
               <NavLink to={i.value} className="hrr">{i.name}</NavLink>


            ))
          }
        {/* <div>About</div>
        <div>Work</div>
        <div>Contact</div> */}
        </div>
       
    </div>
  )
}

export default header
