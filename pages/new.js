/* eslint-disable @next/next/no-img-element */
import React  from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
import Loco from "./loco"
import Guardians from './guardians'
import LettersonScroll from './lettersonScroll'
import LeftChange from './leftscrollsRightstays'
import Intro from './intro'
import Horizon from './horizon'
import Neat from './neat'
import Blur from './blur'
import BoyGirl from './boyGirl'
import ColorSectionscroll from './colorSectionscroll'
{{ /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */}}
export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
}, []);
 
 

  return (
<> 

<ColorSectionscroll ></ColorSectionscroll>
<Loco></Loco>
<Guardians></Guardians>
<Neat></Neat>

  <style
    dangerouslySetInnerHTML={{
        __html: `
    `
    }}
    />
</>
  );
}

 