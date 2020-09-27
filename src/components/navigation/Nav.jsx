import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

import "./Nav.css";

function NavBar() {

  return (
<>

    <section className="colored-section" id="title">
      <div className="container-fluid">
      
      <Navbar className="navbar justify-content-between" dark expand="md">
          <div>
            <a className="navbar-brand" href="/">tindog</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <Link className="navlink" to={"#cta"}>Contact</Link>
                <Link className="navlink" to={"#pricing"}>Pricing</Link>
                <Link className="navlink" to={"#footer"}>Download</Link>
              </ul>
            </div>
      </Navbar>

      </div>
    </section>
    </>
   
    )
  }

  export default NavBar;



