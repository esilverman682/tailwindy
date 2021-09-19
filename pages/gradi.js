 
import { useRef, useEffect } from "react";

const App = () => {
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

    return () => scroll.destroy();
  }, []);

  return (
    <div className="App" ref={scrollRef}>
      <h2>Scroll and Fade in React</h2>
      <h4>None</h4>
      <h4>Something</h4>
      <h4 data-scroll data-scroll-speed="1" style={{ marginTop: "2.65rem" }}>
        Something Else
      </h4>
      <style
      dangerouslySetInnerHTML={{
          __html: `
          .App {
            font-family: sans-serif;
            text-align: center;
            height: 300vh;
            padding-bottom: 300vh;
          }
          
          html.has-scroll-smooth {
            overflow: hidden;
          }
          
          html.has-scroll-dragging {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          .has-scroll-smooth body {
            overflow: hidden;
          }
          
          .has-scroll-smooth [data-scroll-container] {
            min-height: 100vh;
          }
          
          .c-scrollbar {
            position: absolute;
            right: 0;
            top: 0;
            width: 11px;
            height: 100vh;
            transform-origin: center right;
            transition: transform 0.3s, opacity 0.3s;
            opacity: 0;
          }
          .c-scrollbar:hover {
            transform: scaleX(1.45);
          }
          .c-scrollbar:hover,
          .has-scroll-scrolling .c-scrollbar,
          .has-scroll-dragging .c-scrollbar {
            opacity: 1;
          }
          
          .c-scrollbar_thumb {
            position: absolute;
            top: 0;
            right: 0;
            background-color: hotpink;
            opacity: 0.5;
            width: 7px;
            border-radius: 10px;
            margin: 2px;
          }
          
          
     
                   `
      }}
    />
    </div>
  );
};

export default App;
