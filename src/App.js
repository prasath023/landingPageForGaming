import React from "react"
import Footer from "./Footer";
import Header from "./Header"
import Main from "./Main";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Swiper from './Swiper'

function App() {
  return (
    <div className="h-screen" >
      <Header />
      <Main className="h-5/6"/>
      <Section1/>
      <Section2/>
      <div className="h-56 md:hidden">
      <Swiper className=""/>
      </div>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default App;
