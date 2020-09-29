import React, { Component } from "react";
import tcLogo from "../images/TechCrunch.png";
import tnwLogo from "../images/tnw.png";
import bizLogo from "../images/bizinsider.png";
import mashableLogo from "../images/mashable.png";


import "./styles/Press.css";

export default class Press extends Component {
  render() {
    return (
    <>
    <section className="colored-section" id="press">
      <img className="press-logo" src={tcLogo} alt="tc-logo"></img>
      <img className="press-logo" src={tnwLogo} alt="tnw-logo"></img>
      <img className="press-logo" src={bizLogo} alt="biz-insider-logo"></img>
      <img className="press-logo" src={mashableLogo} alt="mashable-logo"></img>

    </section>
    </>
  )
  }
  }