/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { element } from 'prop-types';
 
{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

 
var rect = document.querySelectorAll('#container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

 

let elementsArray = document.querySelectorAll("#container");

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function(e) {
      mouse.moved = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
});

 
 
// Ticker event will be called on every frame
gsap.ticker.add(() => {
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt("img", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  gsap.to(target, {
    duration: 0.5,
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

}, []);

const handleScroll = () => {}
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
   
    const rect = document.querySelectorAll('#container')[0].getBoundingClientRect();

  });
//document.querySelectorAll(window).on('resize scroll', function(){
 // rect = document.querySelectorAll('#container')[0].getBoundingClientRect();
//})

  return (
    <>

<div id="container">
  <img alt="" src="https://unsplash.it/1000/1000?random=" />
  <div className="slide one"></div>  
</div>


     <style
      dangerouslySetInnerHTML={{
          __html: `
          #container {
            position: relative;
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .slide {
            display: block;
            position: absolute;
            height: 200px !important;
            width: 200px !important;
            background: red;
          }
          
                   `
      }}
    />
 </>
 )
}