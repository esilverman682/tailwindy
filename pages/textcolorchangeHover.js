 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Text from "./Text";
{/*Reference https://codepen.io/GreenSock/pen/JjYPgdp */}
 export default function Some() {
 
  useEffect(() => {
    
    
}, []);


  return (
    <>
    <div>
    <div className="App">
      <div className="border"></div>
      <div className="nav">
        <a href="bence.cz">bence.cz</a>
        <a href="bence.cz">codesandbox</a>
        <a href="bence.cz">github</a>
      </div>
      <div className="container">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          consequuntur, earum ipsa corporis iste saepe labore ipsam voluptatum
          totam voluptas.
        </Text>
      </div>
    </div>

     <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
        
        .App {
          font-family: "Space Grotesk", sans-serif;
          text-align: center;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .border {
          position: absolute;
          margin: 1rem;
          width: calc(100% - 40px);
          height: calc(100% - 40px);
          box-sizing: border-box;
          border: 1px solid black;
          pointer-events: none;
        }
        
        .container {
          width: 70%;
          height: 50%;
        }
        
        .text {
          font-size: 5rem;
          display: flex;
          flex-wrap: wrap;
          white-space: pre-wrap;
        }
        
        .nav {
          position: absolute;
          top: 4rem;
          left: 4rem;
          right: 4rem;
          display: flex;
          justify-content: start;
        }
        .nav a {
          color: darkgrey;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1rem;
        }
        
        .nav a:nth-of-type(2) {
          margin-left: auto;
        }
        
        .nav a:last-of-type {
          margin-left: 1rem;
        }
        
          
                   `
      }}
    />
    </div>
 </>
 )
}