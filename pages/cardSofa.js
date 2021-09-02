
import React from "react"
 
<style jsx>{`
    .circles{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;  
    }
    .circles li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }
    
    
    .circles li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    
    .circles li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }
    
    .circles li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    
    .circles li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }
    
    .circles li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }
    
    .circles li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }
    
    .circles li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    
    .circles li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }
    
    .circles li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }
    @keyframes animate {
    
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }
    
        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    
    }

`}</style>


export default function two() {
   return (

 
 
    <div class="flex justify-center items-center h-screen bg-gray-100 w-full">
    <div
      class="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96
      "
    >
      <img
        class="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
        src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
        alt="image"
      />

      <div
        class="
          flex-1
          w-full
          flex flex-col
          items-baseline
          justify-around
          h-1/2
          pl-6
          sm:h-full sm:items-baseline sm:w-1/2
        "
      >
        <div class="flex flex-col justify-start items-baseline">
          <h1 class="text-lg font-normal mb-0 text-gray-600 font-sans">
            Furniture
          </h1>
          <span class="text-xs text-indigo-300 mt-0">by supplier</span>
        </div>
        <p class="text-xs text-gray-500 w-4/5">
          Ergonimical for human body curv
        </p>
        <div class="w-full flex justify-between items-center">
          <h1 class="font-bold text-gray-500">$200</h1>
          <button
            class="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
)
}


