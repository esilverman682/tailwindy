/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/vYmzGWV */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
 
    let mapRange;
    let ease = gsap.parseEase("slow (0.7, 0.7, false)");
    let clipRight = document.querySelector('.clip.right');
    
    onResize();
    
    window.addEventListener("resize", onResize);
    
    const cursor = function() {
      // special thanks to Blake Bowen for most of the cursor code.
      gsap.set(".cursor", {xPercent: -50, yPercent: -50});
    
      const cursor = document.querySelector(".cursor");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;
    
      const xSet = gsap.quickSetter(cursor, "x", "px");
      const ySet = gsap.quickSetter(cursor, "y", "px");
    
      window.addEventListener("mousemove", e => {    
        mouse.x = e.x;
        mouse.y = e.y;  
      });
    
      gsap.ticker.add(() => {
    
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }
    
    const landingVideos = function() {
      window.addEventListener(document.body.onpointermove ? "pointermove" : "mousemove", (event) => {  
        const posPercent = mapRange(event.clientX);
    
        gsap.to(clipRight, { 
          clipPath: "polygon(" + posPercent + "% 0%, 100% 0%, 100% 100%, " + posPercent  + "% 100%)",
          overwrite: true,
          ease,
          duration: 1,
        });
      });
    }
    
    function onResize() {
      mapRange = gsap.utils.mapRange(0, window.innerWidth, 100, 0);
    }
    
    cursor();
    landingVideos();
}, []);
  return (
    <>
<div className="cursor"></div>

 <section className="hero">
  
  <div className="clip left"> 
    <h2 className="title">Section One</h2>  
    <div className="circle">
      <video playsinline="" loop="" muted="" autoPlay="" preload="auto" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/UPrFIsj/videoblocks-abstract-colorful-hypnotic-symmetric-pattern-ornamental-decorative-kaleidos_bfffu4pgq__3fdde268699c4bc05a40e683c9223d00__P360.mp4"></video>
    </div>    
  </div>
  
  <div className="clip right">
    <h2 className="title">Section Two</h2>  
    <div className="circle">
      <video playsinline="" loop="" muted="" autoPlay="" preload="auto" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/UPrFIsj/videoblocks-abstract-colorful-hypnotic-symmetric-pattern-ornamental-decorative-kaleidos_rk3bk8wzx__3f027269065500101571f87dc77a341c__P360.mp4"></video>      
    </div>
  </div>
  
</section>
 

 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            padding: 0;
            margin: 0;
            font-family: sans-serif;
          }
          
          .cursor {
            width: 1rem;
            height: 1rem;
            position: fixed;
            z-index: 900;
            top: 0;
            left: 0;
            border: 3px solid black;
            border-radius: 50%;
          }
          
          section.hero {
            position: relative;
            width: 100vw;
            height: 100vh;
          }
          
          .clip {
            position: relative;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .clip.left {
            background: teal;
          }
          
          .clip.right {
            background: orange;
            transform: translateY(-100vh);
            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
          }
          
          .circle {
            width: 80vh;
            height: 80vh;
            border-radius: 50%;
            background: white;
            overflow: hidden;
          }
          
          .left .circle {
            background: white;
          }
          
          .right .circle {
            background: black;
          }
          
          .title {
            font-size: 10vh;
            position: absolute;
          }
          
          .left .title {
            left: 0;
            transform: rotate(-90deg)
          }
          
          .right .title {
            right: 0;
            transform: rotate(90deg)
          }
          
          video {
            height: 100vh;
            width: 100vh;
            object-fit: cover;
            margin: auto;
            // clip-path: ellipse(35vh 35vh);
          }
          
     
                   `
      }}
    />
 </>
 )
}