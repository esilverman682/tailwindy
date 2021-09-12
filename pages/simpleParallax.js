 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/QWjjYEw  */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach((section, i) => {
    section.bg = section.querySelector(".bg"); 
  
    // Give the backgrounds some random images
    section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
  
    // Do the parallax effect on each section
    if (i) {
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
  
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true
        }
      });
    } 
    
    // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
    else {
   
      gsap.to(section.bg, {
         ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: "bottom top",
          scrub: true
        }
      });
    }
  });
 
}, []);
  return (
    <>

<section>
  <div className="bg"></div>
  <h1>Simple parallax sections</h1>
</section>
<section>
  <div className="bg"></div>
  <h1>Hey look, a title</h1>
</section>
<section>
  <div className="bg"></div>
  <h1>They just keep coming</h1>
</section>
<section>
  <div className="bg"></div>
  <h1>So smooth though</h1>
</section>
<section>
  <div className="bg"></div>
  <h1>Nice, right?</h1>
</section>




<header>
   <a href="https://greensock.com/scrolltrigger">
 <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             />
  </a> 
</header>
     <style
      dangerouslySetInnerHTML={{
          __html: `
          section {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          h1 {
            color: white;
            text-shadow: 1px 1px 3px black;
            z-index: 1;
            font-size: 3em;
            font-weight: 400;
          }
          
          
                   `
      }}
    />
 </>
 )
}