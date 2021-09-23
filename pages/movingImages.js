/* eslint-disable @next/next/no-img-element */
 
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
 import { styles } from '@/components/styles.module.scss'

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
 

export default function Some() {

  gsap.registerPlugin(ScrollTrigger);

  const scrollyRef = useRef();



  useEffect(() => {
    document.documentElement.classList.add("is-loaded");
    document.documentElement.classList.remove("is-loading");
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: document,
        smooth: true,
        getSpeed: true,
        getDirection: true
      });
    });
//return () => scroll.destroy();


setTimeout(() => {
  document.documentElement.classList.add("is-ready");
}, 300);

ScrollTrigger.refresh();

  }, []);

  return (
<>
 
    <main className="maino" id="js-scroll">
      <section data-scroll-section>
        <div>
          <header className="header" id="header">
            <div className="header-link">
              <a href="https://www.donaelwalter.com/" target="blank_"
                >DONAËL WALTER</a
              >
              <a href="https://www.instagram.com/walt_dona/" target="blanck_"
                >INSTAGRAM</a
              >
            </div>
            <div className="header-content">
              <h1 data-scroll data-scroll-speed="2">TAKOSU</h1>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="1">
                Photographic Archive
              </h2>
            </div>
            <div className="backed-wrapper center-wrapper">
              <span data-scroll data-scroll-speed="-4">
                <img
                  className="backed"
                  alt="Zoz ont the top"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/39dc9c89883883.5e04c0dae5925.jpg"
                />
              </span>
            </div>
          </header>
        </div>
      </section>
      <section className="section" data-scroll-section="">
        <div className="content-b">
          <div>
            <div className="backed-wrapper">
              <span
                data-scroll=""
                data-scroll-speed="3"
                data-scroll-delay="0.8"
              >
                <img
                  data-scroll=""
                  data-scroll-speed="3"
                  data-scroll-direction="horizontal"
                  className="backed"
                  alt="Zoz ont the top"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e597ee89883883.5e04c0da58123.jpg"
                />
              </span>
            </div>
          </div>
          <div>
            <div className="backed-wrapper">
              <span
                data-scroll=""
                data-scroll-speed="-3"
                data-scroll-delay="0.8"
              >
                <img
                  data-scroll=""
                  data-scroll-speed="-3"
                  data-scroll-direction="horizontal"
                  className="backed"
                  alt="Zoz ont the top"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b3181289883883.5e04c0dae5fb6.jpg"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
      <style
      dangerouslySetInnerHTML={{
          __html: `
         
          body, h1, p, section, div, header, footer, h2 {
            margin: 0;
            padding: 0;
         }
          body {
            overflow: hidden;
         }
          body .Loader {
            position: absolute;
            height: 100vh;
            width: 100vw;
            z-index: 4000;
            background-color: #303030;
            display: flex;
            color: white;
            font-family: sans-serif;
            justify-content: center;
            align-items: center;
            transition: 500ms;
         }
          .is-loading main {
            display: none;
         }
          .is-loading .Loader {
            display: flex;
         }
          .is-loaded .Loader {
            transition: 500ms;
            opacity: 0;
         }
          .is-ready .Loader {
            display: none;
         }
          .is-ready h1, .is-ready h2 {
            opacity: 1;
            transition: 500ms;
         }
          h1 {
            font-size: 16em;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            opacity: 0;
         }
          h2 {
            font-size: 2em;
            color: white;
            font-family: 'Times New Roman', Times, serif;
            font-weight: lighter;
            opacity: 0;
         }
          section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
         }
          section .content-b {
            height: 100vh;
            width: 100vw;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
         }
          section .content-b div {
            display: flex;
            justify-content: center;
            align-items: center;
         }
          main {
            box-sizing: border-box;
            overflow: hidden;
            width: 100vw;
            background-color: #303030;
         }
         footer {
           height: 0;
         }
          header {
            width: 100vw;
            height: 0vh;
         }
          header .header-link {
            padding: 20px;
            display: flex;
            justify-content: space-between;
         }
          header .header-link a {
            color: white;
            text-decoration: none;
            font-family: sans-serif;
            font-weight: bold;
         }
          header .header-content {
            margin-top: -80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 10;
         }
          .backed-wrapper {
            width: 40vw;
            height: 70vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: -10;
         }
          .backed-wrapper span {
            display: flex;
            justify-content: center;
            align-items: center;
         }
          .backed-wrapper .backed {
            width: 125%;
         }
          .center-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
         }
          
 
    `
      }}
    />
    </>
  );
};

 
 