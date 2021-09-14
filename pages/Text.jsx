import gsap from "gsap";
import React, { useRef } from "react";
import color from "nice-color-palettes";
 

const Text = ( {children}  ) => {
  const textArray = Array.from(
    'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust. Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.');
  const ref = useRef();
  const palette = color[Math.floor(gsap.utils.random(1, 100))];
  const colorize = (index) => {
    const randColor = Math.floor(gsap.utils.random(0, 4));
    if (!gsap.isTweening(ref.current.children[index])) {
      gsap.to(ref.current.children[index], {
        duration: 0.1,
        color: palette[randColor]
      });
    }
  };

  const makeItBlack = (index) => {
    gsap.to(ref.current.children[index], {
      duration: 1,
      delay: 0.5,
      color: "#7b7777"
    });
  };
  return (
    <h1 ref={ref} className="text">
      {textArray.map((e, i) => (
        <span
          onMouseEnter={() => colorize(i)}
          onMouseLeave={() => makeItBlack(i)}
          key={i}
        >
          {e}
        </span>
      ))}
    </h1>
  );
};

export default Text;
