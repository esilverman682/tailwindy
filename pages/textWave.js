//Blogpost and origin
//https://webanimation.blog/blog/wavy-text-animation-using-react-hooks-with-gsap-v3/
import React, { useEffect, useRef } from "react";

// import styled from "@emotion/memoize/dist/emotion-memoize.cjs"
import gsap from "gsap";
import SplitTextToChars from "./SplitTextToChars";
 import styled from "styled-components";
 
const TextStyled = styled.p`
  font-size: calc(62px + (104 - 32) * ((150vw - 320px) / (1600 - 320)));
  font-family: poppins;
  font-weight: 500;
  margin: 0;
  color: white;
  position: absolute;
`;

export default function App() {
  const wavyTextRef = useRef(null);

  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(
      chars,
      {
        duration: 0.2,
        opacity: 0,
        scale: 1,
        delay: 2,
        y: -40,
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        ease: "inOut",
        stagger: 0.025
      },
      "+=0"
    );
  }, []);

  return (
    <div className="App">
      <TextStyled ref={wavyTextRef}>ride the waaaaaaaave</TextStyled>
      <style
    dangerouslySetInnerHTML={{
        __html: `     
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #7700ff;
          font-size: 45px;
          position: relative;
        
          width: 100%;
          min-height: 100vh;
        
          margin: 0;
          padding: 0;
        
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        body {
          margin: 0;
        }
        

`
    }}
    />   
    </div>
  );
}
