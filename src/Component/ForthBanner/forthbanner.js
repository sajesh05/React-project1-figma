import React from 'react'
import './forthbanner.css'
import forthbanner1 from '../../Assets/Image (9).png'
import forthbanner2 from '../../Assets/Image (10).png'
import forthbanner3 from '../../Assets/Image (11).png'
import forthbanner4 from '../../Assets/Image (12).png'
import forthbanner5 from '../../Assets/Image (13).png'
import forthbanner6 from '../../Assets/Image (14).png'

function forthbanner() {
    const nav=[{
        name:forthbanner1,
        name1:"Project title",
        name2:"UI,Art Direction"
    },{ 
        name:forthbanner2,
        name1:"Project title",
        name2:"UI,Art Direction"
    },{ 
        name:forthbanner3,
        name1:"Project title",
        name2:"UI,Art Direction"
    },{ 
        name:forthbanner4,
        name1:"Project title",
        name2:"UI,Art Direction"
    },{ 
        name:forthbanner5,
        name1:"Project title",
        name2:"UI,Art Direction"
    },{ 
        name:forthbanner6,
        name1:"Project title",
        name2:"UI,Art Direction"
    },]
  return (
   <div class="maingrid">

        <div class="main"><span>Letest Work</span></div>

        <div class="grid">

             {
        nav.map((i) =>(
            
               <div class="grid12"><img src={i.name} />
            <div class="grid22"><span>{i.name1}</span></div>
            <div class="grid32">{i.name2}</div></div>


            ))
    }
            
        {/* <div class="grid12"><img src="./images/Image (1).png"/>
        <div class="grid22">Project title</div>
        <div class="grid32">UI,Art Direction</div> 
    </div>

     
        <div class="grid13"><img src="./images/Image (2).png"/>
        <div class="grid23">Project title</div>
        <div class="grid33">UI,Art Direction</div>
    </div>

     
        <div class="grid14"><img src="./images/Image (3).png"/>
        <div class="grid24">Project title</div>
        <div class="grid34">UI,Art Direction</div>
</div>

    
        <div class="grid15"><img src="./images/Image (4).png"/>
        <div class="grid25">Project title</div>
        <div class="grid35">UI,Art Direction</div>
 </div>

     
        <div class="grid16"><img src="./images/Image (5).png"/>
        <div class="grid26">Project title</div>
        <div class="grid36">UI,Art Direction</div>
        

    </div>

    
        <div class="grid17"><img src="./images/Image (6).png"/>
        <div class="grid27">Project title</div>
        <div class="grid37">UI,Art Direction</div> 
        
    </div> */}

    </div>
    </div>
  )
}

export default forthbanner
