/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import dynamic from 'next/dynamic'
 
export default function Some() {  

  useEffect(() => {
      
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("section");
    let tl = gsap.timeline({
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true,
      }
    });
    
    // color each section
    gsap.to(sections, {backgroundColor: gsap.utils.wrap(["orange","blue","purple","gray"])});
    
    // add a label and animate y to 100vh for each section
    sections.forEach((section, i) => {
      tl.add("label-" + (i+1))
        .to(section.querySelector("h1"), {
          y: "100vh",
          ease: "none",
        });
    });
    
    // add markers!
    addTimelineMarkers(tl, {color: "white"});
    
    
    // helper function for adding markers
    function addTimelineMarkers(timeline, {margin=0, color="green", fontSize="16px", offset=0}={}) {
      let st = timeline.scrollTrigger,
          container = st.scroller === window ? document.body : st.scroller,
          markers = [],
          labels = timeline.labels,
          createMarker = label => {
            let marker = document.createElement("div");
            marker.textContent = label;
            marker.setAttribute("class", "timeline-marker");
            gsap.set(marker, {position: "absolute", right: margin, borderTop: "1px solid " + color, color: color, pointerEvents: "none", padding: "2px 5px 0px 5px", fontSize: fontSize, fontFamily: "sans-serif, Arial"});
            container.insertBefore(marker, container.firstChild);
            return marker;
          },
          onRefresh = () => {
            let duration = timeline.duration(),
                change = st.end - st.start,
                o = typeof(offset) === "function" ? offset(st) : offset;
            markers.forEach(data => gsap.set(data.marker, {top: st.start + o + labels[data.label] / duration * change}));
          };
      for (let p in labels) {
        markers.push({label: p, marker: createMarker(p)});
      }
      st.end || st.refresh();
      onRefresh();
      ScrollTrigger.addEventListener("refresh", onRefresh);
      return () => markers.forEach(data => container.removeChild(data.marker));
    }
});
 


return (
    <>
<section>
	<h1>SECTION 1</h1>
</section>
<section>
	<h1>SECTION 2</h1>
</section>
<section>
	<h1>SECTION 3</h1>
</section>
<section>
	<h1>SECTION 4</h1>
</section>
<section>
	<h1>SECTION 5</h1>
</section>
<section>
	<h1>SECTION 6</h1>
</section>
<div style={{height:"100vh"}}></div>
     <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: "Signika Negative", sans-serif;
            font-weight: 300;
            margin: 0;
            padding: 0;a
            text-align: center;
            overflow-x: hidden;
            background-color: black;
          }
          section {
            height: 100vh;
            padding: 10px;
            color: white;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
          }
  
     
                   `
      }}
    />
 
 </>
 )
}