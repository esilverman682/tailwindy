/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/eYpGLYL */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

}, []);


  return (
    <>
<div> 
<img width="600" height="600" src="https://picsum.photos/600/600?random=1" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=2" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=3" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=4" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=5" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=6" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=7" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=8" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=9" alt="" className="skewElem" />
<img width="600" height="600" src="https://picsum.photos/600/600?random=10" alt="" className="skewElem" />


 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            text-align: center;
            background-color: #111;
          }
          body > img {
            margin-bottom: 20vh;
          }
          
          
          
          h1 {
            color: white;
            text-shadow: 1px 1px 3px black;
            z-index: 1;
            font-size: 3em;
            font-weight: 400;
            display: none;
          }
          
          header .name {
            color: white;
          }

          
                   `
      }}
    />
    </div>
 </>
 )
}