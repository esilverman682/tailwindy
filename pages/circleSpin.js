/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EasePack from 'gsap/dist/EasePack';
 
{/*Reference: https://codepen.io/GreenSock/pen/XWRzjqG */}
 export default function Some() {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.two, .three, .four', {
      opacity: 0,
    })
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".PinIci",
        start: "top 15%",
        //end: "bottom 85%",
        end: () => "+=" + document.querySelector(".PinIci").offsetWidth,
        markers: true,
        toggleActions: "restart pause reverse pause",
        scrub: true,
        pin: ".PinIci",
        anticipatePin: 1
      }
    });
    tl.to(".Cercle_Presentation", {
      x: 0,
      ease: "none",
      rotation: -270,
      duration: 3
    })
    .set('.one', {
      opacity: 0
    },1)
    .set('.two', {
      opacity: 1
    },1)
    .set('.two', {
      opacity: 0
    },2)
    .set('.three', {
      opacity: 1
    },2)
    .set('.three', {
      opacity: 0
    },3)
    .set('.four', {
      opacity: 1
    },3)
    
    
    
    
}, []);
  return (
    <>
 
<div className="ContenuSite">
Contenu avant
</div> 
  
    <table className="PinIci" style={{borderCollapse: "collapse;", width: "100%;", border: "2px solid blue;"}}>
<tbody>
<tr>
<td style={{width: "30%;"}}>
  
  <div className="Cercle_Presentation"> 
        <img className="IMG_Roue Top"
         src="https://hytara.fr/Files/Image/logo-h-Hytara.png"
         alt="Logo Hytara" />
    
         <img className="IMG_Roue Left"
         src="https://hytara.fr/Files/Image/logo-h-Hytara.png"
         alt="Logo Hytara" />
    
         <img className="IMG_Roue Right"
         src="https://hytara.fr/Files/Image/logo-h-Hytara.png"
         alt="Logo Hytara" />
    
         <img className="IMG_Roue Bottom"
         src="https://hytara.fr/Files/Image/logo-h-Hytara.png"
         alt="Logo Hytara"  />

        <div id="motion-demo"></div>
        <svg viewBox="-3 -3 106 106">
      
    
       
          <circle cx="50" cy="50" r="50" 
            strokeDasharray="10.71, 5" 
            fill="transparent"
            stroke="black" 
            strokeWidth="2" />
        </svg>
    </div>
  
</td>
<td style={{width: "70%;"}}>
  
  <section className="Desc_Presentation one">
      First IMG DESCRIPTION
    </section>
    <section className="Desc_Presentation two">
      IMG 2 DESCRIPTION
    </section>
    <section className="Desc_Presentation three">
      IMG 3 DESCRIPTION
    </section>
    <section className="Desc_Presentation four">
      IMG 4 DESCRIPTION
    </section>
  
</td>
</tr>
</tbody>
</table>
  
  
 <div className="ContenuSite">
Contenu Après
</div> 
  
 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            background:lightgrey;
          }
          
          .ContenuSite {
            width: 100%;
            height: 800px;
            font-size:120px;
            text-align: center;
            border: 2px solid red;
            margin: 50px 0;
          }
          
          .Cercle_Presentation {
            width:100%;
            border: 2px solid red;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
          }
          
          .Desc_Presentation {
            width: 90%;
            height: auto;
            text-align:center;
            border: 2px solid red;
            display: inline-block;
            vertical-align: top;
            float: right;
          }
          
          svg {
            --n:4; /* number of dashes*/
            --d:20;  /* distance */
            width:500px;
          }
          
          svg circle {
             stroke-dasharray:calc((2*3.14*50)/var(--n) - var(--d)), var(--d);
            stroke-dashoffset: -10;
          }
          
          .IMG_Roue {
            width: 50px;
            position: absolute;
          }
          
          .IMG_Roue.Top {
            left: 50%;
            top: -15px;
            transform:translateX(-50%);
          }
          
          .IMG_Roue.Left {
            left: 25px;
            top: 50%;
            transform:translateY(-50%) rotate(-90deg); 
          }
          
          .IMG_Roue.Right {
            right: 5px;
            top: 43%;
            transform:translateX(-50%) rotate(90deg); 
          }
          
          .IMG_Roue.Bottom {
            left: 45%;
            bottom: -50px;
            transform:translateY(-50%) rotate(180deg); 
          }
          
          .Cercle_Presentation:hover img {
              offset-distance: 100%;
          }
          
          .Cercle_Presentation:hover circle {
            /* stroke: red; */
          }
     
                   `
      }}
    />
 </>
 )
}