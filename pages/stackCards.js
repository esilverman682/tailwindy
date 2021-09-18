/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EasePack from 'gsap/dist/EasePack';
 
{/*Reference: https://codepen.io/GreenSock/pen/XWRzjqG */}
 export default function Some() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, EasePack);

    const cards = gsap.utils.toArray('.card')

    cards.forEach((card, index) => {
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
        },
        ease: "none",
        scale: 1 - (cards.length - index) * 0.09,
      });
    });
    
    let scrollFunc = ScrollTrigger.getScrollFunc(window), // allows us to get/set scroll position
        lastScrollPosition;
    ScrollTrigger.addEventListener("refreshInit", () => {
      lastScrollPosition = scrollFunc(); // record current scroll position
      scrollFunc(0); // reset it to 0 so that position: sticky doesn't contaminate measurements
    });
    ScrollTrigger.addEventListener("refresh", () => scrollFunc(lastScrollPosition));
    
    
}, []);
  return (
    <>
<div>
  <h1>Stacking Cards</h1>
  <div className='container'>
    <div className='cards'>
      <div className='card' style={{top:"40px"}}>1</div>
      <div className='card' style={{top:"45px"}}>2</div>
      <div className='card' style={{top:"50px"}}>3</div>
      <div className='card' style={{top:"55px"}}>4</div>
      <div className='card' style={{top:"60px"}}>5</div>
    </div>
  </div>
  <div className='container2'>
  </div>
</div>

 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');

          body { 
            font-family: "Signika Negative", sans-serif; 
            font-weight: 300;
            margin: 0;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #F4F4F4;
          }
          
          h1 {
            margin-bottom: 80vh;
          }
          
          .container {
            display: flex;
          }
          
          .cards {
            margin-left: 100px;
          }
          
          .card {
            position: sticky;
            height: 200px;
            width: 400px;;
            margin-bottom: 50px;
            background: white;
            font-size: 36px;
            transform-origin: center top;
          }
            .card:first-child {
              box-shadow: 0px 0px 30px 3px rgba(0, 0, 0, 0.05);
            }
        
          
          .container2 {
            margin-top: 40px;
            width: 100%;
            height: 400px;
          }
     
                   `
      }}
    />
 </>
 )
}