import React from "react";
import { Navbar } from "./components";
import { AboutUs, FindUs, Footer, Gallery, Header } from "./container";
import "./App.css";

const App = () => (
  <div>
    <div className="bg-image"> 
      <Navbar />
      <Header />
    </div>
    <AboutUs />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);



export default App;
