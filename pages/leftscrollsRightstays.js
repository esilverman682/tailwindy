import React  from "react";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
import Scrollbar from 'smooth-scrollbar';

//import ScrollToPlugin from "gsap/ScrollToPlugin";
 import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

{{ /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */}}
export default function Some() {

 // const plugins = [ScrollToPlugin];

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    let bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
    });
    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    
    
    
    
    
    
    
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
    
    var images = gsap.utils.toArray('.panel:not(.purple)');
    
    images.forEach((image, i) => {
      
      var tl = gsap.timeline({
        
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + (window.innerHeight*(i+0.5)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,     
        }
        
      })
      
      tl
      .to(image, { height: 0 })
      ;
      
    });
    
    
    
    
    
    
    
    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
    
    var texts = gsap.utils.toArray('.panel-text');
    
    texts.forEach((text, i) => {
      
      var tl = gsap.timeline({
        
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + (window.innerHeight*i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,     
        }
        
      })
      
      tl
      .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
      .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
      ;
      
    });
 
    ScrollTrigger.create({
    
        trigger: "section.black",
        scroller: ".scroller",
        scrub: true,
        markers: true,
        pin: true,
        start: () => "top top",
        end: () => "+=" + ((images.length + 1) * window.innerHeight),
        invalidateOnRefresh: true,
    
    });
}, []);
 
 

  return (
<>
<div>
<div className="scroller">
      
			<section className="orange">
				<div className="text">This is some text inside of a div block.</div>
			</section>
      
			<section className="black">
        
				<div className="text-wrap">          
          <div className="panel-text blue-text">Blue</div> 
          <div className="panel-text red-text">Red</div>   
          <div className="panel-text orange-text">Orange</div> 
          <div className="panel-text purple-text">Purple</div> 
        </div>
        
				<div className="p-wrap">
					<div className="panel blue"></div> 
					<div className="panel red"></div>
					<div className="panel orange"></div> 
					<div className="panel purple"></div> 
				</div>
        
			</section>
      
			<section className="blue"></section>
      
		</div>

  <style
    dangerouslySetInnerHTML={{
        __html: `
        body,
        html {
          margin: 0;
        }
        .scroller {
          height: 100vh;
        }
        
        .orange {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          height: 100vh;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          background-color: #753500;
        }
        
        .text {
          color: #fff;
        }
        
        .black {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          height: 100vh;
          -webkit-justify-content: space-around;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          background-color: #070707;
        }
        
        .blue {
          height: 100vh;
          background-color: #00026d;
        }
        
        
        .text-wrap {
          position: relative;
          overflow: hidden;
          width: 450px;
          height: 80vh;
        }
        
        .panel-text {
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 1;
          width: 100%;
          height: 100%;
          font-size: 40px;
          text-transform: uppercase;
          font-weight: 900;
          text-align:center;
          background-color: #070707;
          
          transform:translateY(100%);
          opacity: 0;
        }
        
        .panel-text.blue-text {
          color: blue;
        }
        
        .panel-text.red-text {
          color: red;
        }
        
        .panel-text.purple-text {
          color: purple;
        }
        
        .panel-text.orange-text {
          color: orange;
        }
        
        
        
        
        
        
        .p-wrap {
          position: relative;
          overflow: hidden;
          width: 450px;
          height: 80vh;
        }
        
        .panel {
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 1;
          width: 100%;
          height: 100%;
          background-image: url("../images/5ed12171d9d512cb2feead83_5.jpg");
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
        }
        
        .panel._2 {
          z-index: 1;
          background-image: url("../images/5f5a5b3515c4dd0c2c455925_110642301_938622823267359_7859124022958180678_n201.jpg");
        }
        
        .panel.blue {
          z-index: auto;
        }
        
        .panel.red {
          z-index: auto;
          background-color: red;
          background-image: none;
        }
        
        .panel.orange {
          z-index: auto;
          background-color: #cf5d00;
          background-image: none;
        }
        
        .panel.purple {
          z-index: auto;
          background-color: #808;
          background-image: none;
        }
        

    `
    }}
    />     
  </div>
</>
  );
}
