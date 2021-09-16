 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/eYpOZvX */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

 
    gsap.set(".massiveImage", {backgroundImage: `url(https://source.unsplash.com/random/${innerWidth * 3}x${innerHeight})`})
    
    gsap.to(".massiveImage", {
      xPercent: -100, 
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".massiveImage",
        start: "top top",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    
    
}, []);


  return (
    <>
<div> 
<h1 className="header-section">Scroll down to see a horizontal scroll section</h1>
  
<div className="massiveImage"></div>

<h1 className="header-section">Now were back to regular scrolling</h1>




 

     <style
      dangerouslySetInnerHTML={{
          __html: `
          .massiveImage {
            height: 100vh;
            width: 400vw;
            background-size: cover;
            background-position: center;
          }
    
          
          
                   `
      }}
    />
    </div>
 </>
 )
}