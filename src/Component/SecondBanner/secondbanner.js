import React from 'react'
import './secondbanner.css'
import secondBanner1 from '../../Assets/Group 5334 (1).svg'
import secondBanner2 from '../../Assets/image 1 (Traced).png'
import secondBanner3 from '../../Assets/image 5 (Traced).png'
import secondBanner4 from '../../Assets/image 2 (Traced).png'
import secondBanner5 from '../../Assets/image 7 (Traced).png'



function secondbanner() {
  const nav=[{
    name:secondBanner1
  },{
    name:secondBanner2
  },{
    name:secondBanner3
  },{
    name:secondBanner4
  },{
    name:secondBanner5
  },]
  return (
   <div className="logo">

    {
      nav.map((i) =>(
               <div className="img1"><img src={i.name} alt='banner1'/></div>


            ))
    }


        {/* <div className="img1"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\Group 5334 (3).png"/></div>
        <div className="img2"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\image 1 (Traced) (3).png"/></div>
        <div className="img3"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\image 5 (Traced) (1).png"/></div>
        <div className="img4"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\image 2 (Traced) (1).png"/></div>
        <div className="img5"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\image 7 (Traced) (1).png"/></div> */}
    </div>
  )
}

export default secondbanner
