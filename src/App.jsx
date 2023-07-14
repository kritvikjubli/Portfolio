import React from "react"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <> 
      <Navbar/>
      <Home/>
      <About/>
      <Social/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  );
}
export default App;