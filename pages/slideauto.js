/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import Image from 'next/image';
 import { Power2, Back } from "gsap";
 

{/*Reference https://codesandbox.io/s/gsap-animations-8mv7u?file=/src/styles.css */}
 export default function Some() {
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.saveStyles(".ImageScroll__image")

  ScrollTrigger.matchMedia({
  
    '(max-width: 799px)': function () {
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: "linear",
          repeat: -1,
          duration: 10,
        }
      });
      
      tl.from(
        '.ImageScroll__image-1, .ImageScroll__image-3',
        { xPercent: -50, duration: 30 }, 0,
      )
        .fromTo(
        '.ImageScroll__image-2',
        { xPercent: 0 }, { xPercent: -50, duration: 30 }, 0,
      );
      
      ScrollTrigger.create({
        trigger: "section",
        start: "top top",
        end: "bottom",
        markers: true,
        onEnter: () => {
          tl.play();
        },
        onLeave: () => {
          tl.pause();
        },
  
        onUpdate: self => {
          const velocity = Math.abs(self.getVelocity())
          const clamp = gsap.utils.clamp(0, 6)
          tl.timeScale(clamp(velocity / 100))
          gsap.to(tl, { timeScale: 1, ease: 'power1.inOut', duration: 2, overwrite: true })
        },
      });
  
      return () => {gsap.killTweensOf(tl); tl.kill();}
      
    },
  
    '(min-width: 800px)': function () {
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: "linear",
          repeat: -1,
          duration: 10,
        }
      });
      
      tl.from(
        '.ImageScroll__image-1, .ImageScroll__image-3',
        { xPercent: -50, duration: 10 }, 0,
      )
        .fromTo(
        '.ImageScroll__image-2',
        { xPercent: 0 }, { xPercent: -50, duration: 10 }, 0,
      );
      ScrollTrigger.create({
        trigger: "section",
        start: "top top",
        end: "bottom",
        markers: true,
        onEnter: () => {
          tl.play();
        },
        onLeave: () => {
          tl.pause();
        },
  
        onUpdate: self => {
          const velocity = Math.abs(self.getVelocity())
          const clamp = gsap.utils.clamp(0, 6)
          tl.timeScale(clamp(velocity / 100))
          gsap.to(tl, { timeScale: 1, ease: 'power1.inOut', duration: 2, overwrite: true })
        },
      });
     
      return () => {gsap.killTweensOf(tl); tl.kill();}
    },
  })
  
  
  
 
}, []);
  return (
    <>
 <section>
  <div class="ImageScroll__wrapper">
    <div class="ImageScroll__image    ImageScroll__image-1"></div>
  </div> 
    <div class="ImageScroll__wrapper">
    <div class="ImageScroll__image    ImageScroll__image-2"></div>
  </div> 
    <div class="ImageScroll__wrapper">
    <div class="ImageScroll__image    ImageScroll__image-3"></div>
  </div> 
</section>





 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          body { 
            min-height: 800vh;
            padding: 0;
            margin: 0;
          }
          
          section {
            padding-top: 200px;
          }
          
          .ImageScroll__wrapper {
            padding-top: 50px;
            width: 100%;
            height: 100px;
            overflow: hidden;
          }
          
          .ImageScroll__image {
            height: 100%;
            width: 300%;
            background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/collage.jpg);
            background-repeat: repeat-x;
            transform: translate3d(0, 0, 0);
          }
          
     
                   `
      }}
    />
 </>
 )
}