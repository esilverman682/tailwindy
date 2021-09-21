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
        smooth: true,
        smartphone: {
              smooth: true
          }
      });
    });

 //   return () => scroll.destroy();
  }, []);

  return (
    <>
    <div data-scroll-container ref={scrollRef}>
    <section data-scroll-section="">
      <p>Scroll</p>
      <span className="lerp-wrap" data-scroll="">
        <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="6">F</span>
        <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="6">I</span>
        <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="6">R</span>
        <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="6">S</span>
        <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="6">T</span>
      </span>
    </section>
    <section data-scroll-section="">
      <span className="lerp-wrap" data-scroll="">
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">S</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">E</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">C</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">O</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.08" data-scroll-speed="6">N</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.06" data-scroll-speed="6">D</span>
      </span>
    </section>
    <section data-scroll-section="">
      <span className="lerp-wrap" data-scroll="">
        <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="-2">T</span>
        <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="-2">H</span>
        <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="-2">I</span>
        <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="-2">R</span>
        <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="-2">D</span>
      </span>
    </section>
    <section data-scroll-section="">
      <span className="lerp-wrap" data-scroll="">
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="-6">L</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="-6">I</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="-6">N</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="-6">U</span>
        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.08" data-scroll-speed="-6">X</span>
      </span>
    </section>
  </div>

      <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: "Monoton", cursive;
            margin: 0;
            padding: 0;
          }
          section p {
            position: absolute;
            top: 20px;
            letter-spacing: 3px;
            left: 20px;
            color: #222;
            font-weight: 700;
            border: 1px solid #222;
            padding: 10px;
          }
          section {
            position: relative;
            height: 100vh;
            color: #222;
            display: grid;
            place-content: center;
          }
          section:nth-child(1) {
            background: #faded7;
          }
          section:nth-child(2) {
            background: #feffbf;
          }
          section:nth-child(3) {
            background: #b0efef;
          }
          section:nth-child(4) {
            background: #ffcbcb;
          }
          .lerp-wrap {
            display: inline-block;
            vertical-align: middle;
            margin-left: 1.25rem;
            line-height: 1.1;
          }
          .lerp-wrap span {
            display: inline-block;
            font-size: clamp(32px, 5vw, 7vw);
          }
          
          
          
     
                   `
      }}
    />
 </>
  );
};

export default Snapp;
