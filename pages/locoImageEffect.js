import React, { useEffect, useRef } from "react";
//import styled from "styled-components/dist/styled-components"
 import styled from "styled-components"

  const Wrapper = styled.div`
   padding-top: 20vh;
    min-height: 300vh;
  `;

const ImgWrap = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
`;

const Img = styled.img`
  width: 70vw;
  height: 110vh;
  object-fit: cover;
  object-position: center;
  /* background-image: url("https://tympanus.net/Development/ThumbFullTransition/2.3ca6bb44.jpg"); */
  /* background-size: cover;
  background-position: 50% 50%; */
`;

const Scroll = styled.div`
  padding-top: 80vh;
  height: 200vh;
  display: inline-block;
`;

const Gallery = styled.div`
  display: flex;
  margin-left: 12vw;
  padding-right: 12vw;
`;



export default function App() {  
  const scrollRef = useRef();
  useEffect(() => {
    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true
      });
    });

    if (typeof window === "undefined") {
      return;
    }

  }, []);

 //return () => scroll.destroy();

  return (
    <>
    <div className="App">
      {/* <Wrapper ref={scrollRef}> */}
      <Scroll ref={scrollRef} data-scroll-container>
        {/* <Gallery>
          <h1
            data-scroll
          >
            Hello CodeSandbox
          </h1>
          <h2
            data-scroll
           
          >
            Start editing to see some magic happen!
          </h2>
          <h2
            data-scroll
          
          >
            Start editing to see some magic happen!
          </h2> */}
        {/* <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div> */}
        {/* </Gallery> */}
        <ImgWrap>
          <Img
            src="https://tympanus.net/Development/ThumbFullTransition/2.3ca6bb44.jpg"
            data-scroll
            data-scroll-speed="1.2"
            data-scroll-delay="0.1"
          />
        </ImgWrap>
      </Scroll>
      {/* </Wrapper> */}
    </div>
    <style
      dangerouslySetInnerHTML={{
          __html: `
          /* .App {
            font-family: sans-serif;
            text-align: center;
          } */
          /* 
          body {
            overflow: hidden;
          } */
          
          html {
            overflow: hidden;
          }
          [data-scroll-direction="horizontal"] [data-scroll-container] {
            /* white-space: nowrap; */
            height: 100vh;
            display: inline-block;
            white-space: nowrap;
          }
          
    `
      }}
    />
    </>
  );
}
