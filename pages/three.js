/* eslint-disable @next/next/no-img-element */
import React  from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
{{ /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */}}
export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".comparisonSection").forEach(section => {
      let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth, 
            scrub: true,
            pin: true,
            anticipatePin: 1
          },
          defaults: {ease: "none"}
        });
      // animate the container one way...
      tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
        // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
    });
}, []);
 
 

  return (
<>
<div>
<h1 className="header-section">Scroll to see the before/after</h1>

<section className="comparisonSection">
  <div className="comparisonImage beforeImage">
    <img src="https://assets.codepen.io/16327/before.jpg" alt="before" />
  </div>
  <div className="comparisonImage afterImage">
    <img src="https://assets.codepen.io/16327/after.jpg" alt="after" />
  </div>
</section>

 




 


  <style
    dangerouslySetInnerHTML={{
        __html: `

        body {
          height: 300vh;
          background-color: #111;
          color: white;
          overflow-x: hidden;
        }
        
        h1, h2 {
          font-weight: 400;
          max-width: none;
        }
        
        .comparisonSection {
          position: relative;
          padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
        }
        .comparisonImage {
          width: 100%;
          height: 100%;
        }
        .afterImage {
          position: absolute;
          overflow: hidden;
          top: 0;
          transform: translate(100%, 0px);
        }
        .afterImage img {
          transform: translate(-100%, 0px);
        }
        .comparisonImage img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
        }
        

    `
    }}
    />     
  </div>
</>
  );
}
