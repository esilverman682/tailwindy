/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import Image from 'next/image';
 import { Power2, Back } from "gsap";
 

{/*Reference https://codepen.io/GreenSock/pen/OJyPmgX */}
 export default function Some() {
 
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "none", duration: 2 });

  const introAnimation = () => {
    const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const logo = document.querySelector("#logo");
    const hamburger = document.querySelector(".hamburger");
    const headline = document.querySelector(".headline");

    const tl1 = gsap.timeline();

    tl1
      .fromTo(
        hero,
        1.0,
        { height: "0%" },
        { height: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeOut },
        "-=1.2"
      )
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
      .fromTo(
        hamburger,
        0.5,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 10, ease: Back.easeOut },
        "-=0.5"
      );
  };

  const slideAnimation = () => {
    const container = document.querySelector("#container");
    const orange = document.querySelector(".two");
    const purple = document.querySelector(".three");
    const green = document.querySelector(".four");

    const tl2 = gsap.timeline();

    tl2
      .from(orange, { xPercent: -100, opacity: 0.5 })
      .from(purple, { xPercent: 100, opacity: 0.5 })
      .from(green, { yPercent: -100, opacity: 0.5 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: container,
      markers: false,
      start: "top top",
      end: "+=4000",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    });
  };



  useEffect(() => {
   introAnimation();
    slideAnimation();
 
}, []);
  return (
    <>
  <div className="app">
      <div className="intro_page">
        <header>
          <nav>
            <h3 id="logo">Dream Vacation</h3>
            <div className="hamburger"  />
          </nav>
          <section>
            <div className="hero" >
          
            <Image src={require('/assets/bg.webp')} alt="image" layout="fill"  />
              <h1 className="headline">Dream Big</h1>
            </div>
          </section>
        </header>

        <div
          className="slider"
          style={{
            background: "linear-gradient(to left, blue[900], blue[300])"
          }}
        ></div>
      </div>

      <div className="canvas_tut">CANVAS</div>
      <div id="container">
        <div className="slide one">ONE</div>
        <div className="slide two">TWO</div>
        <div className="slide three">THREE</div>
        <div className="slide four">FOUR</div>
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
          
          .hero:after {
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
          
     
                   `
      }}
    />
 </>
 )
}