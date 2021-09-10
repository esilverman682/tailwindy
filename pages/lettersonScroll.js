/* eslint-disable @next/next/no-img-element */
import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
 import styleso from "@/components/PrimaryAnimatedLayout.module.scss"
import imagesLoaded from "imagesloaded";
import  {useEffect } from "react";
import stylo from "@/components/stylo.module.scss"
import Image from "next/image";
export default function PrimaryAnimatedLayout() {
 
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

  const images = gsap.utils.toArray("img");
  const loader = document.querySelector(".loader--text");
  const updateProgress = (instance) =>
    (loader.textContent = `${Math.round(
      (instance.progressedCount * 100) / images.length
    )}%`);

  const showDemo = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        }
      );
    });
  };

  imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
  // useEffect(
  // 	() => {
  // 		showDemo();
  // 	},
  // 	[ 0 ]
  // );

}, []); 

  return (
    <div className="">
    <div className="primary--animated--wrapper">
      <div className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text">0%</h2>
        </div>
      </div>
      <div className="demo-wrapper">
        <header className="df aic jcc">
          <div>
            <h1>ScrollTrigger</h1>
            <h2>demo</h2>
          </div>
        </header>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=71"
                width="1240" alt=""
               
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=62"
                width="1240"
                alt=""
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=52"
                width="1240"
                        alt=""
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=167"
                width="1240"
                alt=""
              />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=76"
                width="1240"
                alt=""
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=111"
                width="1240"
                alt=""
                />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=87"
                width="1240"
                alt=""
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=111"
                width="1240"
                alt=""
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=189"
                width="1240"
                alt=""
                />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=127"
                width="1240"
                alt=""
                />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=80"
                width="1240"
              />
            </li>
            <li>
              <img 
                height="874"
                src="https://source.unsplash.com/random/1240x874?sig=196"
                width="1240"
                alt=""
                />
            </li>
          </ul>
        </section>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
        <footer className="df aic jcc">
          <p>
            Images from <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </footer>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        footer {
          width: 600px;
          max-width: 90%;
          margin: 2rem auto;
          a {
            color: black;
            text-decoration: none;
            font-weight: 900;
            cursor: pointer
          }
        }
        
        .animation-container {
          width: 600px;
          max-width: 90%;
          margin: 2rem auto;
        }
          .animation-container.button {
            font-weight: 100;
            color: black;
            font-size: 1rem;
            width: 100%;
            display: block;
            border-radius: 2rem;
            background: black;
            outline: none;
            color: white;
            cursor: pointer;
            padding: 2rem;
          }
        
        
        .boxes {
          margin: 2rem 0;
        }
        .boxes.single {
            height: 4rem;
            border-radius: 2rem;
            width: 100%;
            margin: 2rem 0;
            background: lightpink;
            pointer-events: none;
          }
      


        
          .primary--animated--wrapper  
            h1 {
              font-size: 5rem;
            }
            h2 {
              font-size: 2rem;
            }
          
            img {
              width: 100%;
              height: auto;
              background: #f0f0f0;
            }
          
            ul {
              padding-left: 1rem;
              list-style: none;
            }
          
            li {
              flex-shrink: 0;
              width: clamp(500px, 60vw, 800px);
              padding-right: 1rem;
            }
          
            header {
              height: 100vh;
            }
            footer {
              height: 50vh;
            }
          
            :-webkit-any-link {
              color: #4e9815;
            }
          
            :-moz-any-link {
              color: #4e9815;
            }
          
            :any-link {
              color: #4e9815;
            }
          
            .df {
              display: flex;
            }
            .aic {
              align-items: center;
            }
            .jcc {
              justify-content: center;
            }
          
            .loader {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: black;
              color: white;
            }
          
            .demo-wrapper {
              overflow-x: hidden;
            }
          
            .wrapper {
              display: flex;
            }
          
            .demo-gallery:not(.last) {
              padding-bottom: 1rem;
            }
          
            .demo-text .text {
              font-size: clamp(8rem, 15vw, 16rem);
              line-height: 1;
              font-weight: 900;
            }
          
          
          

                   `
      }}
    />
    </div>
  );
};

 