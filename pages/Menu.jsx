/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import colors from "nice-color-palettes";
const Menu = () => {
  const ref = useRef();
  const button = useRef();
  const imgBg = useRef();
  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power2"
    }
  });
  const toggleDirection = () => {
    tl.reversed(!tl.reversed());
  };
  // Initialize
  useEffect(() => {
    gsap.set(ref.current.children[0].children, {
      y: "-100vh",
      backgroundColor: gsap.utils.wrap(
        colors[Math.floor(gsap.utils.random(1, 100))]
      )
    });

    gsap.set(ref.current.children[2].children, {
      opacity: 0
    });

    gsap.set(button.current, {
      opacity: 1
    });

    gsap.set(imgBg.current.children, {
      autoAlpha: 0
    });
  }, []);

  // Animate
  useEffect(() => {
    tl.to(ref.current.children[0].children, {
      y: 0,
      stagger: 0.2,
      duration: 0.75
    })
      .to(ref.current.children[2].children, {
        opacity: 1,
        stagger: 0.1
      })
      .reversed(false);

    tl.reversed() ? tl.play() : tl.reverse();
  });

  const onHover = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 1
    });
  };
  const onLeave = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 0
    });
  };
  return (
    <div className="menu" ref={ref}>
      <div className="menu-background">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="image-bg" ref={imgBg}>
          <div className="number">
            <img src="01.jpg" alt="copenhagen" />
          </div>
          <div className="number">
            <img src="02.jpg" alt="copenhagen" />
          </div>
          <div className="number">
            <img src="03.jpg" alt="copenhagen" />
          </div>
          <div className="number">
            <img src="04.jpg" alt="copenhagen" />
          </div>
        </div>
      </div>
      <div
        ref={button}
        className="nav-button"
        onClick={() => toggleDirection()}
      >
        {tl.reversed() ? (
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </div>
      <ul className="nav-list">
        <li onMouseEnter={() => onHover(0)} onMouseLeave={() => onLeave(0)}>
          About
        </li>
        <li onMouseEnter={() => onHover(1)} onMouseLeave={() => onLeave(1)}>
          Services
        </li>
        <li onMouseEnter={() => onHover(2)} onMouseLeave={() => onLeave(2)}>
          Works
        </li>
        <li onMouseEnter={() => onHover(3)} onMouseLeave={() => onLeave(3)}>
          Careers
        </li>
      </ul>
    </div>
  );
};

export default Menu;
