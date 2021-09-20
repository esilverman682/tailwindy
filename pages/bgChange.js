import React, { useRef, useEffect } from "react";
  
function App() {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true
      });
    });

    
 //   return () => scroll.destroy();
  }, []);

  return (
    <div className="App">
      <div className="scroll" ref={scrollRef}>
        <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
          Locomotive Scroll in React
        </h1>
        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          Ima go sideways
        </h2>
      </div>
      <style
      dangerouslySetInnerHTML={{
          __html: `
          .App {
            font-family: sans-serif;
            text-align: center;
          }
          
          h1 {
            margin: 500px 0 50px;
          }
          
          .scroll {
            padding: 0 0 200vh;
          }          
                   `
      }}
    />
    </div>
  );
}

export default App;
