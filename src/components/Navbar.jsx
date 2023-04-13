import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#005555] h-20 p-5 px-10 rounded-md flex justify-between items-center">
      <h1 className="text-[#C7DADA] text-xl font-medium hover:text-white cursor-pointer">
        Property
      </h1>
      <div className="w-2/5">
        <ul className="flex justify-between w-full text-sm">
          <li className="text-[#C7DADA] hover:text-white cursor-pointer">
            Home
          </li>
          <li className="flex space-x-2 items-center group relative text-[#C7DADA] hover:text-white cursor-pointer">
            Properties <RiArrowDropDownLine className="text-xl" />
            <ul class="absolute invisible opacity-0 bg-white text-black w-36 space-y-3 p-5">
              <li>Buy Property</li>
              <li>Sell Property</li>
              <li className="flex space-x-2 items-center group relative">
                Dropdown
                <MdKeyboardArrowRight />
                <ul class="absolute invisibles hidden opacity-0 bg-white text-black w-36 space-y-3 p-5">
                  <li>Buy Property</li>
                  <li>Sell Property</li>
                  <li className="flex space-x-2 items-center"></li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer">
            Services
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer">
            About
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
