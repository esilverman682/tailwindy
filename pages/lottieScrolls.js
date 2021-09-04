import React from "react"
 import styled from "styled-components"
import animationData from './../public/lottie.json';
 import {Happy} from 'react-happytext'


 const StyledDiv = styled.div` 
  background: linear-gradient(
270deg, green, yellow, #c34dbf, #ff4b1f, #ff9068, #16BFFD, #a84dc3, #CB3066, #4CA1AF, #C4E0E5);
  background-size: 2000% 2000%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: happyAni 30s ease infinite;
  -moz-animation: happyAni 30s ease infinite;
  animation: happyAni 30s ease infinite;
  font-size 1rem;
`;

  export default function lottieScroll() {  
  return (
   <div>
      <span
          style={{
            fontSize: "200px",
            fontWeight: "700",
            fontFamily: "Avenir",
            letterSpacing: "-0.4rem",
            display: "block"
          }}
        > 
 <Happy style={{fontSize: "50px"}} value="Awesome" /> </span>


 
<StyledDiv>
<Happy value="Awesome" />
</StyledDiv>


   </div>
)
}






 
