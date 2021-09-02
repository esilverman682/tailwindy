
import React from "react"
export default function contactUssample() {

  const scrollProgress = () => {
    return {
        init() {
            window.addEventListener('scroll', () => {
                let winScroll = document.body.scrollTop || document.documentElement.scrollTop
                let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
                this.percent = Math.round((winScroll / height) * 100)
            })
        },
        circumference: 30 * 2 * Math.PI,
        percent: 0,
    }
}

TweenMax.from('.logo', 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom('.menu-links ul li', 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Power4.easeInOut
}, 0.08)

TweenMax.from('.search', 1, {
  delay: 1.6,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from('.cart', 1, {
  delay: 1.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.to('.border-bottom', 1, {
  delay: 1.4,
  width: '100%',
  ease: Expo.easeInOut
})

TweenMax.from('.subtitle', 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.to('.title', 1, {
  delay: 2.2,
  width: '100%',
  ease: Expo.easeInOut
})

TweenMax.from('.desc', 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from('.readmore', 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.to('.slider', 1, {
  delay: 3,
  opacity: 1,
  ease: Expo.easeInOut
})

TweenMax.to('.img-1', 1, {
  delay: 2.2,
  width: '450px',
  ease: Expo.easeInOut
})

TweenMax.to('.img-2', 1, {
  delay: 2.2,
  width: '300px',
  ease: Expo.easeInOut
})

TweenMax.to('.img-3', 1, {
  delay: 2.2,
  width: '300px',
  ease: Expo.easeInOut
})

TweenMax.to('.first', 1.5, {
  delay: .2,
  left: '-100%',
  ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
  delay: .4,
  left: '-100%',
  ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
  delay: .6,
  left: '-100%',
  ease: Expo.easeInOut
})

return (
<div>
  <div class="overlay first"></div>
  <div class="overlay second"></div>
  <div class="overlay third"></div>

  <div class="wrapper">

    <div class="nav">
      <div class="logo"><img src="./img/xxl-logo.jpg" alt="" /></div>
      <div class="menu-links">
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Music</li>
          <li>Videos</li>
          <li>Shop</li>
        </ul>
      </div>
      <div class="search"><i class="fa fa-search"></i></div>
      <div class="cart"><i class="fa fa-shopping-cart"></i></div>
    </div>
  </div>

  <hr class="border-bottom"/>

  <div class="content">

    <div class="text">
      <p class="subtitle">The Authority In</p>
      <h1 class="title">
        <span>Hip-Hop <br/> Culture</span>
      </h1>
      <p class="desc">XXL is the cultural phenomenon surrounding <br/> Hip Hop and Rap culture.</p>
      <a href="#" class="readmore">Scroll For More</a>
    </div>

    <div class="img-1"></div>

    <div class="slider">
      <div class="arrows">
        <ul>
          <li><i class="fa fa-arrow-left"></i></li>
          <li><i class="fa fa-arrow-right"></i></li>
        </ul>
      </div>
      <div class="pages"><span>01</span>/04</div>
    </div>

    <div class="img-2"></div>

    <div class="img-3"></div>

  </div>

</div>
 

 
 
   
        
   
)
}
