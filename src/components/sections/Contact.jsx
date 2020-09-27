import React from "react";

import "./styles/Contact.css";

export default function Contact() {
  
    return (
      <div>
        <section className="colored-section" id="cta">
          <div className="container-fluid">
            <h3 className="big-heading">Find the True Love of Your Dog's Life Today.</h3>
              <button type="button" btn-xl="true" className="btn btn-dark download-button">
              <i className="fab fa-apple"></i>Download</button>
              <button type="button" className="btn btn-light download-button" btn-xl="true">
              <i className="fab fa-google-play"></i> Download</button>
          </div>
        </section>
      </div>
    )
  }
