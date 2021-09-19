/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/mdwJJNX  */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
var container = document.querySelectorAll(".container");

var total = 200;

// RGB values
var colors = [
  [32, 255, 219],
  [231, 0, 77],
  [241, 206, 74]
];

var gradient = [];

for (var i = 0; i < total; i++) {  

  var container = document.createElement('div');
    var box = document.createElement('div');
  box.className = 'box';  
   box.append(container);

//var box = document.createElement("<div class='box' />").appendTo(container);  

//  Gradient stuff
  var amt = i / (total - 1);
  var rgb = lerpColors(colors, amt);
  gradient.push("rgb(" + rgb + ")");
}
gsap.to(".box", {duration: 1.5,  
// TweenMax.to(".box", 1.5, {
  backgroundColor: function(i) { return gradient[i]; },
  repeat: -1,
  repeatDelay: 1,
  yoyo: true
});

function lerp(min, max, amt) { 
  return min + (max - min) * amt; 
}

function lerpColor(min, max, amt) { 
  var rgb = [];
  for(var i = 0; i < min.length; i++) {
    rgb[i] = lerp(min[i], max[i], amt) >> 0;
  }
  return rgb;
}

function lerpColors(colors, amt) {
  if (amt >= 1) return colors[colors.length - 1];
  amt *= (colors.length - 1);
  var i = amt >> 0;
  return lerpColor(colors[i], colors[i + 1], amt - i);
}


 
}, []);

  return (
  
    <div className="yeah"> 
<div className="container">

<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
<div className='box' />
</div>

     <style
      dangerouslySetInnerHTML={{
          __html: `
          .yeah {
            height: 100%;
          }
          
          .yeah {  
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            padding: 0;
            margin: 0;
              
          }
          
          .container {
            position: relative;
            width: 80vw;
            display: grid;
            grid-gap: 8px;
            grid-template-columns: repeat(10, 50px);
            grid-template-rows: repeat(10, 50px);
          }	
          
          .box {
            width: 50px;
            height: 50px;  
            position: relative;
            background: #fff;
          }
          
          
          
          
        
                   `
      }}
    />
 
 </div>
 )
}