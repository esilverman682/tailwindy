/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "@/components/stylee.module.scss";


{{/* Reference: https://codesandbox.io/s/gsap-hero-animation-p70nt?file=/src/styles.scss:0-2941 */}}
export default function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = gsap.timeline({ delay: 0.8 });

  useEffect(() => {
    // Images vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Remove init flash
    gsap.to(app, 0, { css: { visibility: "visible" } });

    // Images animation
    tl.from(girlImage, 1.2, { y: 1280, ease: "power3.easeOut" }, "Start")
      .from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: "power3.easeOut" },
        0.2
      )
      .from(boyImage, 1.2, { y: 1280, ease: "power3.easeOut" }, 0.2)
      .from(
        boyImage.firstElementChild,
        2,
        { scale: 1.6, ease: "power3.easeOut" },
        0.2
      );

    // Content animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: "power3.easeOut",
        delay: 0.8
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: "power3.easeOut" }, 1.4)
      .from(
        contentButton,
        1,
        { y: 20, opacity: 0, ease: "power3.easeOut" },
        1.6
      );
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolitic diseases to transform
                lives and reduce helathcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">→</div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => (images = el)}>
              <div className="hero-image girl">
                <img
                  src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="girl"
                />
              </div>
              <div className="hero-image boy">
                <img
                  src="https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
                  alt="boy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
    dangerouslySetInnerHTML={{
        __html: `     
        @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');
 
        .hero {
          height: 100vh;
          visibility: hidden;
        }
          .container {
            width: 90%;
            margin: 0 auto;
          }
            .hero-inner {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0 24px;
              height: 100vh;
              overflow: hidden;
            }
              .hero-content {
                width: 50%;
              }
                .hero-content-inner {
                  width: 400px;
                  margin: 0 auto;
                  color: #323232;
                }
                  h1 {
                    font-weight: 500;
                    font-size: 32px;
                    margin-bottom: 24px;
                  }
                    .hero-content-line {
                      margin: 0;
                      height: 44px;
                      overflow: hidden;
                    }
              
                  p {
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 300;
                    padding-right: 48px;
                    margin-bottom: 56px;
                  }
                  .btn-row {
                    position: relative;
                  }
                  .btn-row:before {
                      position: absolute;
                      content: "";
                      width: 56px;
                      height: 1px;
                      background: #dfdfdf;
                      top: 50%;
                      left: -68px;
                    }
        
                    button {
                      background: none;
                      border: none;
                      font-size: 12px;
                      padding: 0;
                      cursor: pointer;
                      text-transform: uppercase;
                      font-weight: 700;
                      letter-spacing: .7px;
                      display: flex;
                      align-items: center;
                      position: relative;
                    }
                    button:focus {
                        outline: none;
                      }
        
                      .arrow-icon {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #007fff;
                        height: 42px;
                        width: 42px;
                        border-radius: 50vh;
                        left: 80px;
                        color: white;
                        font-size: 1.5em;
                      }
 
        
              .hero-images {
                width: 50%;
                height: 100vh;
                position: relative;
              }
              .hero-image {
                    position: absolute;
                    overflow: hidden;
              }
              .girl {
                      top: 0;
                      right: 0;
                      width: 45%;
                      height: 50%;
                    }
                .boy {
                      bottom: 24px;
                      left: 0px;
                      width: 52%;
                      height: 65%;
                    }
                    .hero-images  .hero-images-inner .hero-image img {
                      position: absolute;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      width: 100%;
                    }
    
`
    }}
    />    
    </div>
  );
}
