import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Promotions from "../Promotions/Promotions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Home() {
  return (
   <>
   <Banner />
   <About />
   <Promotions />
   <Contact />
   <Footer />
   </>
  );
}

export default Home;
