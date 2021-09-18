/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";


{{/*Ref: https://codepen.io/GreenSock/pen/XWMPLQg*/}}
export default function Some() {  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
   

    let masks = gsap.utils.toArray(".img-mask");
    
    gsap.to(masks[1], {
      height: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: ".revealer",
        start: "top top",
        pin: true,
        end: "+=100%",
        scrub: 0.5
      }
    });
    
  }, []);
 


return (
    <>
  
<div> 



  <section className="revealer">
    <div className="img-mask"><img src="https://unsplash.it/800/450?image=766" /></div>
    <div className="img-mask"><img src="https://unsplash.it/800/450?image=1080" /></div>
    <div className="overlay">Image Reveal on Scroll</div>
  </section>
  <section className="revealers">
     <p> More content... </p> 
     </section>

     <style
      dangerouslySetInnerHTML={{
          __html: `
      
          .revealers {
            background-color: "navy;
          }
          body {
            background: black;
            color: white;
          }
          
          section {
            position: relative;
            height: 100vh;
            font-size: 50px;
            text-align: center;
            line-height: 100vh;
          }
          
          .img-mask {
            position: absolute;
            height: 100%;
            width: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
          .img-mask img {
            height: 100vh;
          }
          
          .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
          }
 
                   `
      }}
    />
    </div>
 </>
 )
}