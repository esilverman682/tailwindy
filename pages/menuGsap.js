import React, { useRef, useState, useEffect } from "react";
 
import gsap from "gsap";

export default function App() {
  let red = useRef(null);
  let black = useRef(null);
  let heading = useRef(null);

  const [isToggle, setToggle] = useState(null);

  useEffect(() => {
    if (isToggle) {
      gsap.to(red, {
        y: -1000,
        duration: 1.5,
        ease: "Power3.easeInOut"
      });
      gsap.to(black, {
        delay: 0.1,
        y: -1000,
        duration: 1.5,
        ease: "Power2.easeInOut"
      });
      gsap.to(heading, {
        delay: 1.5,
        duration: 1,
        opacity: 0
      });
    } else {
      gsap.to(red, {
        delay: 0.1,
        y: 0,
        duration: 1.5,
        ease: "Power2.easeInOut"
      });
      gsap.to(black, {
        y: 0,
        duration: 1.5,
        ease: "Power2.easeInOut"
      });
      gsap.to(heading, {
        delay: 1.5,
        duration: 1,
        opacity: 1
      });
    }
  });

  return (
    <div className="App">
      <button className="nav" onClick={() => setToggle(!isToggle)}>
        <div className={`nav-line ${isToggle ? "black" : "white"}`} />
        <div className={`nav-line ${isToggle ? "black" : "white"}`} />
        <div className={`nav-line ${isToggle ? "black" : "white"}`} />
      </button>
      <div className="main">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div className="layer-container">
        <div className="layer black" ref={el => (black = el)} />
        <div className="layer red" ref={el => (red = el)}>
          <h1 className="menu-heading" ref={el => (heading = el)}>
            Lorem ipsum dolor
          </h1>
        </div>
      </div>
      <style
      dangerouslySetInnerHTML={{
          __html: `
          .App {
            font-family: sans-serif;
            text-align: center;
          }
          
          .main {
          }
          
          .nav {
            position: absolute;
            top: 20px;
            right: 20px;
            height: 20px;
            width: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            border: none;
            background: none;
            margin: 0;
            padding: 0;
            z-index: 2;
          
            &-line {
              height: 4px;
              width: 35px;
              
            }
          
            .white {
              background: white;
            }
          
            .black {
              background: black;
            }
          }
          
          .layer {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
          
            .menu-heading {
              font-size: 50px;
              color: #fff;
              margin: auto;
              opacity: 0;
            }
          }
          
          .red {
            background: red;
          }
          
          .black {
            background: black;
          }
          
          
     
                   `
      }}
    />
    </div>
  );
}
