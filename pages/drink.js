 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/wvKwZXG */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var frame_count  = 9,
        offset_value = 100;
    
    gsap.to(".viewer", {
      backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "+=" + (frame_count * offset_value),
        pin: true,
        scrub: true
      }
    });
 
}, []);
  return (
    <>
<header className="header section">
  <div className="center">&darr;</div>
</header>

<section className="scene section" id="sticky">
  <div className="viewer"></div>
</section>

<section className="section">
  <div className="center">End</div>
</section>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
         
  
          
          .section {
            height: 25%;
            background: #293744;
            color: #899eb5;
            transition: 1s ease;
          }
          
          .scene {
            height: 100%;
            width: 100%;
            background: #EAEAEA;
            transition: 1s ease;

          }
          
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          
          .viewer {
            height: 100%;
            margin-left: auto;
            margin-right: auto;
            max-width: 200px;
            width: 100%;
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/doodle-sprite.png);
            background-repeat: no-repeat;
            background-position: 0 50%;
            height: 470px;
 
          }
          
          
          
     
                   `
      }}
    />
 </>
 )
}