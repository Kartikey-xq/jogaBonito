import React from "react";
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText); //arnt automatically active and this line makes sure that thes plugins are ready to use globaly you just need to regiter them once.


function App() {
  return (
    //utility class for flex center is added in index.css file and we can use it here as well as in other components if needed.
    <div className="App flex-center h-screen">
      <h1 className=" text-3xl text-indigo-300">Welcome to React!</h1>
    </div>
  );
}

export default App;