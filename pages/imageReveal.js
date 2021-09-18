/* eslint-disable @next/next/no-img-element */
import React  from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
{{ /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */}}
export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let masks = document.querySelectorAll('.mask');
    
    masks.forEach( mask => {
        let image = mask.querySelector('img');
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: mask,
                toggleActions: "restart none none reset"
            }
        });
    
        tl.set(mask, {autoAlpha: 1});
    
        tl.from(mask, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    })
}, []);
 
 

  return (
<>
    <div className="container">
      <div className="img_container"> 
        <div className="mask">
          <img 
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
        </div>
      </div>
      <div className="img_container">
        <div className="mask">
          <img 
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
        </div>
      </div>
      <div className="img_container">
        <div className="mask">
          <img 
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
        </div>
      </div>
      <div className="img_container">
        <div className="mask">
   <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             />
        </div>
      </div>


  <style
    dangerouslySetInnerHTML={{
        __html: `

    @import url("https://fonts.googleapis.com/css?family=Arapey");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    /* INTRO PAGE ANIMATION */

    .intro_page {
      height: 100vh;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(to left, #940039, #000000);
      z-index: -1;
    }

    nav {
      display: grid;
      grid-template-columns: 10% 1fr 1fr 10%;
      min-height: 10vh;
      color: white;
      align-items: center;
    }

    #logo {
      opacity: 0;
      grid-column: 2/4;
      font-size: 24px;
    }

    .hamburger {
      justify-content: end;
      position: relative;
    }

    section {
      display: flex;
      height: 80vh;
      justify-content: center;
      align-items: center;
    }

    .hero {
      height: 60%;
      width: 50%;
      position: relative;
    }

    .hero img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .headline {
      position: absolute;
      top: 60%;
      left: 0%;
      font-size: 100px;
      transform: translate(-20%, -70%);
      color: white;
      z-index: 3;
    }

    .hero::after {
      content: "";
      background: black;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
    /* CANVAS BASIC */

    .canvas_tut {
      height: 100vh;
    }

    /* SLIDE ANIMATION */

    #container {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    .one {
      position: absolute;
      background: rgb(255, 75, 75);
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 0;
      overflow: hidden !important;
    }

    .two {
      position: absolute;
      background: rgb(255, 142, 37);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 1;
    }
    .three {
      position: absolute;
      background: rgb(200, 113, 240);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 2;
    }
    .four {
      position: absolute;
      background: rgb(72, 241, 67);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 3;
    }
    
    
      
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #131313;
    }

    .container {
        max-width: 1320px;
        margin: 0 auto;
    }

    .img_container {
        margin: 20% 0;
        width: 70%;
        position: relative;
    }

    .img_container:nth-child(even) {
        margin-right: 0;
        margin-left: auto;
    }

    img {
        height: 100%;
        width: 100%;
        transform-origin: left;
        object-fit: cover;
    }

    .mask {
        visibility: hidden;
        position: relative;
        width: 80%;
        height: 80%;
        overflow: hidden;
    }
    

    `
    }}
    />     
  </div>
</>
  );
}
