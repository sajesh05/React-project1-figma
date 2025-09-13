import React from 'react'
import './thirdbanner.css'
import thirdbanner1 from '../../Assets/Skills Card Icon.png'
import thirdbanner2 from '../../Assets/Skills Card Icon (1).png'
import thirdbanner3 from '../../Assets/Skills Card Icon (2).png'

function thirdbanner() {
    const nav=[{
        name:thirdbanner1,
         name1:"Product Design",
        name2:"This is a template Figma file, turned into code using anima.Learn more at animaapp .com"
    },{
        name:thirdbanner2,
         name1:"Product Design",
        name2:"This is a template Figma file, turned into code using anima.Learn more at animaapp .com"
    },{
        name:thirdbanner3,
        name1:"Product Design",
        name2:"This is a template Figma file, turned into code using anima.Learn more at animaapp .com"
    },]
  return (
  <div className="flex">

    {
        nav.map((i) =>(
            <div className="flex1">
               <div className="flex12"><img src={i.name} alt='banner5' />
            <div className="flex22"><h2>{i.name1}</h2></div>
            <div className="flex32">{i.name2}</div></div>
           </div>


            ))
    }
        {/* <div className="flex1">
            <div className="flex12"><img src='C:\Users\USER\Desktop\hari\figma-html-css\images\Skills Card Icon (2).png'/>
            <div className="flex22"><h2>Product Design</h2></div>
            <div className="flex32">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
        </div>
        <div className="flex2">
            <div className="flex13"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\Skills Card Icon (3).png"/>
            <div className="flex23"><h2>Visual Design</h2></div>
            <div className="flex33">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
        </div>
        <div className="flex3">
            <div className="flex14"><img src='C:\Users\USER\Desktop\hari\figma-html-css\images\Rectangle 25.png'/>
    
            <div className="flex24"><h2>Art Direction</h2></div>
            <div className="flex34">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
            
        </div> */}
    </div>

  )
}

export default thirdbanner
