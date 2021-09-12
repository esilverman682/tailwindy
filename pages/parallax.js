 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/OJyPmgX */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.utils.toArray(".parallax").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {y: movement, ease: "none"}, 0)
    });
 
}, []);
  return (
    <>

<div id='hero'>
  <div className='layer-bg layer parallax' data-depth='0.10'></div>
  <div className='layer-1 layer parallax' data-depth='0.20'></div>
  <div className='layer-2 layer parallax' data-depth='0.50'></div>
  <div className='layer-3 layer parallax' data-depth='0.80'></div>
  <div className='layer-overlay layer parallax' data-depth='0.85'></div>
  <div className='layer-4 layer parallax' data-depth='1.00'></div>
</div>

<div id='content'>
  <div className='container'>
    <section className='first-section'>
      <div className='row'>
        <div className='col-sm-6'>
          <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too, that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically an excellent one.</p>
          <p>It may seem ridiculous, but it reminded me of General Washingtons head, as seen in the popular busts of him. It had the same long regularly graded retreating slope from above the brows, which were likewise very projecting, like two long promontories thickly wooded on top. Queequeg was George Washington cannibalistically developed.</p>
          <p>Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the storm from the casement, he never heeded my presence, never troubled himself with so much as a single glance; but appeared wholly occupied with counting the pages of the marvellous book. Considering how sociably we had been sleeping together the night previous, and especially considering the affectionate arm I had found thrown over me upon waking in the morning, I thought this indifference of his very strange. But savages are strange beings; at times you do not know exactly how to take them.</p>
        </div>
        <div className='col-sm-6'>
          <p>At first they are overawing; their calm self-collectedness of simplicity seems a Socratic wisdom. I had noticed also that Queequeg never consorted at all, or but very little, with the other seamen in the inn. He made no advances whatever; appeared to have no desire to enlarge the circle of his acquaintances. All this struck me as mighty singular; yet, upon second thoughts, there was something almost sublime in it. Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is—which was the only way he could get there—thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself.</p>
          <p>Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is—which was the only way he could get there—thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself. Surely this was a touch of fine philosophy; though no doubt he had never heard there was such a thing as that.</p>
        </div>
      </div>
    </section>
  </div>
</div>




 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 1280px){
          .xl:max-w-5xl {
              max-width: 100%;
          }
        }
        @media (min-width: 1280px){

        .xl\:max-w-5xl {
          max-width: 112rem;
      }

    }
          .max-w-5xl, .max-w-3xl {
            width: 100% !important;
          
          }
          header {
            display: none !important;
        }
  
          
          body {
            padding: 0;
            margin: 0;
            background-color:  #130d0a;
            font-family: 'Playfair Display', serif;
            color: white;
          }
          
          #hero {
            height: 800px;
            overflow: hidden;
            position: relative;
            max-width: 1920px;
            margin: 0 auto;
          }
          #content {
            background-color: #130d0a;
          }
          .layer {
            background-position: bottom center;
            background-size: auto;
            background-repeat: no-repeat;
            width: 100%;
            height:  800px;
            position: fixed;
            z-index: -1;
          }
          
          #hero-mobile {
            display: none;
            background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png") no-repeat center bottom / cover;
            height: 320px;
          }
          
          .first-section {
            padding: 50px 0 20px 0;
          }
          .text-header {
            font-size: 50px;
            text-align: center;
          }
          h1 {
            line-height: 120%;
            margin-bottom: 30px;
          }
          p {
            color: #ede0d5;
            font-size: 18px;
            line-height: 150%;
          }
          
          #hero, .layer {
            min-height: 800px;
          }
          
          .layer-bg {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg');
          }
          .layer-1 {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png');
            background-position: left bottom;
          }
          .layer-2 {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png');
          }
          .layer-3 {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png');
            background-position: right bottom;
          }
          .layer-4 {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png');
          }
          .layer-overlay {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png');
          }
          
          @media only screen and (max-width: 768px) {
            .layer-1 {
              background-position: 26% bottom;
            }
            .layer-3 {
              background-position: 35% bottom;
            }
          }
     
                   `
      }}
    />
 </>
 )
}