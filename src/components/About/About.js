import React from "react";
import image from "./img1.jpg";

function About() {
  return (
    <div className="container">
      <div className="about-container">
      <h1 className="text-center pb-2">Who We Are</h1>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={image} className="img-fluid"></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1 className="text-center">Travel</h1>
            <p className="text-center text-justify">was born out of our desire to spread the magic of travel through 
            the logic of tech. When you use us to create, customize and book trips, great care
             goes into replicating the adrenaline rush and sense of control of self-planning. At the same
              time, we also ensure that technology does all the heavy lifting - personalization, curation, 
              booking, reminders, on trip recommendations, etc. All of this to give you that hassle-free trip
               that you worked so hard year long. Go ahead, unwrap the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
