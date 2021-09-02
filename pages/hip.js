
import React from "react"
import { TweenMax } from "gsap/gsap-core"
 
export default function Hip() {

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
