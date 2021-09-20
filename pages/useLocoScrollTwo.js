/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{{ /* REFERENCE: https://codesandbox.io/s/xenodochial-carson-30umg?file=/src/locomotive-scroll.css:0-1647

  1. Create a constant with a unique name....  
  2. Create a constant name for a useRef 
  3. Create a useEffect with a conditional which includes typeof window === "undefined" and return it  
  4. Create a constant name to hold the locomomotive IMPORTwhich includes new LocomotiveScroll .default
  5. Scroll destroy it
  5b. Parent div call useRef by name
  6. Export the constant
*/
}}



 
const useLocoScrollTwo = () => {

  gsap.registerPlugin(ScrollTrigger);

  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    let locoScroll = null;

    const scrollEl = document.querySelector("#smooth-scroll");

 
    const locoscroll = import("locomotive-scroll").then((LocomotiveScroll) => {
     locoScroll = new LocomotiveScroll.default({
        el: scrollEl,
        smooth: true,
        lerp: 0.075,
        multiplier: 0.9
      });
    });
 //   return () => scroll.destroy();
    document.addEventListener("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, []);

  return (
<>
 
 
 

      <style
      dangerouslySetInnerHTML={{
          __html: `
          /*! locomotive-scroll v4.0.6 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
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
          
          [data-scroll-direction="horizontal"] [data-scroll-container] {
            white-space: nowrap;
            height: 100vh;
            display: inline-block;
            white-space: nowrap;
          }
          
          [data-scroll-direction="horizontal"] [data-scroll-section] {
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
            height: 100%;
          }
          
          .c-scrollbar {
            position: absolute;
            right: 0;
            top: 0;
            width: 11px;
            height: 100%;
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
          [data-scroll-direction="horizontal"] .c-scrollbar {
            width: 100%;
            height: 10px;
            top: auto;
            bottom: 0;
            transform: scaleY(1);
          }
          [data-scroll-direction="horizontal"] .c-scrollbar:hover {
            transform: scaleY(1.3);
          }
          
          .c-scrollbar_thumb {
            position: absolute;
            top: 0;
            right: 0;
            background-color: black;
            opacity: 0.5;
            width: 7px;
            border-radius: 10px;
            margin: 2px;
            cursor: -webkit-grab;
            cursor: grab;
          }
          .has-scroll-dragging .c-scrollbar_thumb {
            cursor: -webkit-grabbing;
            cursor: grabbing;
          }
          [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
            right: auto;
            bottom: 0;
          }
          .App {
            font-family: monospace;
            text-align: center;
            font-size: 10px;
            font-weight: 500;
          }
          
          .flex_center {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .col {
            display: flex;
            flex-direction: column;
          }
          
          .ai_fs {
            align-items: center;
          }
          
          .jc_c {
            justify-content: center;
          }
          
          .block {
            width: 66%;
            height: 50vh;
            font-size: 1.5em;
            margin-top: 50px;
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
            background-color: rgb(245, 245, 245);
            border-radius: 8px;
          }
          
          .block h2 {
            margin-top: 0;
          }
          
          .mt_0 {
            margin-top: 0px;
          }
          
          .p_50 {
            padding: 20px 50px;
            box-sizing: border-box;
          }
          
          .bg_235 {
            background-color: rgb(245, 245, 245);
          }
          
          .bg_245_08 {
            background-color: rgba(245, 245, 245, 0.8);
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          
          .c_150 {
            color: rgb(150, 150, 150);
          }
          
          .c_blue {
            color: blue;
          }
          
          .c_red {
            color: red;
          }
          
          .c_green {
            color: green;
          }
          
          .c_black {
            color: black;
          }
          
          .boxsh_3 {
            box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
          }
          
     
                   `
      }}
    />
    </>
  );
};
 

export default useLocoScrollTwo;
