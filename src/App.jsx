import React from "react";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Features from "./Pages/Features";
import Hero from "./Pages/Hero";
import GadgetListing from "./Pages/GadgetListing";
import ContactUs from "./Pages/ContactUs";


const App = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <GadgetListing />
    <ContactUs />
  </>
);


export default App