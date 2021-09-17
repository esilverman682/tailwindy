import React, { useRef, useState, useEffect } from "react";
 
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function App() {
 

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

// Your other stuff
const anim = gsap.to(".content", { opacity: 0, paused: true }); // can be left out

const ST = ScrollTrigger.create({
  trigger: "body",
  start: 0,
  end: "bottom bottom",
  
  animation: anim, // can be left out
  pin: ".content", // can be left out
  scrub: true      // can be left out
});


// The relevant part to keeping the progress
ScrollTrigger.addEventListener("refreshInit", () => progress = ST.progress);
ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

  });

  return (
 <>
<div class="content">
  <h1>GreenSock Starter Template</h1>
  <p>This loads <strong>ALL</strong> <a href="https://greensock.com">GSAP</a> files including a trial version of every <a href="https://codepen.io/GreenSock/full/OPqpRJ/">bonus plugin</a> (usable on codepen.io only). Hit the "fork" button in the bottom right and experiment to your heart's content. Enjoy!</p>
</div>
 
      <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');

          body { 
            height: 300vh;
            font-family: "Signika Negative", sans-serif; 
            font-weight: 300;
            margin: 0;
            padding: 0 20px;
          }
     
                   `
      }}
    />
 </>
  );
}
