/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const boxCount = Array.apply(null, Array(100));

const Content = () => {
  const scrollAmount = 350;
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const scale = useTransform(scrollY, [0, scrollAmount], [1, 1.3]);

  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ["blur(10px)", "blur(0px)"]
  );
  const background = useTransform(
    scrollY,
    [0, scrollAmount],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0)"]
  );
  const y = useTransform(
    scrollY,
    [-scrollAmount, scrollAmount, scrollAmount + 1],
    [-1, 0, -1],
    {
      clamp: false
    }
  );

  return (
    <div id="content">
      <motion.div
        className="hero"
        style={{
          opacity,
          scale
        }}
      >
        <h1>Blur scroll animation</h1>
        <h2>Built with Framer Motion</h2>
      </motion.div>
      <motion.div
        className="blur-mask"
        style={{
          background
        }}
      />
      <motion.div style={{ y, filter }} className="box-container">
        {boxCount.map((box, index) => (
          <div className="box" key={index}>
            <img alt="" src="https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Content;
