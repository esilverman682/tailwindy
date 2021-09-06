import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
 import Navigatiion from "../components/navigation";
 import Scrollbar from 'smooth-scrollbar';
 import styles from "../App.module.css";


export default function IndexPage() {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

  useEffect(() => {
 
    scroller.current = document.querySelector(".scroller");
    bodyScrollBar.current = Scrollbar.init(scroller.current);
    setScrollBarCreated(true);
  }, []);

  useEffect(() => {
    if (scrollBarCreated) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.scrollerProxy(scroller.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.current.scrollTop = value;
          }
          return bodyScrollBar.current.scrollTop;
        }
      });
      bodyScrollBar.current.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller.current });
    }
  }, [scrollBarCreated]);

  return (
    <div className="scroller" style={{ height: "100vh" }}>
      <scrollbar>
    <div className="scroll-content">
        your contents here...
    </div>
    <div className="scrollbar-track scrollbar-track-x">
        <div className="scrollbar-thumb scrollbar-thumb-x"></div>
    </div>
    <div className="scrollbar-track scrollbar-track-y">
        <div className="scrollbar-thumb scrollbar-thumb-y"></div>
    </div>
</scrollbar>
      <Navigatiion />
      <div className={styles.one}></div>
      <div id="trigger-end" className={styles.two}></div>
      <div className={styles.three}></div>
    </div>
  );
}
