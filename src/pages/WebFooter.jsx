import React from "react";
import './Navweb.css';
const WebFooter = () => (
  <footer className="page-footer font-small white pt-5">
    <div className="footbg">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase foothead1" style={{ color: "white" }}>
              Greengrocers
            </h5>
            <p style={{ color: "white" }} className="foothead1">A GG Enterprise</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
           
            <ul className="list-unstyled foothead1">
              <li href="#!" style={{ color: "white" }}>
                Home
              </li>
              <li href="#!" style={{ color: "white" }}>
               Careers 
              </li>
              <li href="#!" style={{ color: "white" }}>
              Delivery Area
              </li>
              <li href="#!" style={{ color: "white" }}>
                Customer Support
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
          
            <ul className="list-unstyled foothead1">
              <li href="#!" style={{ color: "white" }}>
                Privacy Policy
              </li>
              <li href="#!" style={{ color: "white" }}>
                Terms and Use
              </li>
              <li href="#!" style={{ color: "white" }}>
                Download App
              </li>
              <li href="#!" style={{ color: "white" }}>
              Responsible Discloser Policy
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="footer-copyright text-center py-3  foothead2"
        style={{ color: "red" }} >
      
        © 2024 Copyright:
        <a href="https://mdbootstrap.com/" style={{ color: "white" }} className="foothead2">
        
          Greengrocers.com
        </a>
      </div>
    </div>
  </footer>
);

export default WebFooter;
