/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
 
import { useEffect } from "react";
 import HappyText from "./happyText";
 
{{/*REFERENCE: https://greensock.com/forums/topic/24887-gsap-2x-clamp-carousel-example/ */ }}
 
 export default function Some() {
 
  useEffect(() => { 
    
 
}, []);
return (
<>
<div style={{ height: "100vh" }} className='gradient-background' >
 Hello
 <HappyText></HappyText>
</div>

 
<style
    dangerouslySetInnerHTML={{
        __html: `

        .gradient-background {
          background: linear-gradient(260deg,#bb3c04,#2b0384,#8c2e71,#d4d6b2,#21c4b2);
          background-size: 300% 300%;
          animation: gradient-animation 30s ease infinite;
        }
        
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
 
     `
    }}
    />    
 </>
  );
}