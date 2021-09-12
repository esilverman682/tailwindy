 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        toggleClass: "active",
        ease: "power2"
      }
    });
    
    gsap.to(".hero__image", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom -300%",
        ease: "power2"
      },
      y: "-30%"
    });
    
 
}, []);
  return (
    <>


<header className="container">
  <h2 className="container__headline">Wanna see something neat?</h2>
</header>
<section className="container hero">
  <div className="hero__inner">
    <div className="hero__images">
    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             />
      </div>
    <div className="hero__content">
      <div className="hero__headline"><span>How Neat is That?</span></div>
    </div>
  </div>
</section>
<footer className="container">
  <h2 className="container__headline">Thats pretty neat.</h2>
</footer>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");
          * {
            box-sizing: border-box;
         }
          body {
            background: black;
            font-family: "IBM Plex Sans", sans-serif;
         }
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            color: white;
            text-align: center;
         }
          .container__headline {
            font-size: 5vmin;
         }
          .hero__inner {
            display: flex;
            position: relative;
            width: 100vw;
            max-height: 100vh;
            overflow: hidden;
         }
          .hero__inner::before {
            content: "";
            display: block;
            padding-bottom: calc(100% / (16 / 9));
         }
          .hero__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 160%;
            object-fit: cover;
         }
          .hero__content {
            display: none;
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
         }
          .hero__headline {
            --padding: 1.5vmin;
            --duration: 400ms;
            --delay: calc(var(--duration) / 2);
            --ease: cubic-bezier(0.25, 1, 0.5, 1);
            position: relative;
            display: inline-block;
            font-size: 10vmin;
            overflow: hidden;
            margin-top: calc(var(--padding) * -1);
            padding: var(--padding);
         }
          .hero__headline::after {
            content: "";
            position: absolute;
            top: calc(100% - var(--padding));
            left: 0;
            background-color: white;
            width: 100%;
            height: 1.5vmin;
            transform: scaleX(0);
            transition: transform var(--duration) var(--delay) var(--ease);
         }
          .hero__headline span {
            display: block;
            transform: translateY(110%);
            transition: transform var(--duration) var(--ease);
         }
          .active .hero__headline::after {
            transform: scaleX(1);
            transition-delay: 0s;
         }
          .active .hero__headline span {
            transform: translateY(0);
            transition-delay: var(--delay);
         }
          
          
     
                   `
      }}
    />
 </>
 )
}