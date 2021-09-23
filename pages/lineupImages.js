import React from "react";
import { useRef, useEffect } from "react";
import { Parallax, Background } from 'react-parallax'
import Hello from "./Hello";
//import "./index.css";
 import Image from "next/image";

 /*https://codesandbox.io/s/locomotive-2-do3ls?file=/index.html */

const styles = {
  background: "red",
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "green",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
 
export default function App() {  
  //   const scrollRef = useRef();
      useEffect(() => {
        const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
          new LocomotiveScroll.default({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
          });
        }, 1000);
    
        if (typeof window === "undefined") {
          return;
        }
    
      }, []);




  return(
    <>
 <main data-scroll-container>
 

      <section className="tiles tiles--columns" id="grid2">
        <div className="tiles__wrap">
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="vertical"
          >
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/4.jpg);"}}
            ></div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/5.jpg);"}}
            ></div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/6.jpg);"}}
            ></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="-1"
            data-scroll-target="#grid2"
            data-scroll-direction="vertical"
          >
            <div className="tiles__line-img"></div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(number08.webp);"}}
            >        
            <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(assets/9.jpg);"}}
            >                        <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(assets/10.jpg);"}}
            >                      <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(assets/11.jpg);"}}
            >                      <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(assets/12.jpg);"}}
            >                     <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="vertical"
          >
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/13.jpg);"}}
            >                          <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/14.jpg);"}}
            >                          <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/15.jpg);"}}
            >                          <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/16.jpg);"}}
            >                          <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/17.jpg);"}}
            >                        <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/18.jpg);"}}
            >                          <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="-1"
            data-scroll-target="#grid2"
            data-scroll-direction="vertical"
          >
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/19.jpg);"}}
            >                     <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/20.jpg);"}}
            >                     <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/21.jpg);"}}
            >                     <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/22.jpg);"}}
            >                       <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/23.jpg);"}}
            >                     <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div className="tiles__line-img"></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid2"
            data-scroll-direction="vertical"
          >
            <div className="tiles__line-img"></div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/26.jpg);"}}
            >                    <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/27.jpg);"}}
            >                  <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div
              className="tiles__line-img"
              style={{backgroundImage: "url(/assets/28.jpg);"}}
            >             <Image src={require('/assets/number08.webp')} alt="image" />
            </div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
          </div>
        </div>
      </section>

      <section className="section"></section>
    </main>





<style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: sans-serif;
          }
          
          section {
            min-height: 100vh;
            width: 100%;
            background-color: #eee;
          }
          
          .tiles {
            --tiles-height: 52vw;
            height: var(--tiles-height);
            position: relative;
            overflow: hidden;
          }
          
          .tiles__wrap {
            width: 150%;
            --tileswrap-height: var(--tiles-height);
            height: var(--tileswrap-height);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
          
          .tiles__line {
            display: flex;
          }
          
          .tiles__line-img {
            --tile-margin: 2vw;
            flex: none;
            width: calc(16.6666% - var(--tile-margin) * 2);
            height: calc(var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2));
            margin: var(--tile-margin);
            background-size: cover;
            background-position: 50% 50%;
          
            transition: all 1s;
          }
          
          .tiles__line-img:hover {
            border-radius: 50%;
            opacity: 0.5;
          }
          
          /* New */
          
          .tiles--columns .tiles__line {
            width: 25%;
            padding: 0 1rem;
            display: block;
          }
          
          .tiles--columns .tiles__wrap {
            width: 100%;
            display: flex;
            --tileswrap-height: calc(var(--tiles-height) * 1.4);
            transform: translate3d(0, -50%, 0);
            left: 0;
            top: 50%;
          }
          
          .tiles--columns .tiles__line-img {
            --tile-margin: -11rem 0;
            width: 100%;
            height: calc(25vw * 1.3);
          }
          
          .tiles--columns {
            --tiles-height: 140vh;
          }
          
          
    `
      }}
    />
 
  </>
)}
