/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EasePack from 'gsap/dist/EasePack';
 
{/*Reference: https://codepen.io/GreenSock/pen/yLXLBpL */}
 export default function Some() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, EasePack);

    const drawers = gsap.utils.toArray(".drawer");

    // Pin the accordion
    ScrollTrigger.create({
      trigger: ".accordion",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: "body",
      invalidateOnRefresh: true,
      markers: true
    });
    
    drawers.forEach((drawer, i) => {
      const drawer_content = drawer.querySelector(".drawer_content");
    
      // Setting up a timeline for every drawer
      let drawerTl = gsap.timeline({
        scrollTrigger: {
          trigger: drawer,
          scrub: 0.5,
          invalidateOnRefresh: true,
          start: "top 20%",
          end: "bottom 20%",
          markers: true
        }
      });
    
      // Animate the drawer content to 0
      drawerTl.to(drawer_content, {
        height: 0,
        autoAlpha: 1
      });
      // I've removed everything else to keep it simple so you can see what's going on
    });
    
}, []);
  return (
    <>
<div className="spacer">dummy content</div>
<div className="accordion">
  <div className="drawer">
    <a href="#drawer1" className="drawer_title">Drawer 1<span className="plus"></span></a>
    <div className="drawer_content">
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
    </div>
  </div>
  <div className="drawer">
    <a href="#drawer2" className="drawer_title">Drawer 2<span className="plus"></span></a>
    <div className="drawer_content">
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros..</p>
    </div>
  </div>
  <div className="drawer">
    <a href="#drawer3" className="drawer_title">Drawer 3<span className="plus"></span></a>
    <div className="drawer_content">
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. </p>
    </div>
  </div>
</div>
<div className="spacer">dummy content</div>
 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          :root {
            font: 20px system-ui;
         }
          @media screen and (max-width: 1000px), screen and (max-height: 600px) {
            :root {
              font-size: 16px;
           }
         }
          body {
            line-height: 1.5;
            background: #faf3e0;
            color: #1e212d;
         }
          .accordion {
            padding: 1rem;
            max-width: 30rem;
            margin: 0 auto;
            box-sizing: border-box;
         }
          .drawer:not(:last-child) {
            margin-bottom: 1rem;
         }
          .drawer_title {
            display: flex;
            color: inherit;
            text-decoration: none;
            background: #1e212d;
            color: #faf3e0;
            padding: 1rem;
            justify-content: space-between;
         }
          .drawer_title .plus:after {
            content: "+";
         }
          .drawer_content {
            overflow: hidden;
            height: auto;
            border: solid 2px black;
         }
          .drawer_content p {
            margin: 1rem;
         }
          .spacer {
            height: 50vh;
         }
          
          
                   `
      }}
    />
 </>
 )
}