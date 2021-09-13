import React  from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect, useState, useRef } from "react"; 


const sections = [
  {
    title: 'Architecto aliquam', 
    subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
  },
  {
    title: 'Ceritatis placeat', 
    subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
  },
  {
    title: 'Vitae voluptates', 
    subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
  }
];

export default function Some() {
  gsap.registerPlugin(ScrollTrigger);

  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== '#262626' ? '#262626' : '#1b4943';
    setBackground(color);
  }

  useEffect(() => {

    gsap.to(headerRef.current, { backgroundColor: background, duration: 1,  ease: 'none' });

  }, [background]);

  useEffect(() => {

    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
      <img 
            className="greensock-icon"
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=76"
            width="1240"
            alt=""
          />
   
        <button onClick={() => toggleBackground()}>Change background</button>
        <p>
          Scroll down to see sections being revealed by ScrollTrigger.
        </p>
      </header>
      <main className="App-main">
        {
          sections.map(({title, subtitle}) => (
            <div className="App-section" key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          ))
        }
      </main>
      <style
    dangerouslySetInnerHTML={{
        __html: `     
      .App {
  text-align: center;
}

.App-logo {
  pointer-events: none;
  max-width: 100%;
}

.App-header {
  background-color: #262626;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

.App-main {
  padding: 200px 10% 400px 10%;
  margin: 0 auto;
  background: #FC466B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.App-section {
  max-width: calc(80% - 50px);
  margin: 0 auto 100px auto;
  padding: 50px;
  background-color: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

`
    }}
    />    
    </div>
  );
}

 
