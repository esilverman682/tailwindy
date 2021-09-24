/* eslint-disable @next/next/no-img-element */
import React  from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
import Image from "next/image";
{{ /*   REFERENCE : https://codesandbox.io/s/smooth-scroll-wjip5?file=/src/styles.css:0-4096  */}}
export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

 
/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */
 {
  // helper functions
  const MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
    // linear interpolation
    lerp: (a, b, n) => (1 - n) * a + n * b,
    // Random float
    getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
  };

  // body element
  const body = document.body;

  // calculate the viewport size
  let winsize;
  const calcWinsize = () =>
    (winsize = { width: window.innerWidth, height: window.innerHeight });
  calcWinsize();
  // and recalculate on resize
  window.addEventListener("resize", calcWinsize);

  // scroll position
  let docScroll;
  // for scroll speed calculation
  let lastScroll;
  let scrollingSpeed = 0;
  // scroll position update function
  const getPageYScroll = () =>
    (docScroll = window.pageYOffset || document.documentElement.scrollTop);
  window.addEventListener("scroll", getPageYScroll);

  // Item
  class Item {
    constructor(el) {
      // the .item element
      this.DOM = { el: el };
      // the inner image
      this.DOM.image = this.DOM.el.querySelector(".content__item-img");
      this.DOM.imageWrapper = this.DOM.image.parentNode;
      this.DOM.title = this.DOM.el.querySelector(".content__item-title");
      this.renderedStyles = {
        // here we define which property will change as we scroll the page and the item is inside the viewport
        // in this case we will be:
        // - scaling the inner image
        // - translating the item's title
        // we interpolate between the previous and current value to achieve a smooth effect
        imageScale: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          setValue: () => {
            const toValue = 3.5;
            const fromValue = 1;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return Math.max(Math.min(val, toValue), fromValue);
          }
        },
        titleTranslationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          fromValue: Number(MathUtils.getRandomFloat(30, 400)),
          setValue: () => {
            const fromValue = this.renderedStyles.titleTranslationY.fromValue;
            const toValue = -1 * fromValue;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return fromValue < 0
              ? Math.min(Math.max(val, fromValue), toValue)
              : Math.max(Math.min(val, fromValue), toValue);
          }
        }
      };
      // gets the item's height and top (relative to the document)
      this.getSize();
      // set the initial values
      this.update();
      // use the IntersectionObserver API to check when the element is inside the viewport
      // only then the element styles will be updated
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(
            entry => (this.isVisible = entry.intersectionRatio > 0)
          );
        },
        { rootMargin: "1000px" }
      );
      this.observer.observe(this.DOM.el);
      // init/bind events
      this.initEvents();
    }
    update() {
      // sets the initial value (no interpolation)
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // apply changes/styles
      this.layout();
    }
    getSize() {
      const rect = this.DOM.el.getBoundingClientRect();
      this.props = {
        // item's height
        height: rect.height,
        // offset top relative to the document
        top: docScroll + rect.top
      };
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      // gets the item's height and top (relative to the document)
      this.getSize();
      // on resize reset sizes and update styles
      this.update();
    }
    render() {
      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }

      // and apply changes
      this.layout();
    }
    layout() {
      // scale the image
      this.DOM.image.style.transform = `scale3d(${
        this.renderedStyles.imageScale.previous
      },${this.renderedStyles.imageScale.previous},1)`;
      // translate the title
      this.DOM.title.style.transform = `translate3d(0,${
        this.renderedStyles.titleTranslationY.previous
      }px,0)`;
    }
  }

  // SmoothScroll
  class SmoothScroll {
    constructor() {
      // the <main> element
      this.DOM = { main: document.querySelector("main") };
      // the scrollable element
      // we translate this element when scrolling (y-axis)
      this.DOM.scrollable = this.DOM.main.querySelector("div[data-scroll]");
      // the items on the page
      this.items = [];
      this.DOM.content = this.DOM.main.querySelector(".content");
      [...this.DOM.content.querySelectorAll(".content__item")].forEach(item =>
        this.items.push(new Item(item))
      );
      // here we define which property will change as we scroll the page
      // in this case we will be translating on the y-axis
      // we interpolate between the previous and current value to achieve the smooth scrolling effect
      this.renderedStyles = {
        translationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          // in this case the value of the translation will be the same like the document scroll
          setValue: () => docScroll
        }
      };
      // set the body's height
      this.setSize();
      // set the initial values
      this.update();
      // the <main> element's style needs to be modified
      this.style();
      // init/bind events
      this.initEvents();
      // start the render loop
      requestAnimationFrame(() => this.render());
    }
    update() {
      // sets the initial value (no interpolation) - translate the scroll value
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // translate the scrollable element
      this.layout();
    }
    layout() {
      this.DOM.scrollable.style.transform = `translate3d(0,${-1 *
        this.renderedStyles.translationY.previous}px,0)`;
    }
    setSize() {
      // set the heigh of the body in order to keep the scrollbar on the page
      body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
    }
    style() {
      // the <main> needs to "stick" to the screen and not scroll
      // for that we set it to position fixed and overflow hidden
      this.DOM.main.style.position = "fixed";
      this.DOM.main.style.width = this.DOM.main.style.height = "100%";
      this.DOM.main.style.top = this.DOM.main.style.left = 0;
      this.DOM.main.style.overflow = "hidden";
    }
    initEvents() {
      // on resize reset the body's height
      window.addEventListener("resize", () => this.setSize());
    }
    render() {
      // Get scrolling speed
      // Update lastScroll
      scrollingSpeed = Math.abs(docScroll - lastScroll);
      lastScroll = docScroll;

      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }
      // and translate the scrollable element
      this.layout();

      // for every item
      for (const item of this.items) {
        // if the item is inside the viewport call it's render function
        // this will update item's styles, based on the document scroll value and the item's position on the viewport
        if (item.isVisible) {
          if (item.insideViewport) {
            item.render();
          } else {
            item.insideViewport = true;
            item.update();
          }
        } else {
          item.insideViewport = false;
        }
      }

      // loop..
      requestAnimationFrame(() => this.render());
    }
  }

  /***********************************/
  /********** Preload stuff **********/

  getPageYScroll();
  lastScroll = docScroll;
  new SmoothScroll();
}

}, []);
 
 

  return (
<>
<main>
      <div data-scroll className="page page--layout-2">
      <div data-scroll className="page page--layout-2">
				<h1 className="page__title">Smooth Scrolling Image Effects</h1>
				<div className="meta">
					<div className="meta__links">
						<a href="https://tympanus.net/codrops/?p=42459">Article</a>
						<a href="https://tympanus.net/Tutorials/SmoothScrollAnimations/">Previous Demo</a>
						<a href="https://github.com/codrops/SmoothScrollingImageEffects/">GitHub</a>
					</div>
					<div className="meta__demos">
						<a href="index.html" className="meta__demo meta__demo--current">01</a>
						<a href="index2.html" className="meta__demo">02</a>
						<a href="index3.html" className="meta__demo">03</a>
						<a href="index4.html" className="meta__demo">04</a>
						<a href="index5.html" className="meta__demo">05</a>
						<a href="index6.html" className="meta__demo">06</a>
					</div>
				</div>
				<div className="content content--full content--alternate">
					<div className="content__item content__item--wide">
						<span className="content__item-number">01</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/17.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Oh</h2>
						<p className="content__item-description">Little trees and bushes grow however makes them happy.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">02</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/21.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Ri</h2>
						<p className="content__item-description">We dont have to be committed. We are just playing here.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">03</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/19.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Nj</h2>
						<p className="content__item-description">I thought today we would do a happy little picture.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">04</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/20.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Mo</h2>
						<p className="content__item-description">Nature is so fantastic, enjoy it. Let it make you happy.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">05</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/18.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Ne</h2>
						<p className="content__item-description">We need a shadow side and a highlight side.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">06</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/16.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Wy</h2>
						<p className="content__item-description">Well put some happy little leaves here and there.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">07</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/11.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Tx</h2>
						<p className="content__item-description">With something so strong, a little bit can go a long way.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">08</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/4.jpg);"}}>    <Image src={require('/assets/beijing.webp')}  alt="image" /></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Sd</h2>
						<p className="content__item-description">There are no limits in this world.</p>
					</div>
					<p className="credits">Photography by <a href="https://www.instagram.com/byfoul/">Frankie Cordoba</a></p>
				</div>
			</div>
   {/*     <h1 className="page__title fixed">Smooth Scrolling Image Effects</h1>
        <div className="meta">
          <div className="mata__link">
            <a href="#">Article</a>
            <a href="#">Previous</a>
            <a href="#">Github</a>
          </div>
          <div className="meta__demos">
            <a href="#" className="meta__demo meta__demo--current">01</a>
            <a href="#" className="meta__demo">02</a>
            <a href="#" className="meta__demo">03</a>
            <a href="#" className="meta__demo">04</a>
            <a href="#" className="meta__demo">05</a>
          </div>
  </div> */}
        <div className="content content--full content--alternate">
          <div className="content__item content__item--wide">
            <span className="content__item-number">01</span>
            <div className="content__item-imgwrap">
              <div
                className="content__item-img"
                style={{backgroundImage:"url(/assets/beijing.webp)"}}
              > 
              
              <Image src={require('/assets/beijing.webp')}  alt="image" />
              
              </div>
            </div>
       
            <div className="content__item-deco"></div>
            <h2 className="content__item-title">
              Oh
            </h2>
            <p className="content__item-description">
              Little tress and bushes grow however makes them happy.
            </p>
          </div>
        {/* 
     <p className="credits">Photoraphy by Frankie Cordoba</p>
            */} 
        </div>
      </div>
      <div data-scroll className="page page--layout-2">
				<h1 className="page__title">Smooth Scrolling Image Effects</h1>
				<div className="meta">
					<div className="meta__links">
						<a href="https://tympanus.net/codrops/?p=42459">Article</a>
						<a href="https://tympanus.net/Tutorials/SmoothScrollAnimations/">Previous Demo</a>
						<a href="https://github.com/codrops/SmoothScrollingImageEffects/">GitHub</a>
					</div>
					<div className="meta__demos">
						<a href="index.html" className="meta__demo meta__demo--current">01</a>
						<a href="index2.html" className="meta__demo">02</a>
						<a href="index3.html" className="meta__demo">03</a>
						<a href="index4.html" className="meta__demo">04</a>
						<a href="index5.html" className="meta__demo">05</a>
						<a href="index6.html" className="meta__demo">06</a>
					</div>
				</div>
				<div className="content content--full content--alternate">
					<div className="content__item content__item--wide">
						<span className="content__item-number">01</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/17.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Oh</h2>
						<p className="content__item-description">Little trees and bushes grow however makes them happy.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">02</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/21.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Ri</h2>
						<p className="content__item-description">We don't have to be committed. We are just playing here.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">03</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/19.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Nj</h2>
						<p className="content__item-description">I thought today we would do a happy little picture.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">04</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/20.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Mo</h2>
						<p className="content__item-description">Nature is so fantastic, enjoy it. Let it make you happy.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">05</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/18.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Ne</h2>
						<p className="content__item-description">We need a shadow side and a highlight side.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">06</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/16.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Wy</h2>
						<p className="content__item-description">Well put some happy little leaves here and there.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">07</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/11.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Tx</h2>
						<p className="content__item-description">With something so strong, a little bit can go a long way.</p>
					</div>
					<div className="content__item content__item--wide">
						<span className="content__item-number">08</span>
						<div className="content__item-imgwrap"><div className="content__item-img" style={{backgroundImage: " url(img/4.jpg);"}}></div></div>
						<div className="content__item-deco"></div>
						<h2 className="content__item-title">Sd</h2>
						<p className="content__item-description">There are no limits in this world.</p>
					</div>
					<p className="credits">Photography by <a href="https://www.instagram.com/byfoul/">Frankie Cordoba</a></p>
				</div>
			</div>
    </main>


  <style
    dangerouslySetInnerHTML={{
        __html: `
        footer {
          display:none;
        }
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        
        :root {
          font-size: 16px;
        }
        
        body.cda-naked #cdawrap {
          top: 5vw;
          right: 5vw;
          --cda-text-color: var(--color-link);
          --cda-text-weight: inherit;
          font-size: 14px;
          --cda-width: 220px;
          padding: 0;
        }
        
        body {
          margin: 0;
          --color-text: #dc6e25;
          --color-bg: #efded3;
          --color-link: #000;
          --color-link-hover: #dc6e25;
          --aspect-ratio: 1/.9;
          --imgwidthmax: 1073px;
          --size-title: 10rem;
          --font-weight-title: 400;
          color: var(--color-text);
          background-color: var(--color-bg);
          font-family: sans-serif;
          font-size: 1.5rem;
          -webkit-font-smoothing: antialiased;
          -mos-osx-font-smoothing: grayscale;
        }
        
        .fixed {
          position: fixed;
        }
        
        .demo-1 {
          --color-text: #111;
          --color-bg: #bad5ca;
          --color-link-hover: #5c4541;
          --aspect-ratio: 32/17;
          font-size: 1.25rem;
          --size-title: 15vw;
        }
        
        a {
          text-decoration: none;
          color: var(--color-link);
          outline: none;
        }
        a:hover,
        a:focus {
          color: var(--color-link-hover);
          outline: none;
        }
        
        .page {
          display: grid;
          padding: 8vh 0px;
          max-width: 1400px;
          margin: 0 auto;
          grid-template-columns: 100%;
          grid-template-areas: "header" "meta" "grid";
          will-change: transform;
        }
        
        .page__title {
          grid-area: header;
          margin: 0 0 1rem;
          font-size: inherit;
        }
        .credits {
          text-align: center;
        }
        
        .meta {
          grid-area: meta;
        }
        
        .meta__links {
          display: flex;
          flex-wrap: wrap;
          line-height: 1.5;
        }
        
        .meta__links a {
          margin: 0 1.5rem 0 0;
        }
        
        .meta__demos {
          margin-top: 1--rem;
        }
        
        .meta__demo {
          display: inline-block;
          margin-right: 0.75rem;
        }
        .meta__demo--current {
          color: var(--color-link-hover);
          pointer-events: none;
        }
        
        .content {
          grid-area: grid;
          margin: 2vh 0 30vh;
        }
        
        .content--full {
          width: 100vw;
          justify-self: center;
        }
        
        .content__item {
          --imgwidth: calc(var(--imgwidthmax) * var(--aspect-ratio));
          width: var(--imgwidth);
          max-width: 100%;
          position: relative;
          will-change: transform;
          margin-bottom: 30vh;
          display: grid;
          grid-template-columns: 50% 50%;
        }
        
        .content__item--wide {
          grid-template-columns: 20% 80%;
        }
        
        .content__item--wide:nth-child(even) {
          grid-template-columns: 80% 20%;
        }
        
        .content--alternate .content__item {
        //  margin: 0 auto 15vh;
      margin 0;  
      }
        
        .content--alternate .content__item:nth-child(even) {
          margin-left: auto;
        }
        
        .content__item-imgwrap {
          position: relative;
          -imgwidth: 100%;
          margin: 0 auto;
          grid-area: 1/ 1/3/3;
          overflow: hidden;
          width: var(--imgwidth);
          padding-bottom: calc(var(--imgwidth) / (var(--aspect-ratio)));
          will-change: transform;
        }
        
        .content__item-img {
          --overflow: 40px;
          height: calc(0% + (2 * var(--overflow)));
          top: calc(-1 * var(--overflow));
          width: 100%;
          position: absolute;
          background-size: cover;
          background-position: 50% 0;
          will-change: transform;
          opacity: 0.8;
        }
        
        .content__item-number {
          opacity: 0.03;
          font-size: 25vw;
          position: absolute;
          top: -7vw;
          right: -10vw;
          line-height: 1;
        }
        
        .content__item:nth-child(even) .content__item-number {
          right: auto;
          left: -700vw;
        }
        
        .content__item-title {
          position: relative;
          font-size: var(--size-title);
          padding: 0 3vw;
          margin: calc(var(--size-title) * -1 / 2) 0 0 0;
          align-self: start;
          line-height: 1;
          font-weight: var(--font-weight-title);
          color: var(--color-title);
          will-change: transform;
        }
        
        .content__item-description {
          grid-area: 3/1/3/3;
          width: 70%;
          position: relative;
          margin: 0;
          padding: 1rem 0 0 0;
          color: var(--color-description);
        }
        
        .content--alternate .content__item-title,
        .content_item--wide:nth-child(even) .content__item-description {
          grid-area: 3/ 1/ 4/ 2;
          justify-self: start;
        }
        
        .content--alternate .content__item:nth-child(even) .content__item-title,
        .content__item--wide .content__item-description {
          grid-area: 3/2/4/3;
          justify-self: end;
          width: auto;
        }
        
        .content__item-deco {
          position: absolute;
          top: 2rem;
          left: 10vw;
          height: 30%;
          width: 1px;
          background: #d79612;
        }
        
        @media screen and (min-width: 53em) {
          .page--layout-2 {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "header meta" "... meta" "grid grid";
          }
        }
        
    `
    }}
    />     
 
</>
  );
}
