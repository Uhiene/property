import React from "react";
import Navbar from "../hero/Navbar";
import image from "../../assets/hero_bg_3.jpg";

const Header = () => {
  return (
    <div
      className="h-[70vh] bg-no-repeat bg-cover bg-top "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full bg-black bg-opacity-60 py-4 md:py-8 px-5 md:px-20 ">
        <Navbar />
        <div className="text-center text-white pt-20 space-y-10">
          <h1 className="text-4xl">5232 California AVE. 21BC</h1>
          <p className="text-sm">Home / Properties / <span className="text-gray-400">5232 California AVE. 21BC </span> </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
