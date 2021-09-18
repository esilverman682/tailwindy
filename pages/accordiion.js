/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EasePack from 'gsap/dist/EasePack';
 
{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
  useEffect(() => {

  let groups = gsap.utils.toArray(".accordion-group");
  let menus = gsap.utils.toArray(".accordion-menu");
  let animations = groups.map(createAnimation);
  
  menus.forEach(menu => {
    menu.addEventListener("click", () => playAnimation(menu));
  });
  
  function playAnimation(selected) {
      
    animations.forEach(animate => animate(selected))
  }
  
  function createAnimation(element) {
      
    let menu = element.querySelector(".accordion-menu");
    let box  = element.querySelector(".accordion-content");
    
    gsap.set(box, { height: "auto"})
    let tween = gsap.from(box, { 
      height: 0, 
      duration: 0.5, 
      ease: "power1.inOut" 
    }).reverse();
    
    return function(selected) {
      
      let reversed = selected !== menu ? true : !tween.reversed();
      tween.reversed(reversed);
    }
  }
    
}, []);
  return (
    <>
<div className="accordion">

<div className="accordion-group">
  <div className="accordion-menu">
    Alpha
  </div>
  <div className="accordion-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </div>
</div>

<div className="accordion-group">
  <div className="accordion-menu">
    Bravo
  </div>
  <div className="accordion-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </div>
</div>

<div className="accordion-group">
  <div className="accordion-menu">
    Charlie
  </div>
  <div className="accordion-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </div>
</div>

<div className="accordion-group">
  <div className="accordion-menu">
    Delta
  </div>
  <div className="accordion-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </div>
</div>

<div className="accordion-group">
  <div className="accordion-menu">
    Echo
  </div>
  <div className="accordion-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </div>
</div>

</div>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          box-sizing: border-box;
        }
        
        .accordion {
          width: 250px;
          margin: 15px;
          box-shadow: 0 8px 17px rgba(0,0,0,.2);
        }
        
        .accordion-menu {
          font-size: 15px;
          background: #0277BD;
          color: white;
          padding: 10px;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
        }
        
        .accordion-content {
          height: 0;
          overflow: hidden;
          font-size: 14px;
        }
        
        .accordion-content.expanded {
          height: 0;
          overflow: hidden;
        }
        
        p {
          margin: 10px;
        }
        
        
          
     
                   `
      }}
    />
 </>
 )
}