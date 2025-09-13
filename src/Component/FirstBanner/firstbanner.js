import React from 'react'
import './firstbanner.css'
import firstbannerimage from '../../Assets/HeaderImage 1.png'

function Firstbanner({setModal}) {
  return (
   <div className="banner">
        <div className="banner-left">
        <div className="banner-left1">Branding | Image making</div>
        <div className="banner-left2">Visual Designer</div>
        <div className="banner-left3">This is a templete file, turned into code using Anima.<br/> Learn more at AnimaApp.com</div>
        <button type="submit" onClick={() =>setModal(true)}>Contact</button>
        </div>
        <div className="banner-right">
        <img src={firstbannerimage} alt='banner'/>
        </div>
    </div>
  )
}

export default Firstbanner
