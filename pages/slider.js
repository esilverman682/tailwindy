/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/JjYPgdp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".slideText").forEach(text => {
      gsap.timeline({
        defaults: {ease: "none"},
        scrollTrigger: {
          scroller: text.closest(".horizSlider"),
          horizontal: true,
          trigger: text.closest(".slide"),
          start: "left right",
          end: "left left",
          scrub: true
        }
      })
      .fromTo(text, {x: 250}, {x: -250}, 0)
      .from(text.nextElementSibling, {scale: 0.8}, 0)
    });
    
}, []);


  return (
    <>
<div> 
<h1 className="header-section">Scroll the slider to the right to see some parallax effects</h1>

<section className="horizSlider">
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500" alt="Filler image" />
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500" alt="Filler image" />
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"  alt="" />
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"  alt="" />
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"  alt="" />
  </div>
</section>

<h1 className="header-section">How do you like the photos?</h1>

     <style
      dangerouslySetInnerHTML={{
          __html: `
          .horizSlider {
            position: relative;
            white-space: nowrap;
            overflow: auto;
          }
          .horizSlider .slide {
            display: inline-block;
            position: relative;
          }
          .slideText {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            text-shadow: 1px 1px 3px black;
            z-index: 1;
            font-size: 3em;
            font-weight: 400;
          }
          .slideImage {
            transform-origin: bottom left;
          }
          
                   `
      }}
    />
    </div>
 </>
 )
}