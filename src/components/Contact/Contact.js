import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="container-fluid bgcontact align-items-center pt-4">
      <h1 className="text-center text-light">Contact</h1>
      <div className="row pt-2 align-items-center justify-content-center">
        <div className="col-offset-2 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-light">
          <h3>Address</h3>
          <h6> Cochi</h6>
          <h6> Kerala</h6>
          <h6> India</h6>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <ContactForm />
        </div>
      </div>
     
    </div>
  );
}

export default Contact;
