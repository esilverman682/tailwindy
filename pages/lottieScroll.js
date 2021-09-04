import React from "react"
import Lottie from 'react-lottie';
import animationData from './../public/lottie.json';
 
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  export default function lottieScroll() {

  return (
   <div>
  <lottie-player 
    id="firstLottie" 
    src="./public/lottie.json" 
    style={{width:'400px', height: '400px'}}
    > 
  </lottie-player>
  
  <lottie-interactive 
    path="button.json" 
    interaction="click"
    >
  </lottie-interactive> 
  
  <Lottie 
	    options={defaultOptions}
      width={400}
      height={400}
      />
   </div>
)
}






 
