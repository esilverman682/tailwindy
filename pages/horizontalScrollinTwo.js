import  {  useEffect } from "react";
import {  gsap } from "gsap";
 import { throttle } from "lodash"; 
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
 
export default function Mask() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
 
    gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".portfolio");
let tl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: container,
    end: () => container.scrollWidth - document.documentElement.clientWidth
  },
  defaults: { ease: "none", duration: 1 }
});

tl.to(".parallax", { x: 300 })
  .to(".panel", { x: () => -(container.scrollWidth - document.documentElement.clientWidth) }, 0)
  .from(".secondAn", {
    opacity: 0,
    scale: 0.5,
    duration: 0.2,
    stagger: {
      amount: 0.8
    }
  }, 0);

gsap.from(".firstAn", {
  duration: 1,
  opacity: 0,
  scale: .5,
  scrollTrigger: {
    trigger: container,
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none reverse"
  }
});
 
    
   
  }, []);
  
 


   

  return (
    
    <div className=" " >
       
<div className="spacer-lg">
  <h1>LARGE SPACER</h1>
    <h2>Scroll Down</h2>
</div>
          <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

          *, *:before, *:after {
            box-sizing: border-box;
            position: relative;
            letter-spacing: 0.04em;
          }
          body { 
            font-family: 'Montserrat', sans-serif;
            background-color: #FEFEFE;
            overflow-x: hidden;
          }
          .spacer {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          h1 {
            font-size: 3rem;
            color: #000;
          }
          .section {
            height: auto;
            width: 100%;
            position: relative;
            padding: 0;
            overflow-x: hidden;
          }
          .portfolio {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-wrap: nowrap;
            background-color: #1F242D;
            overflow: hidden;
          }
          .portfolio_title {
            position: absolute;
            top: 0;
            left: -15rem;
            font-size: 24rem;
            letter-spacing: 0;
            -webkit-text-stroke-color: #343A42;
            display: inline-block;
          }
          .text-stroke {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #343A42;
          }
          .grid {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            aling-content: center;
            justify-content: center;
            overflow: hidden;
          }
          .panel {
            display: flex;
            flex: 0 0 50%;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            justify-content: center;
            height: 100%;
            padding: 10rem 7rem 2rem 7rem;
            background-color: transparent;
            overflow: hidden;
          }
          .panel_item {
            height: 100%;
            width: 100%;
            margin: 0 auto;
          }
          .panel_img {
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
 

                   `
      }}
    />
 
 


<section className="section portfolio">
  <h2 className="portfolio_title parallax">Portfolio</h2>
  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img firstAn"  src={require('/assets/800x600.webp')} alt="image" />

    </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img firstAn" src={require('/assets/800x600.webp')} alt="image" />
 </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"   src={require('/assets/800x600.webp')} alt="image" />
  </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"  src={require('/assets/800x600.webp')} alt="image" />
 </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"  src={require('/assets/800x600.webp')} alt="image" />
 </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"  src={require('/assets/800x600.webp')} alt="image" />
 </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"  src={require('/assets/800x600.webp')} alt="image" />
 </div>
  </div>

  <div className="panel">
    <div className="panel_item">
    <Image className="panel_img secondAn"  src={require('/assets/800x600.webp')} alt="image" />
  </div>
  </div>
</section>

<div className="spacer margin">
  <h1>The End</h1>
</div>

 
    </div>
  );
}





 
