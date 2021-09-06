import  { useRef, useEffect } from "react";
import {  gsap } from "gsap";
 
 import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Workout from './workout.svg';
import Happy from './happy.svg';
import Greensocklogo from './greensocklogo.svg';
 
export default function Sane() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#gsap-logo"),
      {
        opacity: 0,
        scale: 0.2,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".line"), {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: element.querySelector(".third"),
        scrub: true,
        start: "top bottom",
        end: "top top"
      }
    });
  }, []);

  return (
    
    <div className="App" ref={ref}>
          <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          padding: 0%;
          margin: 0%;
          box-sizing: border-box;
        }
        
        .first {
          width: auto;
          height: 500px;
          background-color: #fdfffc;
          margin-top: 30px;
        }
        
        .second {
          width: auto;
          height: 400px;
          background-color: #e0fbfc;
        }
        
        .third {
          width: auto;
          height: 400px;
          background-color: #fdfffc;
        }
        
        .line {
          width: 100%;
          max-width: 1400px;
          height: 20px;
          margin-top: 20px;
          position: relative;
          display: inline-block;
          background-color: #023047;
        }
        
        h1 {
          text-align: center;
          padding-top: 90px;
          color: #023047;
          font-size: 60px;
        }
        
        .first-paragraph {
          text-align: center;
          color: #023047;
          font-size: 20px;
          font-weight: bold;
        }
        
        .logo-main {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        
        #workout-logo {
          width: 500px;
          height: 300px;
          margin-top: 10px;
        }
        
        #gsap-logo {
          width: 500px;
          height: 300px;
          margin-top: 50px;
          padding-right: 80px;
      
        }
        
        #happy-logo {
          width: 500px;
          height: 300px;
        }
        
        .second-paragraph {
          font-size: 30px;
          margin-top: 40px;
        }
        
        .third-paragraph {
          font-size: 30px;
          margin-top: 40px;
        }
        
                   `
      }}
    />
      <div className="first">
        <h1 className="text-black">ScrollTrigger</h1>
        <p className=" first-paragraph">
          is the coolest Greensock plugin.
          <span role="img" aria-label="celebrating">
            🥳
          </span>
        </p>
        <div className="logo-main">
          <Workout id="workout-logo"></Workout>
        </div>
      </div>

      <div className="second">
        <div className="logo-main" >
          <Greensocklogo id="gsap-logo"></Greensocklogo>      
        </div>
      </div>

      <div className="third" >
        <p>
          <span className="line"  />
        </p>
        <div className="logo-main"  >
          <Happy id="happy-logo" style={{backgroundSize: "100px", width: "100px"}}></Happy>     
        </div>
      </div>
    </div>
  );
}

 
