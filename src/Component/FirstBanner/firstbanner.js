import React from 'react'
import './firstbanner.css'
import firstbannerimage from '../../Assets/HeaderImage 1.png'

function firstbanner({setModal}) {
  return (
   <div class="banner">
        <div class="banner-left">
        <div class="banner-left1">Branding | Image making</div>
        <div class="banner-left2">Visual Designer</div>
        <div class="banner-left3">This is a templete file, turned into code using Anima.<br></br> Learn more at AnimaApp.com</div>
        <button type="submit" onClick={() =>setModal(true)}>Contact</button>
        </div>
        <div class="banner-right">
        <img src={firstbannerimage} />
        </div>
    </div>
  )
}

export default firstbanner
