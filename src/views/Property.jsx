import React from "react";
import PropertySlide from "../components/properties/PropertySlide";
import PropertyTitle from "../components/properties/PropertyTitle";

const Property = () => {
  return (
    <div className="bg-white w-screen py-10 px-5 md:p-16 space-y-14">
      <PropertyTitle />
      <PropertySlide />
     
    </div>
  );
};

export default Property;
