import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

import "./Nav.css";

function NavBar() {

  return (
    <>

  <Navbar className="navbar justify-content-between" dark expand="md">
    <div className="navbar-brand">
      <h1>tindog</h1>
    </div>

    <div className="navlink">
      <Link className="navlink" to="./components/sections/pricing">Pricing</Link>
      <Link className="navlink" to="./components/sections/contact">Contact</Link>
      <Link className="navlink" to="./components/sections/download">Download</Link>
    </div>
    
  </Navbar>
    </>
    )
  }

  export default NavBar;
