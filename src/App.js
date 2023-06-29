import React from "react";
import Navbar from'./components/Navbar';
import Hero from "./components/Hero";
import Card from"./components/Card";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";
function App() {
  return <div className="App">
    <Navbar/>
    <Hero/>
    <Card/>
    <Food/>
    <Category/>
    <Footer/>
  </div>;
}

export default App;
