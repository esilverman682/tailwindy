/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function app() {
        let Sections = gsap.utils.toArray("section"),
            getTotalWidth = () => {
              let width = 0;
              Sections.forEach(el => width += el.offsetWidth);
              return width;
            },
            snap;
        gsap.to(Sections, { 
          x: () => -getTotalWidth() + window.innerWidth, 
          ease: "none", 
          scrollTrigger: {
                trigger: "#HorizontalWrapper",
                pin: true,
                start: 0,
                end: () => "+=" + (document.querySelector('#HorizontalWrapper').scrollWidth - window.innerWidth),
                invalidateOnRefresh: true,
                onRefresh() {
                  let totalWidth = getTotalWidth(),
                      accumulatedWidth = 0,
                      progressArray = Sections.map(el => {
                        accumulatedWidth += el.offsetWidth;
                        return accumulatedWidth / totalWidth;
                      });
                  progressArray.unshift(0);
                  snap = gsap.utils.snap(progressArray);
                },
                snap: {
                    snapTo: value => snap(value),
                    duration: { min: 0.40, max: 0.70 },
                    delay: 0.01, ease: "sine.inOut",
                },
                scrub: true,
                markers: "true",
            }
        });
    }
    window.onload = () => {
        app()
    }
 
}, []);
  return (
    <>

<div id="HorizontalWrapper">

  <section id="SectionA"><img className="SectionAImag" src="https://source.unsplash.com/Pd8tLVGx2O4/1600x900" alt="" />
    <h1>SectionA<br />width: 120vw;</h1>
  </section>

  <section id="SectionB">
    <div id="SectionBLeftBox">
      <h1>SectionB<br />width: 150vw;</h1>
    </div><img className="SectionBImag" src="https://source.unsplash.com/CudNrzbsyZw/1600x900" alt="" />
  </section>

  <section id="SectionC">
    <div id="ImageWrap"><img src="https://source.unsplash.com/uEFombN3J5U/1600x900" alt="" /></div>
    <h1>SectionC<br />width: 210vw;</h1>
  </section>

  <section id="SectionD">
    <div id="SectionWrap">
      <div id="ImageWrap"><img src="https://source.unsplash.com/BjJP2TN8WoI/900x1600" alt="" /></div>
      <div id="TextWrap">
        <h1>SectionD<br />width: 200vw;</h1>
      </div>
    </div>
  </section>
  
</div>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          :root {
            font-family: Helvetica;
          }
          
          ::-webkit-scrollbar {
            display: none;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            color: white;
            font-weight: 400;
            font-size: 5vw;
            text-align: center;
            color: #000000;
          }
          
          body {
            background: greenyellow;
          }
          
          #HorizontalWrapper {
            width: 100%;
            height: 100vh;
            display: flex;
          }
          
          section {
            position: relative;
            height: 100vh;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            color: var(--ColorWhiteA);
            border-right: 5px solid blue;
          }
          
          #HorizontalWrapper #SectionA {
            justify-content: center;
            align-items: center;
            width: 120vw;
          }
          
          #HorizontalWrapper #SectionA h1 {
            position: absolute;
          }
          
          #HorizontalWrapper #SectionA img {
            position: absolute;
            width: 100%;
          }
          
          #HorizontalWrapper #SectionB {
            justify-content: flex-start;
            width: 150vw;
          }
          
          #HorizontalWrapper #SectionB #SectionBLeftBox {
            display: flex;
            position: absolute;
            z-index: 1;
            justify-content: center;
            align-items: center;
            background: #f8efe6;
            height: 100vh;
            width: 70vw;
          }
          
          #HorizontalWrapper #SectionB img {
            position: absolute;
            right: 0;
            height: 100vh;
          }
          
          #HorizontalWrapper #SectionC {
            justify-content: center;
            align-items: center;
            background: #f8efe6;
            width: 210vw;
          }
          
          #HorizontalWrapper #SectionC h1 {
            position: absolute;
          }
          
          #HorizontalWrapper #SectionC #ImageWrap {
            position: absolute;
            overflow: hidden;
            width: 60vw;
            height: 70vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          #HorizontalWrapper #SectionC #ImageWrap img {
            height: 100%;
          }
          
          #HorizontalWrapper #SectionD {
            justify-content: center;
            align-items: center;
            background: #f00000;
            width: 200vw;
          }
          
          #HorizontalWrapper #SectionD #SectionWrap {
            position: relative;
            width: calc(100vw - 10vw);
            height: calc(100vh - 10vw);
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
          }
          
          #HorizontalWrapper #SectionD #SectionWrap #ImageWrap {
            position: absolute;
            left: 0;
            overflow: hidden;
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          #HorizontalWrapper #SectionD #SectionWrap #ImageWrap img {
            width: 100%;
          }
          
          #HorizontalWrapper #SectionD #SectionWrap #TextWrap {
            position: absolute;
            right: 0;
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f8efe6;
          }
          
          #HorizontalWrapper #SectionD #SectionWrap #TextWrap h1 {
            font-size: 5vw;
          }
     
                   `
      }}
    />
 </>
 )
}