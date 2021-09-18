/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EasePack from 'gsap/dist/EasePack';
{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, EasePack);
    gsap.config({force3D: false});
    
    let tl = gsap.timeline({
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1
      }
    });
    
    gsap.utils.toArray("section").forEach((section, i) => {
      if (i) {
        tl.fromTo(section, {scale: 0}, {
          scale: 1,
          ease: "none" // or "expoScale(0.01, 1)" but that didn't seem quite as nice because it takes a while to become visible.
        }, "<") // completely overlap with the previous tween
      }
      tl.to(section, {
        scale: 1120,
        ease: "expoScale(.01, 200)"
      });
    });
}, []);
  return (
    <>

<main role="main" className="ink">

<section className="ink-a" id="a">
  <div className="ink-a-js">
    YOU
  </div>
</section>

<section className="ink-b" id="b">
  <div className="ink-b-js">
  WIN 
  </div>
</section>

<section className="ink-c" id="c">
  <div className="ink-c-js">
    AN INNOVATOR
  </div>
</section>

<section className="ink-d" id="d">
  <div className="ink-d-js">
    O
  </div>
</section>

<section className="ink-e" id="e">
  <div className="ink-e-js">
    O
  </div>
</section>

<section className="ink-f" id="f">
  <div className="ink-f-js">
    O
  </div>
</section>

</main>


     <style
      dangerouslySetInnerHTML={{
          __html: `
          html {
            overflow-x: hidden;
            color: red !important;
          }
          
          body {
            margin: 0;
            height: 600vh;
          }
          
          main {
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            position: fixed;
            width: 100%;
            height: 100vh;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -ms-flex-line-pack: stretch;
                align-content: stretch;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            overflow: hidden;
          }
          
          /*  BALISE SECTION PREMIER CONTENANT */
          section {
            height: 100vh;
            width: 100%;
            position: fixed;
            
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -ms-flex-line-pack: stretch;
                align-content: stretch;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
          }
          
          .ink-f {
            height: 10vh !important;
            width: 50vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -ms-flex-line-pack: stretch;
                align-content: stretch;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
          }
          
          /*  FIN BALISE SECTION PREMIER CONTENANT */
          /*  GSAP ACTIF DEUXIEME CONTENANT */
          .ink-a-js,
          .ink-b-js,
          .ink-c-js,
          .ink-e-js,
          .ink-d-js,
          .ink-e-js,
          .ink-f-js {
            height: 100vh;
            width: 100vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -ms-flex-line-pack: stretch;
                align-content: stretch;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            top: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            top: 0 !important;
          }
          
          
     
                   `
      }}
    />
 </>
 )
}