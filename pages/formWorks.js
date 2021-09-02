
import React from "react"
 import Navvie from "@/components/navvie"
 



export default function contactUssample() {

<style jsx>{`
 
      `}</style>
	  
   return (
 
              <section>

             <div className="container items-center px-5 py-12 lg:px-20">
               
                  <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2">
                  <h1 class="mb-8 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
                <span>Hi,&nbsp;</span> 
                <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                   Contact Us 
                </span> 
                <span>&nbsp;around your product 🚀
                </span>
            </h1>
                 <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="gridTitle"> Title </label>
                        <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="grid-title" type="text" name="title" placeholder="The Unicorns Feed..." required=""/>

                      </div>
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="grid-url"> URL </label>
                        <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="grid-url" type="text" name="url" placeholder="https://..." required=""/>

                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="description"> Description </label>
                        <textarea className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" 
                        id="description" type="text" name="description" placeholder="Message..." required="">
                        </textarea>
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-2 -mx-3">
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="email"> Email </label>
                        <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" 
                        id="email" type="email" name="email" placeholder="email@example.com"/>
                      </div>
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="date"> Date </label>
                        <div className="relative ">
                          <select name="date[]" className="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                            <option className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912"> Tuesday 19.01.21</option>
                            <option className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912"> Tuesday 02.02.21</option>
                            <option className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912"> Tuesday 16.02.21</option>
                            <option className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912"> Tuesday 02.03.21</option>
                          </select>
                           <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                            <svg fill="#ffffff" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full pt-4">
                      <button className="w-full py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Button </button>
                    </div>
                  </form>
                </div>
              </section>
            
 
 
    
   
  
 
)
}


