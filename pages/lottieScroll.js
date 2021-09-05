 
import { getAllFilesFrontMatter } from '@/lib/mdx'
 
import React from 'react';
import './App.css';
import lottie from 'lottie-web';
import animationData from './lottie/delivery.json';
const MAX_DISPLAY = 5



componentDidMount()=> {
  console.log('componentDidMount');
  
  //call the loadAnimation to start the animation
  animObj = lottie.loadAnimation({
    container: this.animBox, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData // the path to the animation json
  });
}
handleStop = () => {
  animObj.stop();
}
handlePlay() {
  animObj.play();
}
render() {
  return (

  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {

  let animObj = null;
  return (
    <>
      <div className="App">
        <h2>This is my Lottie Web animation</h2>
        {/* This is you wrapper where animation will load */}
        <div style={{width: 400, margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handlePlay}>Play</button>
      </div>
    </>
  )
}



 