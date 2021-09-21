/* eslint-disable @next/next/no-img-element */
 
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useLocoScroll from "./useLocoScrollTwo";

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
 

const ScrollTriggerBlock = () => {

  gsap.registerPlugin(ScrollTrigger);

  const scrollyRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollyRef.current,
        smooth: true
      });
    });
//return () => scroll.destroy();


 setTimeout(() => {
  gsap.to("#trigger", {
    backgroundColor: "rgb(97 139 45)",
    scrollTrigger: {
      id: "child",
      trigger: "#trigger",
      start: "top top+=33%",
      scroller: "#smooth-scroll",
      markers: true,
      scrub: true
    }
  });
});
ScrollTrigger.refresh();

  }, []);

  return (
    <div className="App" ref={scrollyRef}>
     <div id="trigger" className="block col flex_center boxsh_3">
      <div className="w_100p bg_245_08">
        <h2>Child with trigger</h2>
        <div>
          Whats good with me{" "}
          <span role="img" aria-label="sad">
            😥
          </span>
        </div>
      </div>
    </div>
    <h2>Scroll and Fade in React</h2>
    <h4 data-scroll
        data-scroll-speed="1"
        data-scroll-position="top"
        data-scroll-direction="horizontal" >
          None
    </h4>
    <h4>Something</h4>
    <h4 data-scroll data-scroll-speed="1" 
        style={{ 
          marginTop: "2.65rem"
        }}>
        Something Else
    </h4>

    <div>9 afasdf asdfasdfasdf asfasdfasdfasasdfasd a sdfas a asdfas asdf</div>
      <style
      dangerouslySetInnerHTML={{
          __html: `

.fixed_wrapper {
  position: relative;
  overflow: hidden;
  height: 818px;
}

.fixed_target {
  bottom: -100vh;
}
.fixed,
.fixed_target {
  position: absolute;
  top: -100vh;
  right: 0;
  left: 0;
}
.fixed {
  height: 100%;
  background-size: cover;
  background-position: center;
}

          h2 {
            font-size: 20px;
          }
          h4 {
            font-size: 30px;
          }
          
          #trigger {
            width: 100%;
          
          }
          .spacer50{
            margin-bottom: 50px;
          }
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
  width: 30%;
  height: 50vh;
  font-size: 1.5em;
  margin-top: 50px;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  margin: 0 auto;
}

.block h2 {
  margin-top: 0;
}

.mt_0 {
  margin-top: 0px;
}

.p_50 {
  padding: 150px  ;
  box-sizing: border-box;
  margin-bottom: 200px;
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
    </div>
  );
};

 

export default function App() {
  // ScrollTrigger.scrollerProxy initialization
  // with Locomotive scroll
  useLocoScroll();

  // This works fine, scrollTrigger in working
  // and markers are at correct positions
  useEffect(() => {
    gsap.to("#another_trigger", {
      backgroundColor: "rgb(150,200,75)",
      scrollTrigger: {
        id: "parent",
        trigger: "#another_trigger",
        start: "top top+=33%",
        scroller: "#smooth-scroll",
        markers: true,
        scrub: true
      }
    });
  }, []);

  return (
    <div className="App col ai_fs" id="smooth-scroll">
      <div className="block col p_50 c_150 boxsh_3">No trigger</div>
      <div className="block col p_50 c_150 boxsh_3">No trigger</div>
      <ScrollTriggerBlock />
      <div id="another_trigger" className="block col flex_center boxsh_3">
        <div className="bg_245_08 ">
          <h2>Block with another trigger</h2>
          Inside parent this works fine
        </div>
      </div>
      <div className="block col p_50 c_150 boxsh_3">No trigger</div>
      <div className="block col p_50 c_150 boxsh_3">No trigger</div>
    </div>
  );
}