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
        name:"This is a template Figma file,<br/> turned into code using anima.<br/>Learn more at animaapp .com",
        name1:testimonial1,
        name2:testimonial2,
        name3:"Gemma Nolan",
        name4:"Google"
    },]
  return (
    <div className="testimonial">
        <div className="grid01"><span>Testimonial</span></div>
        <div className="full">
        

               {
        nav.map((i) =>(
            <>
            <div className="box1">
            
            <div className="p1">{i.name}/</div>
            <div className="imgg">
            <div className="imgg1"><img src={i.name1} alt='banner2'/></div>
            <div className="fx">
            <div className="imggg1"><img src={i.name2} alt='banner3'/></div>
            <div className="h1">{i.name3}</div>
        <div className="h2">{i.name4}</div>
    </div>
    </div>


        </div>
        </>


            ))
    }
            {/* <div className="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div>


        </div>
        </div>
         
        <div className="box1">
            <div className="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div>


        </div></div>
         
        <div className="box1">
            <div className="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div>


        </div></div>
         
        <div className="box1">
            <div className="p1">This is a template Figma file,<br> </br>turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div>


        </div></div>
         
        <div className="box1">
            <div className="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div>


        </div></div>
         
        <div className="box1">
            <div className="p1">This is a template Figma file,<br></br> turned into code using anima.<br></br>Learn more at animaapp .com</div>
            <div className="imgg">
            <div className="imgg1"><img src="./images/Client Image.png"/></div>
            <div className="fx">
            <div className="imggg1"><img src="./images/Stars.png"/></div>
            <div className="h1">Gemma Nolan</div>
        <div className="h2">Google</div>
    </div></div> */}

        </div>
        </div>

    
  )
}

export default testimonial




