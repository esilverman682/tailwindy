/* eslint-disable @next/next/no-css-tags */
import gsap from "gsap";
import { useEffect } from "react";

{{/*REFERENCE: https://greensock.com/forums/topic/24887-gsap-2x-clamp-carousel-example/*/ }}
export default function Some() {
  useEffect(() => {
     var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
    
    //initially colorize each box and position in a row
    gsap.set(".box", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 50
    });
    
    gsap.to(".box", {
      duration: 5,
      ease: "none",
      x: "+=500", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });
    
    
    //toggle overflow
    const overflow = document.querySelector("#overflow");
    overflow.addEventListener("change", applyOverflow);
    
    function applyOverflow() {
      if(overflow.checked) {
        gsap.set(".wrapper", {overflow: "visible"});
      } else {
        gsap.set(".wrapper", {overflow: "hidden"});
      }
    }
}, []);
return (
<>
<div className="nav">
<label><input type="checkbox" name="overflow" id="overflow" value="1" /> Show overflow</label>
</div>
<link href='//fonts.googleapis.com/css?family=Signika+Negative:300,400' rel='stylesheet' type='text/css' />
<div className="wrapper">
  <div className="boxes">
    <div className="box">1</div>
    <div className="box">2</div>
    <div className="box">3</div>
    <div className="box">4</div>
    <div className="box">5</div>
    <div className="box">6</div>
    <div className="box">7</div>
    <div className="box">8</div>
    <div className="box">9</div>
    <div className="box">10</div>
</div>
</div>
<style
    dangerouslySetInnerHTML={{
        __html: `
        body {
          background:#1d1d1d;
          font-family:Asap, sans-serif;
        }
        .wrapper{
          width:450px;
          height:50px;
          position:relative;
          margin:auto;
          background:#ccc;
          overflow:hidden;
        }
        .wrapper::after {
          width:448px;
          height:48px;
          content:"";
          position:absolute;
          border:solid 1px white;
        }
        .box{
          width:50px;
          height:50px;
          position:absolute;
          background:red;
          font-size:25px;
          line-height:50px;
          text-align:center;
        }
        .boxes {
          position:relative;
          left:-50px;
        }
        .nav {
          position:relative;
          text-align:center;
          color:white;
          font-size:20px;
          margin:20px 0;
        }
     `
    }}
    />    
 </>
  );
}