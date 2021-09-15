import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Navigation from "./Navigation";
import Content from "./Content";


{/*Reference https://codepen.io/GreenSock/pen/eYpGLYL */}

 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

 

}, []);


  return (
    <>
<div className="h-full"> 
<Navigation />
      <Content />
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        
        .App {
          font-family: 'Open Sans', sans-serif;
          text-align: center;
          height: 5000px;
        }
        
        #navigation {
          width: 100%;
          height: 60px;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 15;
          background-color: rgba(0, 183, 255, 0);
          color: rgba(21, 21, 21, 1);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        
          padding: 0 24px;
        
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.0200rem;
        }
           .hidden {
            top: -60px;
          }
        
          #logo {
            background: rgba(21, 21, 21, 1);
            width: 30px;
            height: 30px;
            border-radius: 30px;
            margin-right: auto;
          }
        
          ul {
            list-style-type: none;
            display: flex;
            align-items: center;
             }
             ul li {
              margin: 0 12px;
              background: rgba(21, 21, 21, 1);
              width: 30px;
              height: 10px;
              border-radius: 5px;
            }
        
        
        .hero {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: fixed;
          z-index: 10;
        }
         .hero img {
            width: auto;
            height: 100%;
          }
      
        
        .blur-mask {
          background-color: rgba(255, 255, 255, 0.8);
          bottom: 0;
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
          transform: translateZ(0);
          z-index: 5;
          // backdrop-filter: blur(15px);
        }
        
        .box-container {
          position: fixed;
          top: 25vh;
          left: 0;
          right: 0;
          filter: blur(15px);
        }
        
        .box {
          width: 100%;
          height: auto;
          padding: 50px 25px;
          display: block;
        }
        
         .box img {
            width: 100%;
            height: auto;
          }
        
        
        
        

          
                   `
      }}
    />
    </div>
 </>
 )
}