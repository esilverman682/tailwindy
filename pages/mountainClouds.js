import  {useEffect } from "react";
import {gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

 import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
//import HappyText from "./happyText";

export default function Mask() {
 
  gsap.registerPlugin(ScrollToPlugin)
 gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    
    var select = document.querySelector.bind(document);

    // This function will return a node-list of elements
    // It's not used in this example, but I included it in case
    // you were wondering how to select more than one element
    var selectAll = document.querySelectorAll.bind(document);
    
    // Select our elements
    var banner = select("#arrowBtn");

    gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
    gsap.set('.scrollDist', {width:'100%', height:'200%'})
    gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)
       // Use our elements with an Event Listener OrIGNAL CODE https://codepen.io/creativeocean/pen/qBbBLyB
       // $('#arrowBtn').on('mouseenter', (e)=>{  REPLACED BY    banner.addEventListener("mouseenter", function() { 
      banner.addEventListener("mouseenter", function() { 
        gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(4)', overwrite:'auto'}); })

      banner.addEventListener("mouseleave", function() {  
        gsap.to('.arrow', {y:0, duration:0.5, ease:'power4.out', overwrite:'auto'}); })
      banner.addEventListener("click", function() {   
        gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
 
   //     gsap.to(window, {
     //     duration: 2, 
       //   scrollTo:{y: 300, autoKill: true, onAutoKill: myAutoKillFunction}});

 //       function myAutoKillFunction() {
   //      alert("autoKill");
     //   }
  }, []); 

  return (
    <div>
<div className="scrollDist"></div>
<div className="main">
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <mask id="m">
      <g className="cloud1">
        <rect fill="#fff" width="100%" height="801" y="799" />
        <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
      </g>
    </mask>
    
    <image  alt="" className="sky" 
    xlinkHref="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
    <image  alt="" className="mountBg" 
    xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
    <image  alt="" className="mountMg"  
    xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
    <image  alt="" className="cloud2" 
    xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
    <image alt=""  className="mountFg" 
    xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
    <image  alt="" className="cloud1" 
    xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
    <image  alt="" className="cloud3" 
    xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
    
    <text fill="#fff" x="350" y="200">EXPLORE</text>

    <polyline className="arrow" 
    fill="#fff" 
    points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
    
    <g mask="url(#m)">
      <rect fill="#fff" width="100%" height="100%" />      
      <text x="350" y="200" fill="#162a43">FURTHER</text>
    </g>
    
    <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" 
      style={{
        cursor:"pointer"
      }}/>
  </svg>
</div>

          <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
 
         html, body {
           
           
          }
          .main {
            background:#ddd;
            font-family: 'Lato', sans-serif;
            font-size:99px;
            text-align:center;
            height:100%; width:100%;
          }

          div.main, div.scrollDist {
            position:absolute;
          }
          

                   `
      }}
    />




    
    </div>
  );
}





 
