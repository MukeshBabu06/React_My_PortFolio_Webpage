import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Portfolio/Experience";
import Education from "./Portfolio/Education";
import Contact from "./Portfolio/Contact";
import Mainpage from "./Portfolio/Mainpage";
import Skills from "./Portfolio/Skills";
import PortFNopage from "./Portfolio/PortFNopage";
import { useState } from "react";

function App() {
  return (
    <>
    <div className="App">
      
      <Routes>
        <Route element={<Mainpage/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Experience" element={<Experience/>} />
          
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<PortFNopage/>} />
        </Route>
      </Routes>
      {/* <Route path="/Education" element={<Education/>} /> */}
     </div>
     </>
  );
}

export default App;
