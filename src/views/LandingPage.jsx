import React from "react";
import Properties from "./Properties";
import Customer from "./Customer";
import Hero from "./Hero";
import YourHome from "./YourHome";
import RealEstate from "./RealEstate";
import Agent from "./Agent";
import Footer from "./Footer";
import Property from "./Property";
import bg1 from "../assets/hero_bg_1.jpg";
import bg2 from "../assets/hero_bg_2.jpg";
import bg3 from "../assets/hero_bg_3.jpg";

const LandingPage = () => {
  const images = [bg1, bg2, bg3];
  return (
    <div>
      <Hero images={images} className="w-screen" />
      <Property />
      <Properties />
      <Customer />
      <YourHome />
      <RealEstate />
      <Agent />
      <Footer />
    </div>
  );
};

export default LandingPage;
