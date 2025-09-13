import React, { useState } from 'react'
import Header from '../Component/header/header'
import FirstBanner from '../Component/FirstBanner/firstbanner'
import SecondBanner from '../Component/SecondBanner/secondbanner'
import ThirdBanner from '../Component/ThirdBanner/thirdbanner'
import ForthBanner from '../Component/ForthBanner/forthbanner'
import Testimonial from '../Component/Testimonial/testimonial'
import Footer from '../Component/Footer/footer'
import ContactModal from '../ContactModal'



function Home() {
  const[modal,setModal] =useState(false)
  return (
    <div>
   {modal &&<ContactModal setModal={setModal}/>}
    <FirstBanner setModal={setModal}/>
    <SecondBanner/>
    <ThirdBanner/>
    <ForthBanner/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default Home
