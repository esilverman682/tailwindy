import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
// const Comments = dynamic(() => import("@/components/Comments"));
const Comments = dynamic(() => import("@/components/Comments"));


  {{/*
IMPORT SECTION D.U.C.d (dynamic (() import function)
1. import useInView from "react-cool-inview";
2. import dynamic from "next/dynamic";
3. const Comments = dynamic(() => import("@/components/Comments"));

EXPORT DEFAULT FUNCTION NAME() { SECTION  using useInView with a constant containing 2 objects
  onEnter: function with object of unobserve which will reun the unobserve function  
  ****** OBSERVE AND INVIEW = USEINVIEW ******
  ****** ONENTER: AND ({UNOBSERVE}) => UNOBSERVE() ******

1.  const { observe, inView } = useInView ({ 
2.  onEnter: ({ unobserve }) => unobserve(), // only run once 
});

 

*/}}
export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      {/* adding some height so we have to scroll down */}
      <div style={{ minHeight: '4000px' }}>Scroll Down</div>

      {/* bind the observe to this ref so we can watch this element entering/exiting the viewport */}
      {/* when this comes into view, inView will be true */}
      <div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && <Comments />}
      </div>
    </>
  );
}