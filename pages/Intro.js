/* eslint-disable @next/next/no-img-element */
 
import { useRef, useEffect } from "react";
import gsap from 'gsap'

{{ /* REFERENCE: https://codesandbox.io/s/10vn0?file=/styles/styles.css:0-906  

  1. Create a constant with a unique name....  
  2. Create a constant name for a useRef 
  3. Create a useEffect with a conditional which includes typeof window === "undefined" and return it  
  4. Create a constant name to hold the locomomotive IMPORTwhich includes new LocomotiveScroll .default
  5. Scroll destroy it
  5b. Parent div call useRef by name
  6. Export the constant
*/
}}

const Snapp = () => {
 
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true
      });
    });

 //   return () => scroll.destroy();
  }, []);

  return (
    <div className="App" ref={scrollRef}>
      <h2>Scroll and Fade in React</h2>
      <h4 data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal" >None</h4>
      <h4>Something</h4>
      <h4 data-scroll data-scroll-speed="1" style={{ marginTop: "2.65rem" }}>
        Something Else
      </h4>
      <img  data-scroll data-scroll-speed="1"
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
      <div data-scroll data-scroll-speed="4" data-scroll-position="middle" data-scroll-direction="horizontal">
        <img  
          className="greensock-icon"
          height="874"
          src="https://source.unsplash.com/random/1240x874?sig=76"
          width="1240"
          alt=""
        />
      </div>
<div data-scroll data-scroll-speed="-5" data-scroll-position="bottom" data-scroll-direction="horizontal">

  <div>       
    <img 
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
  </div>
  <div>9 afasdf asdfasdfasdf asfasdfasdfasasdfasd a sdfas a asdfas asdf</div>
</div>

      <style
      dangerouslySetInnerHTML={{
          __html: `
          .App {
            font-family: sans-serif;
            text-align: center;
            height: 300vh;
            padding-bottom: 300vh;
          }
          
          html.has-scroll-smooth {
            overflow: hidden;
          }
          
          html.has-scroll-dragging {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          .has-scroll-smooth body {
            overflow: hidden;
          }
          
          .has-scroll-smooth [data-scroll-container] {
            min-height: 100vh;
          }
          
          .c-scrollbar {
            position: absolute;
            right: 0;
            top: 0;
            width: 11px;
            height: 100vh;
            transform-origin: center right;
            transition: transform 0.3s, opacity 0.3s;
            opacity: 0;
          }
          .c-scrollbar:hover {
            transform: scaleX(1.45);
          }
          .c-scrollbar:hover,
          .has-scroll-scrolling .c-scrollbar,
          .has-scroll-dragging .c-scrollbar {
            opacity: 1;
          }
          
          .c-scrollbar_thumb {
            position: absolute;
            top: 0;
            right: 0;
            background-color: hotpink;
            opacity: 0.5;
            width: 7px;
            border-radius: 10px;
            margin: 2px;
          }
          
          
     
                   `
      }}
    />
    </div>
  );
};

export default Snapp;
