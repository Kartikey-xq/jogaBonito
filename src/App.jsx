import React from "react";
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import  Navbar  from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText); //arnt automatically active and this line makes sure that thes plugins are ready to use globaly you just need to regiter them once.


function App() {
  return (<>
    <Navbar />
    <Hero />
    <Cocktails />
  </>
  );
}

export default App;