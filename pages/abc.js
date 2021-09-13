import  {useEffect } from "react";
import {gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

 import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
//import HappyText from "./happyText";

export default function Mask() {
 
  gsap.registerPlugin(ScrollToPlugin)
 


  useEffect(() => {
    
 gsap.timeline({
   ScrollTrigger: {
     trigger: "section",
     start: "center center",
     end: "bottom bottom",
     scrub: true,
     markers: true,
     pin: true
   }
 })
 .to(".text", {scale: 0})
.from(".box1", {x : innerWidth * -1})
.from(".box2", {opacity : innerWidth * 1})
.from(".box3", {x : innerWidth * 1})
.from(".box4", {x : innerWidth * 1})
.from(".box5", {x : innerWidth * 1})

  }, []); 

  return (
    <div>
      <section>

 <h2 className="text">SCrooll ro See <span>Spamgic</span></h2>
<div className="box box1">    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             /></div>
<div className="box box2">    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             /></div> 
 

<div className="box box3">    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             /></div>
             <div className="box box4">    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             /></div>
             <div className="box box5">    <img 
             className="greensock-icon"
             height="874"
             src="https://source.unsplash.com/random/1240x874?sig=76"
             width="1240"
             alt=""
             /></div>
 
      </section>



          <style
      dangerouslySetInnerHTML={{
          __html: `
       

 

      section {
        position : relative;
        width: 100%;
        min-height: 100vh;
        padding: 100px;
      } 

       section .box img {
         max-width: 100%;
       }
       
       
       section .box {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);

       }     
          section .text span {
            color: #16b716
          }




       section .text {
        position: absolute;
        bottom: 40px;
        left: 40px;
        font-size: 3em;
        font-weight: 400;
       }
          

                   `
      }}
    />




    
    </div>
  );
}





 
