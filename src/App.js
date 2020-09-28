import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navigation/Nav";
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
      <Navbar />
      <Route path="/" exact><App />
        </Route>
        <Route path="/components/sections/Header" exact><Header />
        </Route>
        <Route path="/components/sections/Features" exact><Features />
        </Route>
        <Route path="/components/sections/Testimonials" exact><Testimonials />
        </Route>
        <Route path="/components/sections/Press" exact><Press />
        </Route>
        <Route path="/components/sections/Pricing" exact><Pricing />
        </Route>
        <Route path="/components/sections/Contact" exact><Contact />
        </Route>
        <Route path="/components/sections/Footer" exact><Footer />
        </Route>
    </div>
    </Router>
    
    </>
  );
}
