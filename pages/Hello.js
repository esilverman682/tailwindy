/* eslint-disable @next/next/no-img-element */
import React  from "react";
  import  { useEffect } from "react"; 
 
{{ /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */}}
export default function Hello() {
 
  useEffect(() => {
    ({ name }) => <h1>Hello {name}!</h1>;
}, []);
 
 

  return (
<> 

 <h1>Hi There</h1>

  <style
    dangerouslySetInnerHTML={{
        __html: `
    `
    }}
    />
</>
  );
}

 