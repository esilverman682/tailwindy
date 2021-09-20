 
console.clear();
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll
//Adds Classes
document.documentElement.classList.add('is-loaded');

document.documentElement.classList.remove('is-loading');




// Timer Class or attribute
setTimeout(() => {
  document.documentElement.classList.add('is-ready');
  },300)
    


  // New Locomotive
  // select the section
  // state the locomotive action
const locoScroll = new LocomotiveScroll({

  el: document.querySelector('[data-scroll-content]'),

  smooth: true,

});
  


  // GSAP ScrollTrigger with locomotive scroll values
ScrollTrigger.scrollerProxy('[data-scroll-content]', {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  

    // RECTANGLE 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector('[data-scroll-content]').style.transform ? "transform" : "fixed"
});

document.addEventListener("scroll", ScrollTrigger.update);

//------------------- section replace color

  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
    ScrollTrigger.create({
      trigger: colorSection,
      scroller: '[data-scroll-content]',
      start: "top 50%",
      end: () => "+=" + colorSection.offsetHeight,
      onEnter: () => 
      gsap.to("body", {
        backgroundColor: colorSection.dataset.bgcolor,
        color: colorSection.dataset.textcolor,
        overwrite: "auto" }),

      onLeaveBack: () =>
      gsap.to("body", {
        backgroundColor: prevBg,
        color: prevText,
        overwrite: "auto"
      })
    });
  });
  
//end section replace color 

gsap.utils.toArray(".dark").forEach(el => {
  ScrollTrigger.create({
    scroller: '[data-scroll-content]',
    trigger: el,
    markers: true,
    start: "top 50%",
    end: () => "+=" + el.offsetHeight,
    toggleClass: { targets: '.logo, .ctn-triggers', className: 'light' }
  });
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

ScrollTrigger.refresh();