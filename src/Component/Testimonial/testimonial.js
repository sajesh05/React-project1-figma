import React from 'react'
import './testimonial.css'
import testimonial1 from '../../Assets/Client Image (1).png'
import testimonial2 from '../../Assets/Stars (1).png'

function testimonial() {
    const nav=[{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },{
        name:"This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },]
  return (
    <div class="testimonial">
        <div class="grid01"><span>Testimonial</span></div>
        <div class="full">
        

               {
        nav.map((i) =>(
            <>
            <div class="box1">
            
            <div class="p1">{i.name}/</div>
            <div class="imgg">
            <div class="imgg1"><img src={i.name1}/></div>
            <div class="fx">
            <div class="imggg1"><img src={i.name2}/></div>
            <div class="h1">{i.name3}</div>
        <div class="h2">{i.name4}</div>
    </div>
    </div>


        </div>
        </>


            ))
    }
            {/* <div class="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div>


        </div>
        </div>
         
        <div class="box1">
            <div class="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div>


        </div></div>
         
        <div class="box1">
            <div class="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div>


        </div></div>
         
        <div class="box1">
            <div class="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div>


        </div></div>
         
        <div class="box1">
            <div class="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div>


        </div></div>
         
        <div class="box1">
            <div class="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div class="imgg">
            <div class="imgg1"><img src="./images/Client Image.png"/></div>
            <div class="fx">
            <div class="imggg1"><img src="./images/Stars.png"/></div>
            <div class="h1">Gemma Nolan</div>
        <div class="h2">Google</div>
    </div></div> */}

        </div>
        </div>

    
  )
}

export default testimonial




