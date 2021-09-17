/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub:2
      }
    });
    
    gsap.utils.toArray("[data-depth]").forEach((layer) => {
      tl.to(layer, {
        y: layer.dataset.depth * -3,
        ease: "none"
       }, 0);
    });
    
 
}, []);
  return (
    <>

<svg id="parallax" preserveAspectRatio="xMidYMax slice" viewBox="0 0 553.54 369.03">
  <defs>
    <linearGradient id="linear-gradient" x1="276.77" y1="369.03" x2="276.77" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#f9ffff"/>
      <stop offset="0.17" stopColor="#f9f5f4"/>
      <stop offset="0.46" stopColor="#f9dcd8"/>
      <stop offset="0.84" stopColor="#f9b3ab"/>
      <stop offset="1" stopColor="#f99f95"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="236.91" y1="253.58" x2="236.91" y2="199.66" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#afaaaf"/>
      <stop offset="0.27" stopColor="#cfc7cc"/>
      <stop offset="0.54" stopColor="#e6dce0"/>
      <stop offset="0.79" stopColor="#f4e9ed"/>
      <stop offset="1" stopColor="#f9edf1"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="220.86" y1="253.58" x2="220.86" y2="199.73" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.05" stopColor="#b4afb4"/>
      <stop offset="0.12" stopColor="#cab4b9"/>
      <stop offset="0.21" stopColor="#dbb8be"/>
      <stop offset="0.31" stopColor="#e6bbc1"/>
      <stop offset="0.46" stopColor="#edbdc3"/>
      <stop offset="0.87" stopColor="#efbdc3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="271.14" y1="245.34" x2="271.14" y2="199.67" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.11" stopColor="#b4afb4"/>
      <stop offset="0.29" stopColor="#ceb5bb"/>
      <stop offset="0.47" stopColor="#e0b9bf"/>
      <stop offset="0.66" stopColor="#ebbcc2"/>
      <stop offset="0.87" stopColor="#efbdc3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="431.65" y1="261.67" x2="431.65" y2="160.17" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.04" stopColor="#acadb2"/>
      <stop offset="0.14" stopColor="#c4b3b8"/>
      <stop offset="0.25" stopColor="#d7b7bd"/>
      <stop offset="0.39" stopColor="#e5bbc0"/>
      <stop offset="0.55" stopColor="#edbcc2"/>
      <stop offset="0.87" stopColor="#efbdc3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="463.46" y1="251.08" x2="463.46" y2="167.54" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.08" stopColor="#b4b0b5"/>
      <stop offset="0.22" stopColor="#ceb8bd"/>
      <stop offset="0.36" stopColor="#e0bec3"/>
      <stop offset="0.51" stopColor="#ebc1c6"/>
      <stop offset="0.67" stopColor="#efc2c7"/>
    </linearGradient>
    <linearGradient id="linear-gradient-7" x1="136.56" y1="265.76" x2="136.56" y2="164.35" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.87" stopColor="#efbdc3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-8" x1="186.99" y1="264.18" x2="186.99" y2="173.72" xlinkHref="#linear-gradient-4"/>
    <linearGradient id="linear-gradient-9" x1="356.59" y1="305.44" x2="356.59" y2="199.57" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.22" stopColor="#a9aaaf"/>
      <stop offset="0.55" stopColor="#beaaaf"/>
      <stop offset="0.96" stopColor="#e2aaaf"/>
      <stop offset="1" stopColor="#e5aaaf"/>
    </linearGradient>
    <linearGradient id="linear-gradient-10" x1="298.67" y1="303.58" x2="298.67" y2="204.25" xlinkHref="#linear-gradient-9"/>
    <linearGradient id="linear-gradient-11" x1="464.42" y1="304.19" x2="464.42" y2="199.57" gradientUnits="userSpaceOnUse">
      <stop offset="0.37" stopColor="#bdaaaf"/>
      <stop offset="0.6" stopColor="#c0aaaf"/>
      <stop offset="0.77" stopColor="#c9aaaf"/>
      <stop offset="0.92" stopColor="#d9aaaf"/>
      <stop offset="1" stopColor="#e5aaaf"/>
    </linearGradient>
    <linearGradient id="linear-gradient-12" x1="435.67" y1="305.44" x2="435.67" y2="204.12" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.17" stopColor="#b0acb1"/>
      <stop offset="0.72" stopColor="#dcb4b9"/>
      <stop offset="1" stopColor="#edb7bc"/>
    </linearGradient>
    <linearGradient id="linear-gradient-13" x1="276.77" y1="308.48" x2="276.77" y2="205.49" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#a1aaaf"/>
      <stop offset="0.24" stopColor="#a6a9ae"/>
      <stop offset="0.51" stopColor="#b4a5aa"/>
      <stop offset="0.8" stopColor="#cba0a4"/>
      <stop offset="1" stopColor="#df9b9e"/>
    </linearGradient>
    <linearGradient id="linear-gradient-14" y1="271.86" x2="536.44" y2="271.86" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#afaaaf"/>
      <stop offset="0.03" stopColor="#a9a6ac"/>
      <stop offset="0.24" stopColor="#808b96"/>
      <stop offset="0.45" stopColor="#607685"/>
      <stop offset="0.65" stopColor="#496679"/>
      <stop offset="0.84" stopColor="#3b5d72"/>
      <stop offset="1" stopColor="#365a6f"/>
    </linearGradient>
    <linearGradient id="linear-gradient-15" y1="268.32" x2="553.54" y2="268.32" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#25485a"/>
      <stop offset="0.06" stopColor="#274a5c"/>
      <stop offset="0.56" stopColor="#32566a"/>
      <stop offset="1" stopColor="#365a6f"/>
    </linearGradient>
    <linearGradient id="linear-gradient-16" x1="124.56" y1="113.17" x2="124.56" y2="51.17" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#f9f574"/>
      <stop offset="0.2" stopColor="#f9f578"/>
      <stop offset="0.39" stopColor="#f8f683"/>
      <stop offset="0.58" stopColor="#f8f897"/>
      <stop offset="0.77" stopColor="#f7fbb2"/>
      <stop offset="0.96" stopColor="#f5fed5"/>
      <stop offset="1" stopColor="#f5ffde"/>
    </linearGradient>
  </defs>
  <rect id="bg" width="553.54" height="369.03" fill="url(#linear-gradient)"/>
  <g id="layers">
     <circle data-depth='-60' cx="124.56" cy="82.17" r="31" opacity="0.11" fill="#fff"/>
    <g id="six" data-depth='10'>
      <path d="M169.77,224.7s42-6.63,57.15-18.74c11.76-10.1,16-5.39,18.07-3.85s7.14,7.59,14.28,7.31,39.5,27,44.54,27.11-74,21.15-90.59,16.34S169.77,224.7,169.77,224.7Z" fill="url(#linear-gradient-2)"/>
      <path d="M254.77,218.51c-2-1-3-6-4-6-8.79-1-6.14-9.58-12.54-12.78-2.68.32-6.31,1.94-11.31,6.23-15.13,12.11-57.15,18.74-57.15,18.74s26.89,23.36,43.45,28.17c9,2.61,36.36-2.39,58.72-7.53C267,236,263,226.07,254.77,218.51Z" fill="url(#linear-gradient-3)"/>
      <path d="M303.81,236.53c-5-.1-37.39-27.4-44.54-27.11s-12.18-5.77-14.28-7.31c-1.21-.88-3.12-2.81-6.76-2.38,6.4,3.2,3.75,11.81,12.54,12.78,1,0,2,5,4,6C263,226.07,267,236,271.94,245.34,290.81,241,306.12,236.57,303.81,236.53Z" fill="url(#linear-gradient-4)"/>
      <path d="M553.54,179.82c-2.8-1.9-5.64-3.78-8.22-5.76-2-1.53-7.56-7.66-9.74-8-5.14-.89-12.64,9.84-15.76,13.43-5.07,5.85-9.64,12-15.4,17.57-4.53,4.37-10,15.35-16.7,16.7-5.22,1-12.63-4.93-17.09-7.7-6.89-4.28-13.13-8.84-19.52-13.72-5.89-4.48-9.3-9.21-14-14.93-2.61-3.18-6.51-7.61-10.6-9-6.44-2.21-3.8.55-8.59,1.81-10,2.62-9.11-9.51-18.15-10-6.8-.37-12.87,10.46-16.35,15.51-5.4,7.85-12.72,14.48-19.63,21.17-5.51,5.33-12.23,9.24-19.08,12.45-10.68,5-23.36,13-34.94,14.87l39.33,36.67c25.37,0,51.84,2.46,77-1.12,23.26-3.31,46.24-7.88,69.38-12.23,19.56-3.69,38.85-7.41,58.1-12.12Z" fill="url(#linear-gradient-5)"/>
      <path d="M470.63,206c-6.89-4.28-13.13-8.84-19.52-13.72-5.89-4.48-9.3-9.21-14-14.93-2.61-3.18-6.51-7.61-10.6-9-4.43-1.52-4.56-.69-5.77.39,4.94,1.78,7.54,7.54,9,12.75,6,17,16,30,25,45,6,9.73,15.34,16.11,21.76,24.57l18.91-3.58,10.74-2-19.69-31.62C481.39,213.87,474.75,208.59,470.63,206Z" fill="url(#linear-gradient-6)"/>
      <path d="M162.42,202.14c-12.66-6.87-25.2-16.23-37.35-24.11-6.32-4.09-9.76-5.52-17.14-3.18-10.23,3.24-9.3.63-16.92-6.15-7.16-6.37-11.07-5-19.06-.52a179.13,179.13,0,0,0-20.68,13.69C43.34,188,32.72,190.42,23.78,195,15.1,199.43,8.68,204.62,0,206.65v58.89c35.13.09,70.29.46,105.41,0,24.42-.34,48.86-2.66,73.48-2.66h54.88c5.76,0,36.38,4.07,39.36-2-19.56-12.14-40-20.76-60.36-32.31C196.16,219.05,179.38,211.35,162.42,202.14Z" fill="url(#linear-gradient-7)"/>
      <path d="M212.77,228.5c-16.61-9.45-33.39-17.15-50.35-26.36-12.66-6.87-25.2-16.23-37.35-24.11-6.32-4.09-9.76-5.52-17.14-3.18-3.31,1.05-5.44,1.48-7.08,1.36.84.24,1.46.69.92,2.3,5,0,10-1,14,1,8,4,5,16,11,22,16.77,19.57,35.28,36.54,45,61.41,2.37,0,4.74-.07,7.12-.07h54.88c5.76,0,36.38,4.07,39.36-2C253.57,248.67,233.1,240.05,212.77,228.5Z" fill="url(#linear-gradient-8)"/>
    </g>
    <g id="five" data-depth='20'>
      <path d="M553.54,200.28c-.26.1-.53.2-.79.28-5,1.64-9.53,1.63-14.75,1.62-11.64,0-23.07.22-34.41-1.31-6.52-.89-17.14-2.55-23.14.28-3.63,1.71-5.06,5-9.36,6.39-2.92,1-6.84.92-9.94,1.31a130,130,0,0,1-15.31.66c-6.49,0-8.38,1.61-14,4.65a192.13,192.13,0,0,1-28.88,12.13c-17.75,6-31-5.33-47.27-9.59-13.46-3.52-22.39-13.47-37-12.52-14.22.92-21.45,11.68-33.47,17.84-9.17,4.69-19.94,6.56-29.71,9.53s-19.21,6.9-28.92,10.33c-10.09,3.56-20.13,7.2-30.52,10.47-8,2.52-16.17,4.22-24.29,6.49-3.85,1.08-9.3,1.62-12.05,4.62,7.19,6.43,20.51,7.42,29.59,9.44,12.33,2.75,24.48,6,36.81,8.81,23.66,5.3,47.69,6.28,71.6,9.93,18.39,2.8,36.46,7,55,9.22,22.81,2.78,45.31,2.65,68.28,2.65,44.28,0,88.38,1.57,132.6,1.93Z" fill="url(#linear-gradient-9)"/>
      <path d="M386.77,257.51c-8-7-12-18-21-23-8-5-17-6-26-8-6-1-7-9-10-15-1.74-4.35-7.27-5.67-12-7.26C304.11,205.52,296.92,216,285.13,222c-9.17,4.69-19.94,6.56-29.71,9.53s-19.21,6.9-28.92,10.33c-10.09,3.56-20.13,7.2-30.52,10.47-8,2.52-16.17,4.22-24.29,6.49-3.85,1.08-9.3,1.62-12.05,4.62,7.19,6.43,20.51,7.42,29.59,9.44,12.33,2.75,24.48,6,36.81,8.81,23.66,5.3,47.69,6.28,71.6,9.93,18.39,2.8,36.46,7,55,9.22,22.81,2.78,45.31,2.65,68.28,2.65q8.38,0,16.76.07c-1.27-1.05-2.58-2.08-3.93-3.07C414.77,288.51,403.77,271.51,386.77,257.51Z" fill="url(#linear-gradient-10)"/>
      <path d="M553.54,304.19V200.28c-.26.1-.53.2-.79.28-5,1.64-9.53,1.63-14.75,1.62-11.64,0-23.07.22-34.41-1.31-6.52-.89-17.14-2.55-23.14.28-3.63,1.71-5.06,5-9.36,6.39-2.92,1-6.84.92-9.94,1.31a130,130,0,0,1-15.31.66c-6.49,0-8.38,1.61-14,4.65a192.13,192.13,0,0,1-28.88,12.13c-10.22,3.47-18.94,1.18-27.62-2.21a16.07,16.07,0,0,0,5.48,3.43C441.27,247.08,501,269.83,553.54,304.19Z" fill="url(#linear-gradient-11)"/>
      <path d="M380.77,227.51a16.07,16.07,0,0,1-5.48-3.43c-6.38-2.49-12.74-5.57-19.65-7.38-13.46-3.52-22.39-13.47-37-12.52l-.8.07c4.7,1.59,10.23,2.91,12,7.26,3,6,4,14,10,15,9,2,18,3,26,8,9,5,13,16,21,23,17,14,28,31,47,43,1.35,1,2.66,2,3.93,3.07,38.66.31,77.2,1.55,115.84,1.86v-1.25C501,269.83,441.27,247.08,380.77,227.51Z" fill="url(#linear-gradient-12)"/>
    </g>
    <path id="four" data-depth='30' d="M0,308.48l553.54-19.89V224.93c-21.8-4.37-81.95-14.58-119.1-2.75-46,14.65-96,44-143.34,38s-58.66-6.05-84-21.36-76.66-28.34-94-22.16c-14,5-86.1,22.55-113.1,29.06Z" fill="url(#linear-gradient-13)"/>
    <path id="three" data-depth='40' d="M489.77,271.51c-38-7.6-69.51-34.51-101.88-34.69.58-.23.34-.58.54-1.17.55,0,1.16.69,1.25-.4a1.85,1.85,0,0,0-.22-1c-.16-.29-.45-.35-.6-.6-.39-.65.43-2.41-.54-2.48-.06-.43.26-.69.21-1.12-.08-.72-.56-.34-.31-1.07.16-.46,1-1.83-.06-1.83A3,3,0,0,0,388,226c0-.1-.25-.14-.31-.4s.11-.49.1-.69c-.07-.63-.61-.91-.77-1.44-.11-.36-.06-.12-.05-.51,0-.23.18-.48.11-.77-.14-.5-.64-.36-.77-.95s.22-1.05,0-1.52c-.07-.18-.31-.09-.42-.39s0-.49,0-.69a3,3,0,0,0-.53-1,2.91,2.91,0,0,0-.11-2c-.31-.62-.54-.66-.67-.3a1.93,1.93,0,0,0-.24.39,2.92,2.92,0,0,0-.13,1.92.22.22,0,0,0,0,.08,2.06,2.06,0,0,0-.16.34,2.25,2.25,0,0,0-.3.68c0,.21.06.51,0,.7s-.35.2-.42.38a1.37,1.37,0,0,0,0,.67,2.42,2.42,0,0,0-.55,1.25.43.43,0,0,1-.15.55c-.07.29.11.54.11.78s0,.23,0,.32a2.24,2.24,0,0,0-.31.43,2.26,2.26,0,0,0-.15.41,1.58,1.58,0,0,0-.37.78c0,.2.13.55.1.7s-.27.29-.31.39a1.72,1.72,0,0,0-.11.7,1.44,1.44,0,0,0-.06.43c-.61,0-.51.58-.32,1.09a2.66,2.66,0,0,0-.13.45,1,1,0,0,0,.27,1,.73.73,0,0,0-.14.4c-.05.44.27.69.21,1.13-1,.07-.15,1.82-.54,2.47-.15.25-.43.31-.6.6a1.85,1.85,0,0,0-.22,1c.09,1.1.7.44,1.25.4.2.62-.07,1,.62,1.21a4.64,4.64,0,0,0,.45.12,53.5,53.5,0,0,0-8.11,1.38c-16.57,4.14-36.52,7.44-54.69,10.3-.25-.72.41-2.27-.5-2.34-.06-.43.26-.69.21-1.12-.08-.72-.56-.34-.31-1.07.16-.46,1-1.83-.06-1.83a3,3,0,0,0-.12-1.12c0-.1-.25-.14-.31-.4s.11-.49.1-.69c-.07-.63-.61-.91-.77-1.44-.11-.36-.06-.12-.05-.51,0-.23.18-.48.11-.77-.14-.5-.64-.36-.77-.95s.22-1.05,0-1.52c-.07-.18-.31-.09-.42-.39s0-.49,0-.69a3,3,0,0,0-.53-1,2.91,2.91,0,0,0-.11-2c-.31-.62-.54-.66-.67-.3a1.93,1.93,0,0,0-.24.39,2.92,2.92,0,0,0-.13,1.92.22.22,0,0,0,0,.08,2.06,2.06,0,0,0-.16.34,2.25,2.25,0,0,0-.3.68c0,.21.06.51,0,.7s-.35.2-.42.38a1.37,1.37,0,0,0,0,.67,2.42,2.42,0,0,0-.55,1.25.43.43,0,0,1-.15.55c-.07.29.11.54.11.78s0,.23,0,.32a2.24,2.24,0,0,0-.31.43,2.26,2.26,0,0,0-.15.41,1.58,1.58,0,0,0-.37.78c0,.2.13.55.1.7s-.27.29-.31.39a1.72,1.72,0,0,0-.11.7,1.44,1.44,0,0,0-.06.43c-.61,0-.51.58-.32,1.09a2.66,2.66,0,0,0-.13.45,1,1,0,0,0,.27,1,.73.73,0,0,0-.14.4c-.05.44.27.69.21,1.13-1,.07-.15,1.82-.54,2.47-.15.25-.43.31-.6.6a1.88,1.88,0,0,0-.19.55c-19,3-34.93,5.49-41.06,8.07-12.67,5.33-19.33-14-30.67-14-9.15,0-10.92,7.81-23.18,8a.85.85,0,0,0-.06-.17c-.08-.15-.22-.17-.3-.3-.18-.31.21-1.16-.26-1.2,0-.21.13-.33.11-.54s-.28-.17-.15-.53.47-.88,0-.88a1.59,1.59,0,0,0-.05-.55c0-.05-.13-.06-.16-.19s.06-.24.05-.34c0-.3-.29-.44-.37-.69s0-.07,0-.26.1-.23.06-.37-.31-.17-.37-.46.1-.51,0-.74-.15,0-.2-.19,0-.24,0-.33a1.89,1.89,0,0,0-.26-.51,1.4,1.4,0,0,0-.06-1c-.15-.3-.26-.32-.32-.14a.9.9,0,0,0-.12.19,1.34,1.34,0,0,0-.06.93l0,0c0,.06-.05.11-.08.16a1.22,1.22,0,0,0-.14.34c0,.1,0,.24,0,.33s-.17.1-.21.19a.61.61,0,0,0,0,.33,1.13,1.13,0,0,0-.27.6.27.27,0,0,0,0,.13.24.24,0,0,0-.09.14c0,.14.05.26.05.38s0,.11,0,.16a1.15,1.15,0,0,0-.15.2c0,.07-.05.14-.07.2a.79.79,0,0,0-.18.38c0,.1.07.27,0,.34s-.13.15-.15.19a.93.93,0,0,0-.05.34.49.49,0,0,0,0,.21c-.3,0-.25.28-.16.53a1.41,1.41,0,0,0-.06.22.5.5,0,0,0,.13.46.38.38,0,0,0-.07.2c0,.21.13.33.1.54-.47,0-.07.89-.26,1.21a.9.9,0,0,1-.2.19,54.63,54.63,0,0,1-6.38-1.12,76.72,76.72,0,0,1-13.81-4.59.83.83,0,0,0,.06-.26,1.32,1.32,0,0,0-.15-.71c-.12-.2-.32-.24-.42-.42-.27-.45.3-1.67-.38-1.72,0-.3.19-.48.15-.78-.06-.5-.39-.24-.21-.75.1-.31.67-1.27-.05-1.26a2.4,2.4,0,0,0-.08-.79c0-.07-.18-.09-.22-.27s.08-.35.07-.49c0-.43-.42-.63-.54-1s0-.09,0-.36.13-.34.07-.54-.44-.25-.53-.66.15-.73,0-1c-.05-.13-.22-.07-.29-.28s0-.34,0-.48a2.14,2.14,0,0,0-.37-.72,2,2,0,0,0-.08-1.38c-.21-.44-.37-.46-.46-.22a1.42,1.42,0,0,0-.17.27,2,2,0,0,0-.09,1.34l0,.06-.11.23a1.75,1.75,0,0,0-.2.48c0,.14,0,.35,0,.48s-.24.15-.29.27a.83.83,0,0,0,0,.47,1.63,1.63,0,0,0-.39.87.47.47,0,0,0,0,.17.4.4,0,0,0-.13.21c-.05.2.07.37.08.54s0,.16,0,.22a2,2,0,0,0-.22.3c0,.1-.07.19-.1.29a1,1,0,0,0-.25.54c0,.14.09.38.07.49s-.2.2-.22.27a1.24,1.24,0,0,0-.08.48,1.46,1.46,0,0,0,0,.31c-.43,0-.36.4-.22.76a1.89,1.89,0,0,0-.1.31.75.75,0,0,0,.2.66.41.41,0,0,0-.1.28c0,.3.19.48.14.78a.3.3,0,0,0-.25.15l-1.44-.75c-.12-.18-.3-.23-.41-.4-.27-.45.31-1.68-.37-1.73-.05-.31.18-.48.15-.79-.06-.5-.4-.24-.22-.75.11-.32.68-1.29-.05-1.28a2.19,2.19,0,0,0-.08-.79c0-.07-.18-.1-.22-.28s.08-.35.07-.49c0-.44-.43-.63-.54-1s0-.09,0-.37.14-.33.08-.53c-.1-.36-.45-.26-.53-.67s.15-.74,0-1.07c0-.12-.22-.06-.29-.27s0-.34,0-.49a2.14,2.14,0,0,0-.37-.72,2,2,0,0,0-.08-1.4c-.22-.44-.38-.46-.47-.21a1.62,1.62,0,0,0-.17.27,2,2,0,0,0-.09,1.34l0,.06c0,.09-.08.16-.11.24a1.67,1.67,0,0,0-.21.48c0,.14,0,.36,0,.49s-.25.14-.3.27a1.06,1.06,0,0,0,0,.47,1.8,1.8,0,0,0-.39.87.48.48,0,0,0,0,.18.44.44,0,0,0-.13.21c-.05.21.08.38.08.54s0,.17,0,.23a2,2,0,0,0-.22.3c0,.1-.07.2-.1.29a1.13,1.13,0,0,0-.26.55c0,.14.09.38.07.49s-.19.21-.22.28a1.21,1.21,0,0,0-.07.48.78.78,0,0,0,0,.31c-.44,0-.37.41-.23.76a1.5,1.5,0,0,0-.09.32.7.7,0,0,0,.19.66.51.51,0,0,0-.08.18c-.76-.37-1.55-.75-2.35-1.11a.84.84,0,0,0-.1-.42c-.08-.14-.22-.17-.29-.29-.19-.31.21-1.17-.26-1.2,0-.21.12-.34.1-.55s-.27-.16-.15-.52.47-.89,0-.88a1.82,1.82,0,0,0-.06-.55c0-.05-.12-.07-.15-.2s.05-.23,0-.33c0-.31-.29-.44-.37-.7s0-.06,0-.25.09-.23.05-.37-.31-.18-.37-.47.1-.51,0-.73-.16,0-.21-.19,0-.24,0-.34a1.49,1.49,0,0,0-.26-.5,1.35,1.35,0,0,0-.06-1c-.15-.3-.26-.32-.32-.15a1.39,1.39,0,0,0-.11.19,1.4,1.4,0,0,0-.07.93.08.08,0,0,0,0,.05.48.48,0,0,0-.08.16,1.09,1.09,0,0,0-.15.33c0,.1,0,.25,0,.34s-.17.1-.21.19a.69.69,0,0,0,0,.32,1.16,1.16,0,0,0-.27.61.5.5,0,0,0,0,.12.32.32,0,0,0-.09.15c0,.14,0,.26,0,.37s0,.11,0,.16a.76.76,0,0,0-.15.21.84.84,0,0,0-.08.2.7.7,0,0,0-.17.38c0,.09.06.26,0,.33s-.13.15-.15.2a.88.88,0,0,0,0,.33,1.46,1.46,0,0,0,0,.22c-.3,0-.25.28-.15.53a1,1,0,0,0-.07.22.51.51,0,0,0,.13.46.39.39,0,0,0-.07.19c0,.21.14.34.1.55a.23.23,0,0,0-.18.11,85.75,85.75,0,0,0-18.49-4.59c-27.33-4-52,1.33-73.33,0-2.82-.18-5.47-.43-8-.73a3.25,3.25,0,0,1,.09-.51c.38,0,.81.48.87-.29a1.24,1.24,0,0,0-.15-.71c-.12-.21-.31-.24-.42-.42-.27-.46.3-1.69-.38-1.74,0-.31.19-.48.15-.79-.06-.5-.39-.24-.22-.75.11-.32.69-1.28,0-1.28a2.43,2.43,0,0,0-.08-.79c0-.07-.18-.09-.23-.28s.09-.34.07-.48c0-.44-.42-.64-.53-1s-.05-.09,0-.36.13-.34.08-.54c-.1-.35-.45-.25-.54-.67s.15-.74,0-1.06c0-.13-.21-.07-.29-.28s0-.34,0-.48a2.1,2.1,0,0,0-.37-.73,2,2,0,0,0-.08-1.4c-.21-.43-.38-.46-.46-.21a1.42,1.42,0,0,0-.17.27,2,2,0,0,0-.1,1.35l0,.06a1.58,1.58,0,0,0-.11.23,1.48,1.48,0,0,0-.21.49c0,.14,0,.35,0,.48s-.25.15-.29.27a.83.83,0,0,0,0,.47,1.66,1.66,0,0,0-.39.88.55.55,0,0,0,0,.18.39.39,0,0,0-.12.21c-.06.2.07.37.07.54s0,.16,0,.23a1.61,1.61,0,0,0-.22.3,1,1,0,0,0-.1.29,1,1,0,0,0-.26.55c0,.14.09.38.07.48s-.2.21-.23.28a1.26,1.26,0,0,0-.07.49,1.36,1.36,0,0,0,0,.3c-.43,0-.36.41-.23.77a1.93,1.93,0,0,0-.09.31.71.71,0,0,0,.2.67.46.46,0,0,0-.11.28c0,.31.2.48.15.79-.68,0-.11,1.28-.38,1.74-.1.17-.3.21-.42.42a1.29,1.29,0,0,0-.15.59,91.3,91.3,0,0,1-14.79-3.78.28.28,0,0,0,.05-.08c0-.06,0-.22,0-.27s.19,0,.26-.1.34-.23.24-.55a3.09,3.09,0,0,0,.67-.15c.49-.16.29-.41.44-.84.38,0,.81.48.87-.29a1.24,1.24,0,0,0-.15-.71c-.12-.21-.31-.25-.42-.42-.27-.46.3-1.69-.38-1.74-.05-.31.19-.48.15-.79-.06-.5-.39-.24-.22-.75.11-.32.69-1.29,0-1.28a2.43,2.43,0,0,0-.08-.79c0-.07-.18-.09-.23-.28s.09-.35.07-.48c0-.45-.42-.64-.53-1s0-.09,0-.36.13-.34.08-.54-.45-.25-.54-.67.15-.74,0-1.07c0-.12-.21-.06-.29-.27s0-.34,0-.49a2.14,2.14,0,0,0-.37-.72,2,2,0,0,0-.08-1.4c-.21-.44-.38-.46-.46-.21a1.42,1.42,0,0,0-.17.27,2,2,0,0,0-.1,1.34l0,.07a1.2,1.2,0,0,0-.11.23,1.53,1.53,0,0,0-.21.48c0,.15,0,.36,0,.49s-.25.15-.29.27a.83.83,0,0,0,0,.47,1.63,1.63,0,0,0-.39.87.58.58,0,0,0,0,.19.39.39,0,0,0-.12.21c-.06.2.07.37.07.54s0,.16,0,.23a1.34,1.34,0,0,0-.22.3,1,1,0,0,0-.1.28,1,1,0,0,0-.26.56c0,.13.09.38.07.48s-.2.21-.23.28a1.24,1.24,0,0,0-.07.48,1.46,1.46,0,0,0,0,.31c-.43,0-.36.41-.23.77a1.93,1.93,0,0,0-.09.31.71.71,0,0,0,.2.67.46.46,0,0,0-.11.28c0,.31.2.48.15.79-.68.05-.11,1.28-.38,1.74-.1.17-.3.21-.42.42a1.32,1.32,0,0,0-.15.71c.06.77.49.31.87.29.15.43-.05.68.44.84a3.09,3.09,0,0,0,.67.15.49.49,0,0,0,0,.12,83,83,0,0,1-13.18-6.48c-7.1-4.26-25.62,1.15-35.77,4.64V333.33l536.44-14.48S533.1,280.18,489.77,271.51Z" fill="url(#linear-gradient-14)"/>
    <path id="two" data-depth='50' d="M545.39,249.33c0-.1,0-.19,0-.24s.27,0,.38-.13.47-.34.33-.79a5.13,5.13,0,0,0,1-.21c.69-.23.41-.59.62-1.2.55,0,1.16.69,1.25-.41a1.85,1.85,0,0,0-.22-1c-.16-.29-.45-.35-.6-.6-.39-.65.43-2.4-.54-2.47-.06-.44.26-.69.21-1.13-.08-.72-.56-.34-.31-1.07.16-.45,1-1.83-.06-1.82a3.07,3.07,0,0,0-.12-1.13c0-.1-.25-.13-.31-.4s.11-.49.1-.69c-.07-.63-.61-.9-.77-1.43-.11-.37-.06-.13,0-.52,0-.23.18-.48.11-.77-.14-.5-.64-.36-.77-1s.22-1,0-1.52c-.07-.18-.31-.09-.42-.39s0-.48,0-.69a3,3,0,0,0-.53-1,2.91,2.91,0,0,0-.11-2c-.31-.62-.54-.66-.67-.3a2.28,2.28,0,0,0-.24.39,2.92,2.92,0,0,0-.13,1.92.22.22,0,0,0,0,.08,2.06,2.06,0,0,0-.16.34,2.2,2.2,0,0,0-.3.69c0,.2.06.5,0,.69s-.35.21-.42.39a1.36,1.36,0,0,0,0,.67,2.39,2.39,0,0,0-.55,1.24.57.57,0,0,0,0,.26.6.6,0,0,0-.19.3c-.07.28.11.53.11.77s0,.23,0,.32a2.24,2.24,0,0,0-.31.43,2.26,2.26,0,0,0-.15.41,1.61,1.61,0,0,0-.37.79c0,.19.13.54.1.69s-.27.3-.31.39a1.72,1.72,0,0,0-.11.7,1.44,1.44,0,0,0-.06.43c-.61,0-.51.58-.32,1.1a2.3,2.3,0,0,0-.13.44,1,1,0,0,0,.27.95.74.74,0,0,0-.14.41c-.05.43.27.68.21,1.12-1,.07-.15,1.82-.54,2.47-.15.26-.43.31-.6.61a1.81,1.81,0,0,0-.22,1c.09,1.1.7.44,1.25.41.2.61-.07,1,.62,1.2a4.44,4.44,0,0,0,1,.21.68.68,0,0,0,0,.19c-12-3.28-27-8-36.34-13.38-.46-.26-1-.51-1.49-.75,1,.14,2.08,1,2.25-.71a2.72,2.72,0,0,0-.42-1.72c-.32-.49-.87-.59-1.17-1-.75-1.1.84-4.06-1-4.18-.13-.74.51-1.16.41-1.9-.17-1.21-1.09-.57-.6-1.81.3-.77,1.89-3.09-.13-3.07a5,5,0,0,0-.22-1.91c-.08-.16-.5-.22-.61-.67-.07-.24.22-.83.18-1.16-.11-1.07-1.18-1.54-1.48-2.43-.22-.62-.12-.22-.11-.87,0-.39.37-.81.22-1.3-.27-.84-1.24-.6-1.48-1.61-.2-.78.41-1.77.06-2.56-.13-.3-.6-.15-.81-.66-.13-.31.06-.82,0-1.16a5,5,0,0,0-1-1.75,4.28,4.28,0,0,0-.23-3.37c-.6-1.05-1-1.11-1.29-.51a3.48,3.48,0,0,0-.46.66,4.24,4.24,0,0,0-.27,3.23L496,204a4.75,4.75,0,0,0-.32.57,3.82,3.82,0,0,0-.58,1.16c-.08.34.12.85,0,1.16-.21.51-.68.36-.82.66a2,2,0,0,0-.05,1.13,3.84,3.84,0,0,0-1.08,2.11,1.06,1.06,0,0,0,.08.43,1,1,0,0,0-.36.5c-.15.49.21.91.21,1.3s.07.4,0,.56a4.2,4.2,0,0,0-.6.72,2.77,2.77,0,0,0-.28.7,2.3,2.3,0,0,0-.72,1.32c0,.33.25.92.19,1.16-.11.45-.53.51-.61.67a2.75,2.75,0,0,0-.21,1.17,2.5,2.5,0,0,0-.11.74c-1.19,0-1,1-.62,1.84a4.48,4.48,0,0,0-.27.76,1.57,1.57,0,0,0,.55,1.6,1.14,1.14,0,0,0-.29.69c-.1.73.54,1.15.41,1.9-1.75.11-.49,2.69-.92,3.92-26-3.12-68.85,1.83-83.11,7.3-2.37.91,1.4,3.05-11.17-1.25-3.24-1.1-18.42-8.24-28.75-14.57s-19.75,15.82-29.75,31.32-17,26.5-22.5,31-58.17,12-72.17,7.5-2-7-19.33-8.66a34.65,34.65,0,0,1-16.3-5.61l-.12-.12c-.63-.92.71-3.43-.88-3.53-.11-.62.43-1,.35-1.6-.14-1-.93-.49-.51-1.53.26-.65,1.6-2.61-.11-2.6a4.06,4.06,0,0,0-.19-1.61c-.06-.14-.42-.19-.51-.57-.06-.21.19-.7.16-1-.1-.9-1-1.3-1.26-2.05-.18-.53-.1-.19-.09-.74,0-.33.31-.69.18-1.1-.23-.71-1-.51-1.25-1.36-.16-.66.35-1.5.06-2.16-.12-.26-.51-.13-.69-.56-.11-.26,0-.69,0-1a4.08,4.08,0,0,0-.86-1.48,3.65,3.65,0,0,0-.19-2.85c-.51-.88-.89-.94-1.09-.43a2.91,2.91,0,0,0-.4.55,3.64,3.64,0,0,0-.22,2.74l-.08.13a4.66,4.66,0,0,0-.27.47,3.22,3.22,0,0,0-.48,1c-.07.29.09.72,0,1-.18.43-.58.3-.7.56a1.61,1.61,0,0,0,0,1,3.27,3.27,0,0,0-.92,1.78,1.16,1.16,0,0,0,.07.37.83.83,0,0,0-.3.42c-.13.41.17.77.18,1.1s.05.33,0,.47a3.48,3.48,0,0,0-.51.61,2.29,2.29,0,0,0-.24.59,2.1,2.1,0,0,0-.61,1.12c0,.28.22.77.16,1-.09.38-.45.43-.51.57a22.87,22.87,0,0,0-.27,1.61c-1,0-.85.83-.53,1.56l-.12.28c-3.33.13-5.91,1.13-10.39,2.69-12.83,4.48-14.88-5.22-16-8-4.5-11.16-10-12-17.5-7.5s-10.5.5-17.5-9.5a17.81,17.81,0,0,0-1.57-1.91,2.47,2.47,0,0,0-.3-1.3c-.22-.4-.61-.47-.82-.82-.53-.88.59-3.28-.73-3.37-.09-.6.36-.95.29-1.54-.12-1-.77-.47-.43-1.47.22-.61,1.34-2.49-.09-2.48a4.39,4.39,0,0,0-.15-1.54c-.06-.13-.35-.18-.43-.54,0-.2.16-.67.13-.94-.08-.86-.83-1.24-1-2-.14-.5-.08-.18-.07-.71,0-.31.26-.66.15-1-.19-.68-.87-.49-1-1.3-.13-.63.3-1.43,0-2.07-.1-.24-.43-.12-.58-.53-.09-.25.05-.67,0-.94a4.06,4.06,0,0,0-.72-1.42,4,4,0,0,0-.15-2.72c-.43-.85-.74-.9-.91-.41a2.76,2.76,0,0,0-.33.53,3.87,3.87,0,0,0-.18,2.61.75.75,0,0,0-.07.12,3.81,3.81,0,0,0-.22.46,3.2,3.2,0,0,0-.41.94c0,.28.08.69,0,.94-.15.41-.48.29-.57.54a1.74,1.74,0,0,0,0,.91,3.35,3.35,0,0,0-.76,1.7,1.34,1.34,0,0,0,0,.35.86.86,0,0,0-.24.41c-.11.39.14.73.14,1s0,.31,0,.44a3.31,3.31,0,0,0-.42.59,2.88,2.88,0,0,0-.2.56,2,2,0,0,0-.5,1.07c0,.27.17.74.13.94-.08.36-.37.41-.43.54a2.6,2.6,0,0,0-.15.95,2.25,2.25,0,0,0-.07.6c-.84,0-.71.79-.44,1.49a3.86,3.86,0,0,0-.19.6,1.27,1.27,0,0,0,.25,1.12c-1.67-.75-3.41-1.44-5.2-2a.1.1,0,0,1,0-.07c.1-.11.26,0,.37-.13s.47-.34.33-.79a4.53,4.53,0,0,0,1-.21c.68-.22.41-.59.61-1.2.55,0,1.16.69,1.25-.41a1.83,1.83,0,0,0-.21-1c-.17-.3-.46-.35-.61-.61-.38-.64.43-2.4-.53-2.47-.07-.44.26-.69.21-1.12-.09-.72-.57-.34-.31-1.08.15-.45,1-1.83-.07-1.82a3.34,3.34,0,0,0-.11-1.13c0-.09-.26-.13-.32-.39s.12-.5.1-.69c-.06-.63-.61-.91-.77-1.44-.11-.36-.06-.13,0-.51s.19-.49.11-.77c-.14-.5-.64-.36-.76-1s.21-1.05,0-1.51c-.07-.18-.31-.09-.42-.4s0-.48,0-.69a3.13,3.13,0,0,0-.52-1,2.88,2.88,0,0,0-.12-2c-.31-.63-.54-.66-.66-.31a1.65,1.65,0,0,0-.24.39,2.86,2.86,0,0,0-.14,1.92l0,.09a2.49,2.49,0,0,0-.16.33,2.58,2.58,0,0,0-.3.69c0,.2.06.51,0,.69s-.36.21-.43.39a1.26,1.26,0,0,0,0,.67,2.36,2.36,0,0,0-.56,1.24.75.75,0,0,0,0,.26.59.59,0,0,0-.18.3c-.08.29.1.54.11.77s0,.23,0,.33a2.76,2.76,0,0,0-.31.42,3.52,3.52,0,0,0-.15.42,1.45,1.45,0,0,0-.36.78c0,.2.13.55.09.69s-.27.3-.31.4a1.89,1.89,0,0,0-.11.69,2.75,2.75,0,0,0-.06.44c-.61,0-.51.58-.32,1.09a2.21,2.21,0,0,0-.13.45,1,1,0,0,0,.28,1,.63.63,0,0,0-.15.4c0,.44.28.69.21,1.13-1,.07-.15,1.82-.54,2.47-.15.25-.43.31-.6.6a1.85,1.85,0,0,0-.22,1c.1,1.09.71.44,1.25.4.15.45,0,.76.25,1A47,47,0,0,0,97,233.66c0-.32-.14-.56-.48-.59-.07-.44.26-.69.21-1.12-.08-.72-.56-.34-.31-1.07.16-.46,1-1.84-.06-1.83a3.5,3.5,0,0,0-.12-1.12c0-.1-.25-.14-.31-.4s.11-.49.09-.69c-.06-.63-.6-.91-.76-1.44-.11-.36-.06-.13,0-.51s.18-.49.1-.77c-.13-.5-.63-.36-.76-1s.22-1,0-1.51c-.07-.18-.31-.09-.42-.39s0-.49,0-.69a2.93,2.93,0,0,0-.53-1,2.83,2.83,0,0,0-.12-2c-.3-.62-.53-.66-.66-.31a2.77,2.77,0,0,0-.24.39,3,3,0,0,0-.14,1.92l0,.09a2.59,2.59,0,0,0-.17.33,2.26,2.26,0,0,0-.29.69c-.05.2.06.51,0,.69s-.35.21-.42.39a1.37,1.37,0,0,0,0,.67,2.44,2.44,0,0,0-.56,1.24,1,1,0,0,0,0,.26.67.67,0,0,0-.18.3c-.08.29.11.54.11.77s0,.23,0,.33a2,2,0,0,0-.31.43,1.56,1.56,0,0,0-.15.41,1.46,1.46,0,0,0-.37.78c0,.2.13.55.1.69s-.28.3-.32.4a1.89,1.89,0,0,0-.1.69,1.56,1.56,0,0,0-.06.44c-.61,0-.51.58-.32,1.09a4,4,0,0,0-.14.45,1,1,0,0,0,.28.95.81.81,0,0,0-.15.4c-.05.44.28.69.21,1.13-.72.05-.45,1-.42,1.8a19.81,19.81,0,0,0-2,.78c-13,6.18-30.5,11.32-49.5,5.32C24.63,236.91,8.63,233.41,0,231.65v93l184.77,12.45,368.77-41.3V251.39C551.21,250.83,548.44,250.13,545.39,249.33Z" fill="url(#linear-gradient-15)"/>
    <g id="one" data-depth='60'>
      <path d="M519.89,267.66a3.38,3.38,0,0,1,.79-1c.32-.27,1,.18,1.37,0a6.05,6.05,0,0,0,1.56-1.62c.26-.31-.22-1.08.06-1.36s1.11-.05,1.56-.44c.78-.68,2-1.16,1.4-2.7a23,23,0,0,0,4-.7c2.88-.78,1.73-2,2.58-4.1,2.29.1,4.83,2.35,5.23-1.39a5.3,5.3,0,0,0-.91-3.46c-.7-1-1.89-1.19-2.52-2.05-1.62-2.21,1.8-8.17-2.24-8.41-.29-1.5,1.09-2.35.88-3.83-.36-2.45-2.35-1.16-1.3-3.66.66-1.54,4.08-6.23-.28-6.19a9.19,9.19,0,0,0-.47-3.85c-.17-.33-1.07-.45-1.32-1.35-.13-.49.49-1.68.41-2.35-.25-2.14-2.54-3.09-3.21-4.89-.45-1.24-.24-.43-.21-1.75,0-.79.78-1.64.45-2.62-.58-1.7-2.66-1.22-3.18-3.25-.41-1.57.9-3.57.14-5.15-.29-.62-1.3-.31-1.76-1.34-.27-.62.15-1.65,0-2.34a10.06,10.06,0,0,0-2.21-3.53,8.17,8.17,0,0,0-.49-6.78c-1.29-2.12-2.25-2.25-2.77-1a6.69,6.69,0,0,0-1,1.32,8.18,8.18,0,0,0-.58,6.53l-.2.3a8.64,8.64,0,0,0-.67,1.14,7.33,7.33,0,0,0-1.25,2.34c-.17.69.25,1.73,0,2.35-.46,1-1.46.72-1.76,1.33a3.68,3.68,0,0,0-.11,2.28c-1.12,1.36-2.31,2.68-2.34,4.23a2.44,2.44,0,0,0,.18.89,2,2,0,0,0-.77,1c-.33,1,.44,1.83.46,2.62,0,1,.13.79,0,1.11a8.75,8.75,0,0,0-1.3,1.46,6.84,6.84,0,0,0-.61,1.4,4.7,4.7,0,0,0-1.53,2.67c-.08.67.54,1.85.4,2.35-.24.9-1.14,1-1.32,1.35a5.41,5.41,0,0,0-.44,2.36,5,5,0,0,0-.24,1.49c-2.57.08-2.15,2-1.34,3.71a7.52,7.52,0,0,0-.57,1.52c-.41,1.71.43,2.43,1.17,3.23a2.25,2.25,0,0,0-.62,1.38c-.21,1.48,1.16,2.33.88,3.83-4,.24-.62,6.21-2.24,8.41-.64.87-1.83,1.06-2.53,2.06a5.28,5.28,0,0,0-.9,3.46c.39,3.73,2.94,1.49,5.22,1.38.85,2.09-.29,3.32,2.58,4.1a23.25,23.25,0,0,0,4,.7c-.58,1.54.61,2,1.4,2.7.45.39,1.14,0,1.55.45s-.2,1,.06,1.35.53.68.76.94c-5.6-1.46-11.61-3.3-18-5.64-10.17-3.71-19.75-7.69-28.84-11.39.09-.15.19-.31.32-.5s-.16-.95.05-1.2.79-.05,1.12-.39c.56-.6,1.42-1,1-2.38a14,14,0,0,0,2.9-.62c2.07-.69,1.24-1.78,1.85-3.62,1.65.09,3.48,2.07,3.76-1.23a5.45,5.45,0,0,0-.65-3c-.5-.88-1.36-1.05-1.82-1.81-1.16-2,1.3-7.22-1.61-7.43-.2-1.33.79-2.08.64-3.39-.26-2.16-1.7-1-.93-3.23.47-1.36,2.93-5.49-.21-5.46a9.74,9.74,0,0,0-.34-3.4c-.12-.29-.77-.4-.94-1.19-.1-.44.35-1.48.29-2.08-.18-1.89-1.83-2.73-2.31-4.32-.32-1.09-.17-.38-.15-1.54,0-.7.56-1.46.32-2.32-.41-1.5-1.91-1.08-2.29-2.86-.29-1.4.65-3.16.11-4.56-.21-.54-.94-.27-1.27-1.18-.2-.54.11-1.46,0-2.07a9.42,9.42,0,0,0-1.58-3.11,8.71,8.71,0,0,0-.36-6c-.93-1.87-1.61-2-2-.92a5.77,5.77,0,0,0-.72,1.17,8.63,8.63,0,0,0-.41,5.76l-.15.27a7.53,7.53,0,0,0-.48,1,7,7,0,0,0-.9,2.07c-.12.61.18,1.53,0,2.07-.33.91-1.05.64-1.27,1.18a4,4,0,0,0-.08,2c-.8,1.2-1.66,2.37-1.68,3.74a2.45,2.45,0,0,0,.13.78,1.72,1.72,0,0,0-.55.89c-.24.87.31,1.62.33,2.32s.09.7,0,1a7.89,7.89,0,0,0-.93,1.29,6.56,6.56,0,0,0-.44,1.24,4.49,4.49,0,0,0-1.11,2.35c-.05.6.39,1.64.3,2.08-.18.79-.83.9-1,1.19a5.51,5.51,0,0,0-.32,2.08,5,5,0,0,0-.17,1.32c-1.85.07-1.55,1.74-1,3.28a7.33,7.33,0,0,0-.4,1.34,3,3,0,0,0,.83,2.85,2.25,2.25,0,0,0-.44,1.22c-.16,1.32.83,2.07.63,3.39-2.91.21-.45,5.48-1.61,7.43-.46.76-1.31.93-1.82,1.81a5.56,5.56,0,0,0-.65,3.06c.28,3.3,2.11,1.31,3.76,1.22.52,1.58,0,2.59,1.13,3.29a172.78,172.78,0,0,0-22.26-7.06c.43-.39.21-.93.5-1.71,1.06.06,2.25,1.17,2.43-.68a2.78,2.78,0,0,0-.42-1.72c-.33-.49-.88-.59-1.17-1-.75-1.09.83-4.05-1-4.17-.14-.74.51-1.16.4-1.9-.16-1.21-1.09-.58-.6-1.81.31-.77,1.9-3.09-.13-3.07a4.77,4.77,0,0,0-.22-1.91c-.07-.16-.5-.23-.61-.67-.06-.25.23-.83.19-1.17-.12-1.06-1.18-1.53-1.49-2.42-.21-.62-.11-.22-.1-.87,0-.39.37-.82.21-1.3-.27-.85-1.24-.61-1.48-1.61-.19-.78.42-1.77.07-2.56-.14-.31-.6-.15-.82-.66-.13-.31.07-.82,0-1.16a5,5,0,0,0-1-1.75,4.32,4.32,0,0,0-.22-3.37c-.6-1-1.05-1.11-1.29-.51a3.33,3.33,0,0,0-.47.65,4.31,4.31,0,0,0-.26,3.24,1.3,1.3,0,0,1-.1.15,3.51,3.51,0,0,0-.31.56,3.75,3.75,0,0,0-.58,1.17c-.08.34.12.85,0,1.16-.22.51-.68.36-.82.66a1.88,1.88,0,0,0-.05,1.13,3.86,3.86,0,0,0-1.09,2.1,1.27,1.27,0,0,0,.08.44,1,1,0,0,0-.35.5c-.16.48.2.91.21,1.3s.06.39,0,.55a4.51,4.51,0,0,0-.6.72,3.71,3.71,0,0,0-.29.7,2.41,2.41,0,0,0-.71,1.32c0,.34.25.92.19,1.17-.11.45-.54.51-.62.67a2.91,2.91,0,0,0-.2,1.17,2.45,2.45,0,0,0-.11.74c-1.2,0-1,1-.63,1.84a4.7,4.7,0,0,0-.26.75,1.59,1.59,0,0,0,.54,1.61,1.11,1.11,0,0,0-.28.68c-.1.74.54,1.16.4,1.9-1.87.12-.29,3.08-1,4.18-.29.42-.85.52-1.17,1a2.78,2.78,0,0,0-.42,1.72l0,.19a47.55,47.55,0,0,0-27.1,7.55c-6.11,3.88-12,7.55-17.86,11,.17-1.93.33-3.82-1.39-3.94-.2-1.33.79-2.08.63-3.39-.25-2.16-1.69-1-.93-3.22.47-1.37,2.94-5.5-.2-5.47a9.77,9.77,0,0,0-.34-3.4c-.12-.29-.77-.4-.95-1.19-.09-.44.35-1.48.3-2.08-.19-1.89-1.83-2.72-2.31-4.32-.33-1.09-.17-.38-.16-1.54,0-.7.57-1.46.33-2.32-.42-1.5-1.91-1.08-2.29-2.86-.3-1.4.65-3.16.1-4.56-.21-.54-.93-.27-1.26-1.18-.2-.54.1-1.46,0-2.07a9.26,9.26,0,0,0-1.59-3.11,8.65,8.65,0,0,0-.35-6c-.93-1.87-1.62-2-2-.92a5.77,5.77,0,0,0-.72,1.17,8.63,8.63,0,0,0-.41,5.76l-.15.27a7.65,7.65,0,0,0-.49,1,7.28,7.28,0,0,0-.89,2.07c-.13.61.18,1.53,0,2.08-.33.9-1.06.63-1.27,1.17a3.89,3.89,0,0,0-.08,2c-.8,1.21-1.66,2.37-1.68,3.74a2.77,2.77,0,0,0,.12.78,1.78,1.78,0,0,0-.54.89c-.24.87.31,1.62.32,2.32s.1.7,0,1a6.84,6.84,0,0,0-.93,1.29,6.14,6.14,0,0,0-.44,1.24,4.49,4.49,0,0,0-1.11,2.35c-.05.6.39,1.64.29,2.08-.17.79-.82.9-.94,1.19a5.73,5.73,0,0,0-.33,2.09,5.85,5.85,0,0,0-.17,1.31c-1.85.07-1.54,1.74-1,3.28a7.31,7.31,0,0,0-.41,1.34,3,3,0,0,0,.84,2.86,2.26,2.26,0,0,0-.45,1.22c-.15,1.31.84,2.06.64,3.38-2.91.21-.45,5.48-1.62,7.43-.45.76-1.31.93-1.81,1.81a5.47,5.47,0,0,0-.65,3.06c.28,3.3,2.11,1.31,3.76,1.22a8.2,8.2,0,0,1,.31,1.79,169.07,169.07,0,0,1-55,14.53l-.63.05c.08-.89.17-1.78-.62-1.84-.1-.6.35-.94.28-1.53-.11-1-.76-.47-.42-1.47.22-.62,1.33-2.49-.09-2.48a4.32,4.32,0,0,0-.16-1.54c-.05-.14-.35-.19-.43-.54,0-.2.16-.68.14-.95-.09-.86-.83-1.23-1-2-.15-.5-.08-.17-.07-.7,0-.32.26-.66.15-1.05-.19-.68-.87-.49-1-1.3-.14-.64.29-1.44,0-2.07-.09-.25-.42-.13-.57-.54-.09-.25.05-.66,0-.94a4.19,4.19,0,0,0-.72-1.41,3.9,3.9,0,0,0-.16-2.72c-.42-.85-.73-.9-.9-.42a3.12,3.12,0,0,0-.33.53,4,4,0,0,0-.19,2.62l-.06.12a3.94,3.94,0,0,0-.23.46,3.33,3.33,0,0,0-.4.94c-.06.27.08.69,0,.94-.15.41-.48.29-.58.53a1.89,1.89,0,0,0,0,.92,3.16,3.16,0,0,0-.76,1.69,1,1,0,0,0,.05.36.86.86,0,0,0-.25.4c-.11.39.15.74.15,1s.05.32,0,.45a3.41,3.41,0,0,0-.43.58,4.3,4.3,0,0,0-.2.57,2.09,2.09,0,0,0-.5,1.07c0,.27.18.74.14.94-.08.36-.38.41-.43.54a2.56,2.56,0,0,0-.15.95,2.63,2.63,0,0,0-.08.59c-.84,0-.7.79-.44,1.49a4.42,4.42,0,0,0-.18.61,1.37,1.37,0,0,0,.38,1.3.93.93,0,0,0-.2.55c-.07.6.38.94.28,1.54-.83.06-.69,1-.61,2-27.79-1.59-25.21-22-42.19-16.6-19,6.08-20.5,38.3-55.5,33.28a81.24,81.24,0,0,1-25.41-8.46c.18-2.09.53-4.32-1.34-4.46-.2-1.32.79-2.07.63-3.38-.25-2.16-1.69-1-.93-3.23.47-1.36,2.94-5.5-.2-5.47a9.71,9.71,0,0,0-.34-3.39c-.12-.29-.77-.4-1-1.19-.09-.44.35-1.49.3-2.08-.19-1.89-1.83-2.73-2.31-4.32-.33-1.1-.17-.38-.16-1.55,0-.7.57-1.45.33-2.31-.42-1.51-1.91-1.08-2.29-2.87-.3-1.39.65-3.15.1-4.55-.21-.55-.93-.27-1.26-1.18-.2-.55.1-1.46,0-2.07a9.31,9.31,0,0,0-1.59-3.12,8.66,8.66,0,0,0-.35-6c-.93-1.87-1.62-2-2-.91a5.77,5.77,0,0,0-.72,1.17,8.63,8.63,0,0,0-.41,5.76c-.05.09-.1.17-.15.27a7.08,7.08,0,0,0-.49,1,7.28,7.28,0,0,0-.89,2.07c-.13.61.18,1.52,0,2.07-.33.91-1.06.64-1.27,1.18a3.89,3.89,0,0,0-.08,2c-.8,1.2-1.66,2.37-1.68,3.74a2.89,2.89,0,0,0,.12.78,1.78,1.78,0,0,0-.54.89c-.24.86.31,1.62.32,2.32,0,.85.1.69,0,1a7.16,7.16,0,0,0-.93,1.28,6.22,6.22,0,0,0-.44,1.25,4.45,4.45,0,0,0-1.11,2.35c-.05.59.39,1.64.29,2.08-.17.79-.82.9-.94,1.19a5.64,5.64,0,0,0-.33,2.08,6,6,0,0,0-.17,1.32,1.28,1.28,0,0,0-1.4,1.55c-12.06-8.77-22.66-17.37-32.4-20.69-10.1-3.44-34.3,7.08-58,18.91.23-3.64,1.22-7.95-2.11-8.19-.33-2.15,1.28-3.37,1-5.51-.41-3.51-2.75-1.66-1.51-5.25.76-2.21,4.77-8.94-.34-8.89,0-2,.1-4-.54-5.52-.2-.48-1.26-.65-1.55-1.94-.15-.72.57-2.41.48-3.38-.3-3.08-3-4.43-3.75-7-.53-1.78-.28-.62-.25-2.51,0-1.14.92-2.36.53-3.76-.68-2.45-3.12-1.76-3.73-4.66-.48-2.27,1.06-5.14.17-7.41-.34-.89-1.52-.45-2.06-1.92-.32-.89.18-2.38,0-3.37a15,15,0,0,0-2.58-5.07,14.12,14.12,0,0,0-.57-9.74c-1.51-3-2.63-3.23-3.24-1.49a9.81,9.81,0,0,0-1.18,1.9,14.12,14.12,0,0,0-.66,9.37l-.24.44a12.22,12.22,0,0,0-.79,1.64,11.44,11.44,0,0,0-1.46,3.36c-.2,1,.29,2.48,0,3.37-.54,1.47-1.72,1-2.06,1.92a6.38,6.38,0,0,0-.14,3.26c-1.3,2-2.69,3.86-2.72,6.09a3.88,3.88,0,0,0,.2,1.27,2.83,2.83,0,0,0-.9,1.45c-.38,1.4.52,2.62.54,3.76,0,1.38.16,1.14,0,1.6a13.06,13.06,0,0,0-1.52,2.09,11.31,11.31,0,0,0-.71,2,7.32,7.32,0,0,0-1.8,3.83c-.09,1,.64,2.66.48,3.38-.28,1.29-1.34,1.46-1.54,1.94a9,9,0,0,0-.53,3.38,8.41,8.41,0,0,0-.27,2.14c-3,.12-2.52,2.83-1.57,5.34a11.7,11.7,0,0,0-.66,2.18c-.49,2.46.5,3.49,1.36,4.64a3.71,3.71,0,0,0-.73,2c-.25,2.13,1.36,3.35,1,5.51-4.72.34-.73,8.91-2.62,12.08-.74,1.24-2.13,1.51-2.95,2.95a9,9,0,0,0-1.06,5c.46,5.36,3.44,2.14,6.11,2,.58,1.74.37,3.07.76,4.09-3.69,1.86-7.07,3.52-10,4.87V369H553.54V271C545.93,271.36,534.57,270.91,519.89,267.66ZM457.49,245a2.35,2.35,0,0,0-.09.41l-2.19-.85A12.46,12.46,0,0,0,457.49,245Z" fill="#182f3e"/>
      <rect x="0" y="300" width="570" height="1000" fill="#182f3e"/>
    </g>
    
  </g>
</svg>

<p>scroll down</p>

     <style
      dangerouslySetInnerHTML={{
          __html: `
          footer {
            display: none;
          }
          body {
            margin: 0;
            padding: 0;
            background: #fff;
            height: 200vh;
          }
          
          p {
            position: fixed;
            bottom: 2rem;
            width: 100%;
            text-align: center;
            font-family: sans-serif;
            opacity: 0.8;
          }
          
          svg {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            max-width: 700px;
            background: #182f3e;
            border: solid 1px #c5cace;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            border-radius: 4px;
          }
     
                   `
      }}
    />
 </>
 )
}