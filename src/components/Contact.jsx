import React from "react";
import "./Com.css";
import Navigationbar from "../pages/Navigationbar";
import WebFooter from "../pages/WebFooter";


function Contact() {
  return (
    <div>       
    <Navigationbar/>
      <div>
        <h2 className="cont">Contact US</h2>
          <p className="contpara">
            You can send us an email on ajithajith17581@gmail.com or call us on
            +91 8610022751
          </p>
        </div>
        <div className="contdetails">
          <form>
        <label for="name">Name</label>
        <input type="text" id="fname" name="name" />
        </form>
        <form>
        <label for="name">Email</label>
        <input type="text" id="fname" name="name" />
        </form>
        <form>
        <label for="name">Phone</label>
        <input type="text" id="fname" name="name" />
        </form>
        <form>
        <label for="name">Your Issues</label>
        <input type="text" id="fname" name="name" />
        </form>
        <form>
          <button className="contbtn">SUBMIT</button>
        </form>
        </div>
      <footer>
        <WebFooter/>
      </footer>
    </div>
  );
}

export default Contact;
