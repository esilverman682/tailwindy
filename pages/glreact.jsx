
import React from "react"
 
 //@flow
import React, { Component } from "react";
import { Surface } from "gl-react-dom";

// Reuse that previous HelloBlue component to animate it...
import { HelloBlue } from "../helloblue";

// timeLoop is an utility that animates a component.
// in a requestAnimationFrame loop and provide a time and tick prop
import timeLoop from "../../HOC/timeLoop";



export default function blogList() {

	const { time } = this.props;
	  
   return (
 
<div>

<Surface width={300} height={300}>
        <HelloBlue blue={0.5 + 0.5 * Math.cos(time / 500)} />
      </Surface>
</div>
)
}




 