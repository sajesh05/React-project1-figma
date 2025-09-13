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
  <div class="flex">

    {
        nav.map((i) =>(
            <div class="flex1">
               <div class="flex12"><img src={i.name} />
            <div class="flex22"><h2>{i.name1}</h2></div>
            <div class="flex32">{i.name2}</div></div>
           </div>


            ))
    }
        {/* <div class="flex1">
            <div class="flex12"><img src='C:\Users\USER\Desktop\hari\figma-html-css\images\Skills Card Icon (2).png'/>
            <div class="flex22"><h2>Product Design</h2></div>
            <div class="flex32">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
        </div>
        <div class="flex2">
            <div class="flex13"><img src="C:\Users\USER\Desktop\hari\figma-html-css\images\Skills Card Icon (3).png"/>
            <div class="flex23"><h2>Visual Design</h2></div>
            <div class="flex33">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
        </div>
        <div class="flex3">
            <div class="flex14"><img src='C:\Users\USER\Desktop\hari\figma-html-css\images\Rectangle 25.png'/>
    
            <div class="flex24"><h2>Art Direction</h2></div>
            <div class="flex34">This is a template Figma file, turned into code using anima.Learn more at animaapp .com</div></div>
            
        </div> */}
    </div>

  )
}

export default thirdbanner
