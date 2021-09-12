 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
    .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
    .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
    .from(".gridLayer", {
      scale: 3.3333,
      ease: "none",
    });
    
    
    // Images to make it look better, not related to the effect
    const size = Math.max(innerWidth, innerHeight);
    gsap.set('.gridBlock', {backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`});
    
    const bigImg = new Image;    
    bigImg.addEventListener("load", function () {
      gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
    });
    
    bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
    
 
}, []);
  return (
    <>
<h1 className="header-section">Scroll down to see a photo gallery being revealed</h1>

<div className="grid-container">
  <div className="grid">
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer centerPiece">
      <div className="gridBlock centerBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"><a href="https://greensock.com" target="_blank" rel="noreferrer"></a></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
    <div className="gridLayer">
      <div className="gridBlock"></div>
    </div>
  </div>
</div>

<h1 className="header-section" 
  style=
  {{
    marginTop:"0" 
  }}>
Some additional content
</h1>




 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          .gridBlock {
            opacity: 0;
          }
          
          
          /* Grid almost fully pulled from https://www.rino-pelle.com/ */
          .grid-container {
            width: 100vw;
            height: 400vh;
            position: relative;
          }
          .grid {
            top: 0;
            left: 0;
            z-index: 1;
            width: 70vw;
            height: 60vw;
            margin: 0 calc(100vw / 20 * 3);
            position: absolute;
            
          }
          @media only screen and (max-width: 580px) {
            .grid {
              margin: 0;
              width: 100vw;
              height: 89.444vw;
            }
          }
          .gridBlock {
            background-size: cover;
            background-color: darkgray;
          }
          .gridLayer {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            will-change: transform;
            transform-origin: 44.951% 50%;
          }
          .gridLayer:nth-child(1) .gridBlock {
            top: 5vw;
            left: 20vw;
            width: 10vw;
            height: 10vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(1) .gridBlock {
              top: 11.111vw;
              left: 23.889vw;
              width: 15vw;
              height: 15vw;
            }
          }
          .gridLayer:nth-child(2) .gridBlock {
            top: 0;
            left: 32.5vw;
            width: 15vw;
            height: 15vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(2) .gridBlock {
              top: 0;
              left: 43.333vw;
              width: 26.389vw;
              height: 26.389vw;
            }
          }
          .gridLayer:nth-child(3) .gridBlock {
            left: 0;
            top: 25vw;
            width: 15vw;
            height: 15vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(3) .gridBlock {
              top: 30.278vw;
              left: 0;
              width: 26.389vw;
              height: 26.389vw;
            }
          }
          .gridLayer:nth-child(4) .gridBlock {
            top: 17.5vw;
            left: 17.5vw;
            width: 30vw;
            height: 30vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(4) .gridBlock {
              top: 30.278vw;
              left: 30.278vw;
              width: 39.444vw;
              height: 39.444vw;
            }
          }
          .gridLayer:nth-child(5) {
            z-index: 1;
          }
          .gridLayer:nth-child(5) .gridBlock {
            top: 20vw;
            left: 50vw;
            width: 5vw;
            height: 5vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(5) .gridBlock {
              top: 23.889vw;
              left: 73.889vw;
              width: 15.278vw;
              height: 15.278vw;
            }
          }
          .gridLayer:nth-child(5) a {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gridLayer:nth-child(5) svg {
            width: 1.75vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(5) svg {
              width: 4.722vw;
            }
          }
          .gridLayer:nth-child(6) .gridBlock {
            left: 50vw;
            top: 27.5vw;
            width: 20vw;
            height: 20vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(6) .gridBlock {
              top: 43.889vw;
              left: 73.889vw;
              width: 26.389vw;
              height: 26.389vw;
            }
          }
          .gridLayer:nth-child(7) .gridBlock {
            left: 10vw;
            top: 42.5vw;
            width: 5vw;
            height: 5vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(7) .gridBlock {
              display: none;
            }
          }
          .gridLayer:nth-child(8) .gridBlock {
            bottom: 5vw;
            left: 42.5vw;
            width: 5vw;
            height: 5vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(8) .gridBlock {
              display: none;
            }
          }
          .gridLayer:nth-child(9) .gridBlock {
            bottom: 0;
            left: 50vw;
            width: 10vw;
            height: 10vw;
          }
          @media only screen and (max-width: 580px) {
            .gridLayer:nth-child(9) .gridBlock {
              top: 73.889vw;
              left: 58.889vw;
              width: 15.278vw;
              height: 15.278vw;
            }
          }
          .gridBlock {
            display: block;
            position: absolute;
          }
          
          
     
                   `
      }}
    />
 </>
 )
}