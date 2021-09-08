import React, { useEffect, useRef } from "react";
 
import {TimeLine, TweenMax,  Power3 } from "gsap";
 
import imgGirl from "./girl.webp";
import imgBoy from "./boy.webp";
import  "@/components/styles.module.scss"
import gsap from "gsap";
import Image from 'next/image'
export default function Mask() {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //let tl = new TimelineLite({ delay: 0.8 });
//  let tl = gsap.timeline({repeat: 2, repeatDelay: 1});
  let tl = gsap.timeline({ delay: 0.8 });
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Remove initial flash
     tl.to(app, 0, {
      visibility: "visible"
    });

    // Images Animation
    gsap.timeline(
      girlImage, 1.2, {
        y: 1280,
        ease: Power3.easeOut
      },
      "Start"
    )
    gsap.timeline(
        girlImage.firstElementChild, 2, {
          scale: 1.6,
          ease: Power3.easeOut
        },
        0.2
      )
      gsap.timeline(
        boyImage, 1.4, {
          y: 1280,
          ease: Power3.easeOut
        },
        0.2
      )
      gsap.timeline(
        boyImage.firstElementChild, 2, {
          scale: 1.6,
          ease: Power3.easeOut
        },
        0.2
      );

    // Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      gsap.from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
      
      gsap.to("h2", 1, {x:200, repeat:-1, yoyo:true})

  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
                <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700i&display=swap");

          html body {
              padding: 0;
              margin: 0;
              font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            }
         
          
          .hero {
            visibility: hidden;
            height: 100vh;
          }
            .container {
              width: 1240px;
              min-width: 1240px;
              margin: 0 auto;
            }
              .hero-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 24px;
                height: 100vh;
              }
                .hero-content {
                  width: 50%;
                }
                  .hero-content-inner {
                    width: 400px;
                    color: #323232;
                    margin: 0 auto;
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
                        .hero-content-line-inner {
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
                        letter-spacing: 0.7px;
                        display: flex;
                        align-items: center;
                        position: relative;}

                        button:focus {
                          outline: none;
                        }
                      
                    
                       
                
                .hero-images {
                  width: 50%;
                  height: 100vh;
                  position: relative;
                }
                  .hero-images-inner .hero-image {
                      position: absolute;
                      overflow: hidden; 
                    }

                    .hero-images .hero-images-inner .hero-image .girl {
                        top: 0;
                        right: 0px;
                        width: 45%;
                        height: 50%;
                      }
                      .hero-images .hero-images-inner .hero-image .boy {
                        bottom: 24px;
                        left: 0px;
                        width: 52%;
                        height: 65%;
                      }
                      .hero-images .hero-images-inner .hero-image img {
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
              <h2>Add your own HTML, CSS and JS</h2>

              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">Explore</button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => (images = el)} className="hero-images-inner">
              <div className="hero-image girl">

         <picture style={{ objectFit: 'cover' }}>
          <source
            srcSet={require('./girl.webp')}
            type="image/webp"
          />
          <Image src={imgGirl} alt=''  width={500}
      height={500}/>
        </picture>

                   </div>
              <div className="hero-image boy">
              <picture style={{ objectFit: 'cover' }}>
          <source
            srcSet={require('./boy.webp')}
            type="image/webp"
          />
          <Image src={imgBoy} alt=''   width={500}
      height={500}/>
        </picture>

               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 

 
}