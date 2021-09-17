/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIntersection } from "react-use";
import back from "./left.svg";
import send from "./send.svg";

export default function App() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: 0.3 }
    });
  }, []);
 
 
  
  return (
    <div className="body">
<progress max="100" value="0"></progress>
<div className="container">
  <section>
    <p>Scroll to add some color to your life!🎨</p>
  </section>
  <section>
    <p>Youre doing great, keep going😘</p>
  </section>
  <section>
    <p>Keep scrolling just a little more 🏃‍♀️</p>
  </section>
  <section>
    <p>Here you go!<br />Did you like it?🌈</p>
  </section>
</div>


    

    <style
      dangerouslySetInnerHTML={{
          __html: `
          
          progress {
            position: fixed;
            top: 0;
            left: 0;
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 15px;
            border: none;
            background: transparent;
          }
          progress::-webkit-progress-bar {
            background: transparent;
          }
          progress::-webkit-progress-value {
            background: linear-gradient(to left, #db38b5,#01b3e3,#25ce7b,#fdc741,#ff6b01,#fc4236);
            background-attachment: fixed;
          }
          progress::-moz-progress-bar {
            background: linear-gradient(to left, #db38b5,#01b3e3,#25ce7b,#fdc741,#ff6b01,#fc4236);
            background-attachment: fixed;
          }
          
        body .body, .w-full {
            background: linear-gradient(to bottom,
              desaturate(lighten(#db38b5, 30%), 30%),
              desaturate(lighten(#01b3e3, 30%), 30%),
              desaturate(lighten(#25ce7b, 30%), 30%),
              desaturate(lighten(#fdc741, 30%), 30%),
              desaturate(lighten(#ff6b01, 30%), 30%),
              desaturate(lighten(#fc4236, 30%), 30%)
            );
            background-color: linear-gradient(to bottom, #e6c6df, #92d8eb, #afddc6, #f9f1de, #f0c7a9, #f7d6d4);
          }
          section {
            min-height: 100vh;
            padding: 10vw 5vh;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
         }
          p {
            margin: 0;
            font-size: 24px;
            font-size: #{'max(18px, min(90px, 10vw))'};
            font-family: 'Permanent Marker', cursive;
            line-height: 1.2;
          }
    
 
                    `
      }}
    />
</div>
 
)}
