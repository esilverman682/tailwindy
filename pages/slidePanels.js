 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/eYpGLYL */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ease: "none", duration: 2});
    
    // create a sequence that moves 3 of the panels in from different directions 
    const tl = gsap.timeline();
    tl.from(".orange", {xPercent: -100})
      .from(".purple", {xPercent: 100})
      .from(".green", {yPercent: -100});
    
    // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=4000", 
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
    

}, []);


  return (
    <>
<div>
<div className="description panel blue">
    <div><h1>Slide-in panels</h1>
      <p>A simple animation linked to a ScrollTrigger with <code>scrub: true</code> creates a nifty effect.</p>
      <div className="scroll-down">Scroll down<div className="arrow"></div></div>
    </div>
  </div>

<div id="container">
  <section className="panel bg-red-900	">
    ONE
  </section>
  <section className="panel bg-yellow-400	orange">
    TWO
  </section>
  <section className="panel bg-blue-600 purple">
    THREE
  </section>
  <section className="panel bg-green-700	green">
    FOUR
  </section>

</div>
 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `

          section {
            background-color: blue;
          }
          .panel {
            position: absolute;
            background-color: red;
      
          }
          
          #container {
            width: 100%;
            height: 3000px; 
            position: relative;
            overflow: hidden;
          }
          
          .panel.description {
            position: relative;
          }

          
                   `
      }}
    />
    </div>
 </>
 )
}