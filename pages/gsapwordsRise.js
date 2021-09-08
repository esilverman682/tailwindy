import  {  useEffect } from "react";
import {  gsap } from "gsap";
 import { throttle } from "lodash"; 
import ScrollTrigger from "gsap/dist/ScrollTrigger";
 
 
export default function Mask() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
  

  /* Menu */
  const menuButton = document.querySelector('[data-btn="menu"]');
  const menu = document.querySelector("[data-menu]");
  
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    menuButton.classList.toggle("is-active");
  });
  
  /* Cursor */
  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
  
    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  };
  
   /* Text animation */
 

  
  // Set initial text styles (before animation)
  gsap.set(".hero--primary .char", {
    opacity: 0,
    y: 25,
  });
  
  /* Timeline */
  const tl = gsap.timeline({ delay: 1 });
  
  tl.to(".hero--primary .char", {
    opacity: 1,
    y: 0,
    duration: 0.75,
    stagger: 0.1,
  })
    .to(hero, {
      "--maskSize1": "20%",
      duration: 0.5,
      ease: "back.out(2)",
    })
    .to(hero, {
      "--maskSize2": "28%",
      "--maskSize3": "calc(28% + 0.1rem)",
      duration: 0.5,
      delay: 0.3,
      ease: "back.out(2)",
    })
    .then(() => {
      window.addEventListener("mousemove", throttle(onMouseMove, 30));
    
    });
  }, []);
  
 


   

  return (
    
    <div className=" " >
          <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          box-sizing: border-box;
        }
        
        :root {
          --bg: rgb(9, 14, 23);
          --primary: turquoise;
          --gradientBg: linear-gradient(45deg, #40e0d0, #9932cc, #ff1493, orange);
        }
        
        .content {
          font-family: Montserrat, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: var(--bg);
          color: #ffffff;
        }
        
        /* Reset */
        .content a {
          color: inherit;
        }
        
        .content ul {
          list-style: none;
        }
        
        .content button {
          border: none;
          padding: 0.5rem;
          font-size: inherit;
          cursor: pointer;
        }
        
        .wrapper {
          position: relative;
          width: 100%;
        }
        
        .container {
          width: 100%;
          max-width: 84rem;
          margin: 0 auto;
        }
        
        /* Text */
        .hero__heading {
          font-size: clamp(2rem, 8vw, 8rem);
          line-height: 1.1;
          font-weight: 900;
          margin: 0;
        }
        
        .hero--primary .hero__heading {
          -webkit-text-stroke: 2px var(--primary);
          color: transparent;
          filter: drop-shadow(0 0 0.35rem var(--primary));
        }
        
        .hero--secondary .hero__heading {
          background: radial-gradient(circle at center, #ffffff 0.11rem, transparent 0);
          background-size: 0.4rem 0.4rem;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        /* Menu */
        .menu {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: fixed;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          background: var(--gradientBg);
          clip-path: circle(0 at calc(100% - 2rem) 2rem);
          transition: clip-path 500ms;
          z-index: 1;
          font-size: clamp(1rem, 3vw, 4rem);
        }
        
        .menu.is-open {
          clip-path: circle(200% at calc(100% - 2rem) 2rem);
          pointer-events: all;
        }
        
        .menu a {
          display: block;
          padding: 0.5em;
          text-decoration: none;
          font-weight: 900;
        }
        
        .menu a:hover,
        .menu a:focus {
          text-decoration: underline;
        }
        
        .menu-button {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--bg);
          color: white;
          padding: 0.75rem;
          width: 3.5rem;
          height: 3.5rem;
          top: 1rem;
          right: 1rem;
          z-index: 2;
          border-radius: 50%;
        }
        
        .menu-button__icon {
          display: block;
          position: relative;
          overflow: visible;
        }
        
        .menu-button__icon span,
        .menu-button__icon::before,
        .menu-button__icon::after {
          display: block;
          width: 2rem;
          height: 4px;
          background-color: white;
        }
        
        .menu-button__icon::before,
        .menu-button__icon::after {
          content: "";
          position: absolute;
          left: 0;
          top: -8px;
          transition: transform 200ms;
          transform-origin: center;
          pointer-events: none;
        }
        
        .menu-button__icon::after {
          bottom: -8px;
          top: auto;
        }
        
        .menu-button.is-active .menu-button__icon > span {
          opacity: 0;
        }
        
        .menu-button.is-active .menu-button__icon::before {
          transform: translate3d(0, 8px, 0) rotate(45deg);
        }
        
        .menu-button.is-active .menu-button__icon::after {
          transform: translate3d(0, -8px, 0) rotate(-45deg);
        }
        
        /* Hero */
        .hero {
          --x: 50%;
          --y: 50%;
          min-height: 100vh;
          padding: clamp(1rem, 2vw, 5rem);
          display: flex;
          align-items: center;
        }
        
        .hero--secondary {
          --mask: radial-gradient(
            circle at var(--x, 50%) var(--y, 50%),
            black var(--maskSize1, 0%),
            rgba(0, 0, 0, 0.1) calc(var(--maskSize1, 0%) + 0.1%),
            transparent 0,
            transparent var(--maskSize2, 0%),
            rgba(0, 0, 0, 0.1) calc(var(--maskSize2, 0%) + 0.1%),
            black var(--maskSize2, 0%),
            rgba(0, 0, 0, 0.1) calc(var(--maskSize3, 0%) - 0.1%),
            black var(--maskSize3, 0%),
            rgba(0, 0, 0, 0.1) calc(var(--maskSize3, 0%) + 0.1%),
            transparent 0
          );
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: var(--gradientBg);
          color: rgb(9, 14, 23);
          -webkit-mask-image: var(--mask);
          mask-image: var(--mask);
        }
        
        /* Text animation */
        .hero--primary .hero__heading .char {
          display: inline-block;
        }
          

        *,
*::after,
*::before {
	box-sizing: border-box;
}

:root {
	font-size: 16px;
}

body #cdawrap {
    --cda-left: auto;
    --cda-width: 300px;
    --cda-right: 3rem;
    --cda-bottom: 3rem;
    --cda-top: auto;
    --cda-text-align: right;
    --cda-text-color: var(--color-text);
    --footer-align: end;
}

body {
	margin: 0;
	--color-text: #fff;
	--color-bg: #000;
	--color-link: #5d4848;
	--color-link-hover: #fff;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: Nunito, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Page Loader */
.js .loading::before,
.js .loading::after {
	content: '';
	position: fixed;
	z-index: 1000;
}

.js .loading::before {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;

}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover {
	color: var(--color-link-hover);
	outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
	/* Provide a fallback style for browsers
	 that don't support :focus-visible */
	outline: none;
	background: lightgrey;
}

a:focus:not(:focus-visible) {
	/* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
	background: transparent;
}

a:focus-visible {
	/* Draw a very noticeable focus style for
	 keyboard-focus on browsers that do support
	 :focus-visible */
	outline: 2px solid red;
	background: transparent;
}

.frame {
	padding: 3rem 5vw;
	text-align: center;
	position: relative;
	z-index: 1000;
	font-weight: 600;
}

.frame__title {
	font-size: 1rem;
	margin: 0 0 1rem;
	font-weight: 600;
}

.frame__links {
	display: inline;
}

.frame__links a:not(:last-child),
.frame__demos a:not(:last-child) {
	margin-right: 1rem;
}

.frame__demos {
	margin: 1rem 0;
}

.frame__demo--current,
.frame__demo--current:hover {
	color: var(--color-text);
}

.content {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: calc(100vh - 13rem);
	position: relative;
	justify-content: flex-start;
	align-items: center;
}

@media screen and (min-width: 53em) {
	.frame {
		position: fixed;
		text-align: left;
		z-index: 100;
		top: 0;
		left: 0;
		display: grid;
		align-content: space-between;
		width: 100%;
		max-width: none;
		height: 100vh;
		padding: 3rem;
		pointer-events: none;
		grid-template-columns: 75% 25%;
		grid-template-rows: auto auto auto;
		grid-template-areas: 'title ...'
							'... ...'
							'... links';
	}
	.frame__title-wrap {
		grid-area: title;
		display: flex;
	}
	.frame__title {
		margin: 0;
	}
	.frame__tagline {
		position: relative;
		margin: 0 0 0 1rem;
		padding: 0 0 0 1rem;
		opacity: 0.5;
	}
	.frame__demos {
		margin: 0;
		grid-area: demos;
		justify-self: end;
	}
	.frame__links {
		grid-area: links;
		padding: 0 0 0 3rem;
		justify-self: end;
	}
	.frame a {
		pointer-events: auto;
	}
	.content {
		height: 100vh;
		justify-content: center;
	}
}

                   `
      }}
    />
 
      <div className="demo-1">
    <main>
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">Hero Mask Animation</h1>
          <nav className="frame__links">
            <a href="http://tympanus.net/Development/3DLettersMenuHover/">Previous demo</a>
            <a href="https://tympanus.net/codrops/?p=54377">Article</a>
            <a href="https://github.com/mbarker84/codrops-masked-hero">GitHub</a>
          </nav>
        </div>
      </div>
      <div className="content">
       
        <header>
          <button className="menu-button" data-btn="menu" aria-label="menu">
            <span className="menu-button__icon">
              <span></span>
            </span>
          </button>
          <nav className="menu" data-menu>
            <ul>
              <li>
                <a href="">About me</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Writing</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="wrapper">
          <div className="hero hero--primary">
            <div className="container">
              <h1 className="hero__heading" data-splitting>
                Welcome To The Media <br />Center
              </h1>
            </div>
          </div>

          <div className="hero hero--secondary" aria-hidden="true" data-hero>
            <div className="container">
              <p className="hero__heading" data-splitting>
              Welcome To The Media <br />Center

              </p>
            </div>
          </div>
        </div>
      </div>
    </main>


  </div>
    </div>
  );
}





 
 