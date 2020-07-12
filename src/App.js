import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navigation/Nav";
import Header from "./components/sections/Header";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Press from "./components/sections/Press";
import Contact from "./components/sections/Contact";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";

import "./styles.css";

export default function App() {
  return (
    <>
    <Router>
    <div className="App">
        <NavBar />
        <Header />
        <Features />
        <Testimonials />
        <Press />
        <Pricing />
        <Contact />
        <Footer />
    </div>
    </Router>
    
    </>
  );
}