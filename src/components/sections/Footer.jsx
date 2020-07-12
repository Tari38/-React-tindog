import React from "react";

import "./styles/Footer.css";

const CURRENTYEAR = new Date().getFullYear();

 function Footer() {
  
    return (

  <section>


    <footer className="white-section" id="footer">

      <div className="container-fluid">
        <button type="button" className="btn twitter"><i
             className="fab fa-twitter"></i></button>
        <button type="button" className="btn facebook"><i
             className="fab fa-facebook"></i></button>
        <button type="button" className="btn instagram"><i
             className="fab fa-instagram"></i></button>
        <button type="button" className="btn envelope"><i
             className="fas fa-envelope"></i></button>
        <p>TinDog © {CURRENTYEAR} by Samantha Dorrell</p>
      </div>
    </footer>
    </section>
    )
  }

  export default Footer;