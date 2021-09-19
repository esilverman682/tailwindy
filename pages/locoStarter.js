/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/mdwJJNX  */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    console.clear();
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll
    
    document.documentElement.classList.add('is-loaded');
    document.documentElement.classList.remove('is-loading');
    setTimeout(() => {
      document.documentElement.classList.add('is-ready');
      },300)
        
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-content]'),
      smooth: true,
    });
      
    ScrollTrigger.scrollerProxy('[data-scroll-content]', {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector('[data-scroll-content]').style.transform ? "transform" : "fixed"
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    //------------------- section replace color
    
      const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
      scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
        ScrollTrigger.create({
          trigger: colorSection,
          scroller: '[data-scroll-content]',
          start: "top 50%",
          end: () => "+=" + colorSection.offsetHeight,
          onEnter: () => 
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto" }),
    
          onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
        });
      });
      
    //end section replace color 
    
    gsap.utils.toArray(".dark").forEach(el => {
      ScrollTrigger.create({
        scroller: '[data-scroll-content]',
        trigger: el,
        markers: true,
        start: "top 50%",
        end: () => "+=" + el.offsetHeight,
        toggleClass: { targets: '.logo, .ctn-triggers', className: 'light' }
      });
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    
    ScrollTrigger.refresh();
 
}, []);

  return (
  <>
<header className="header">

 
 
<svg className="logo change" version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 103.8 14" style={{enableBackground:"new 0 0 103.8 14;"}} xmlSpace="preserve">
<text transform="matrix(1 0 0 1 0 10.374)" className="st0 st1">Some Logo</text>
</svg>

 
<div className="ctn-triggers link change">
    <div className="traco-trg trc-up"></div>
    <div className="traco-trg trc-down"></div>
</div>

</header>

<main>
<div data-scroll-content="data-scroll-content">

  <section className="section-1 dark" data-textcolor="var(--light)" data-bgcolor="var(--green-blue)">
    <div className="container">
      <div className="row justify-content-center">
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
      </div>
    </div>
  </section>

  <section className="section-2 light" data-textcolor="var(--dark)" data-bgcolor="var(--light)"> 
      <div className="container">
      <div className="row justify-content-center">
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
      </div>
    </div>
    </section>

  <section className="section-3 dark" data-textcolor="var(--light)" data-bgcolor="var(--green-blue)">
    <div className="container">
      <div className="row justify-content-center">
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
      </div>
    </div>
  </section>
  
</div>
</main>
 

     <style
      dangerouslySetInnerHTML={{
          __html: `
          :root {
            --dark: #030406;
            --light: #f0eeeb;
            --green-blue: #1f242d;
            --grey: #cdced0;
          }
          
          .bg-dark {
            background-color: var(--dark)
          }
          
          .bg-light {
            background-color: var(--light)
          }
          
          svg {
              -webkit-filter: saturate(70%);
                      filter: saturate(70%);
          }
          
          svg {
            position: absolute;
            height: 70vh;
            width: 55vw;
            right: 0;
          }
          
          .container {
            max-width: 110em;
            margin: 0 auto
          }
          
          .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -10px;
            margin-right: -10px;
            width: calc(100% + 20px)
          }
          
          .justify-content-center {
            justify-content: center!important
          }
          
          html {
            font-size: 62.5%;
            background-color: var(--light);
          }
          
          body::-webkit-scrollbar,
          html::-webkit-scrollbar,
          main::-webkit-scrollbar {
            display: none
          }
          
          body {
            transition: background-color 1.5s cubic-bezier(.025, .9, .45, 1)
          }
              
          body * {
            color: inherit
          }
          
          body:after {
            transition: background-color 1.5s cubic-bezier(.025, .9, .45, 1)
          }
          
          main {  
            transition: opacity .5s ease
          }
          
          .header {
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            transition: 0.4s ease;
            }
          
          h1 {
            font-size: 9vw;
            z-index: 1
          }
          
          section {
            width: 100vw;
            height: 100vh;
            z-index: 1;
            padding-top: 25vh;
            position: relative;
          }
          
          .section-1 .section-2 .section-3 {
            margin-top: 25vh;
          }
          
          .ctn-triggers {
            display: block;
            width: 3rem;
            height: 3rem;
            right: 6rem;
            z-index: 60;
            cursor: pointer;
            padding: .3rem 0;
          }
          
          .ctn-triggers .traco-trg {
            width: 39px;
            height: 2px;
            margin-top: 5px;
          }
          
          .ctn-triggers,
          .logo {
            position: fixed;
            top: 6rem
          }
          
          .logo {
            width: 14rem;
            height: 3.2rem;
            left: 4rem;
            top: 5rem;
            z-index: 150;
            font-family: 'Gordita', sans-serif !important;
            font-weight: normal;
            font-size: .8625rem;
            letter-spacing: .1rem;
            transition: background-color 1.5s cubic-bezier(.025, .9, .45, 1)
          }
          
          .dark {
            fill: var(--dark)
          }
          
          .dark .traco-trg,
          a.dark {
            background-color: var(--green-blue)
          }
          
          a.dark {
            border: solid 1px var(--green-blue);
            color: var(--light)
          }
          
          a.dark:hover {
            color: var(--light);
            background-color: #737885;
            border: solid 1px #737885
          }
          
          .light {
            fill: var(--light)
          }
          
          .light .traco-trg,
          a.light {
            background-color: var(--light)
          }
          
          a.light {
            border: solid 1px var(--light);
            color: #14181a
          }
          
          a.light:hover {
            color: var(--light);
            background-color: #14181a;
            border: solid 1px #14181a
          }
          
          
          
          
        
                   `
      }}
    />
 
</>
 )
}