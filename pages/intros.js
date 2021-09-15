import React from "react";
 
import { motion, AnimatePresence } from "framer-motion"

export default function App() {
  return (
    
    <motion.div className="logo">
    <motion.div
      className="top"
      initial={{
        scale: 50,
        x: -10,

        y: "-300vh",
        rotate: -15,
        originX: 0.5,
        originY: 0.5,
        opacity: 0,
        skewX: 5
      }}
      animate={{ scale: 1, x: 0, rotate: 0, y: 0, opacity: 1, skewX: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        type: "spring",
        stiffness: 1000,
        damping: 1000,
        mass: 10,
        delay: 0
      }}
    >
      <svg
        width="76"
        height="94"
        viewBox="0 0 76 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75.1119 37.556C75.1119 16.8144 58.2976 0 37.556 0H34.3134C15.3626 0 0 15.3626 0 34.3134L4.50341e-06 93.8419C0.0150999 75.112 38.1462 75.1074 38.1462 75.1074C58.6156 74.792 75.1119 58.1004 75.1119 37.556Z"
          fill="white"
        />
      </svg>
    </motion.div>
    <motion.div
      className="bottom"
      initial={{
        scale: 500,
        skewX: -100,
        x: 100000,
        y: "10000vh",
        rotate: -90,
        originX: 0.5,
        originY: 1
      }}
      animate={{ scale: 1, x: 0, rotate: 0, y: 0, skewX: 0 }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 5000,
        mass: 10
      }}
    >
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.4743 19.2802C38.4743 29.9159 30.5795 38.5378 19.2167 38.5378C8.58108 38.5378 0.328085 30.2002 0.328085 19.2802C0.328085 0.539114 38.4743 0.539093 38.4743 0.539093C38.4743 0.539093 38.4743 8.64454 38.4743 19.2802Z"
          fill="#C4C4C4"
        />
        <path
          d="M38.4743 19.2802C38.4743 29.9159 30.5795 38.5378 19.2167 38.5378C8.58108 38.5378 0.328085 30.2002 0.328085 19.2802C0.328085 0.539114 38.4743 0.539093 38.4743 0.539093C38.4743 0.539093 38.4743 8.64454 38.4743 19.2802Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M38.4743 19.2802C38.4743 29.9159 30.5795 38.5378 19.2167 38.5378C8.58108 38.5378 0.328085 30.2002 0.328085 19.2802C0.328085 0.539114 38.4743 0.539093 38.4743 0.539093C38.4743 0.539093 38.4743 8.64454 38.4743 19.2802Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="33.5405"
            y1="38.4752"
            x2="15.722"
            y2="6.2191"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BCFFFF" />
            <stop offset="1" stopColor="#BCFFFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="-24.7303"
            y1="-30.984"
            x2="35.8568"
            y2="29.2283"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3449D3" />
            <stop offset="1" stopColor="#B6BFFF" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
    <style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            background: radial-gradient(
              89.35% 90.25% at 3.71% 6.39%,
              #0d99e8 0%,
              #710fd2 100%
            );
            background-size: cover !important;
            background-repeat: no-repeat;
            height: 100vh;
            max-height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-items: center;
            justify-content: center;
          }
          .logo {
            display: flex;
            flex-direction: column;
          }
          .bottom {
            position: relative;
            top: -12px;
            left: 2px;
          }
          
          
          
     
                   `
      }}
    />
  </motion.div>
  );
}
