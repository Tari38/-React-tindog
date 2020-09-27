import React, { Component } from "react";
import iphone from "../../images/iphone6.png";

import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <section className="colored-section" id="title">
          <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">Meet new and interesting dogs nearby.</h1>
              <button type="button" btn-lg="true" className="btn btn-dark download-button"><i
               className="fab fa-apple"></i> Download</button>
              <button type="button" className="btn btn-outline-light download-button"
                  btn-lg="true"><i className="fab fa-google-play"></i> Download</button>
            </div>
            <div className="col-lg-6">
              <img className="title-image" src={iphone} alt="iphone-mockup"></img>
            </div>
          </div>
          </div>
        </section>
      </>
    )
  }
}
