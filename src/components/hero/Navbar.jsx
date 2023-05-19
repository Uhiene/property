import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#005555] h-20 p-5 px-10 rounded-md flex justify-between items-center">
      <Link to={"/"}>
        <motion.h1
          className="text-[#C7DADA] text-xl font-medium  cursor-pointer"
          whileHover={{
            color: "white",
            transition: {
              delay: 0.5,
            },
          }}
        >
          Property
        </motion.h1>
      </Link>
      <div className="w-2/5 sm:w-1/2 hidden md:block">
        <ul className="flex justify-between w-full text-sm">
          <li className="text-[#C7DADA] hover:text-white transition delay-200 cursor-pointer">
            Home
          </li>
          <li className="flex space-x-2 items-center group relative text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
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
          <li className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            Services
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            About
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            Contact Us
          </li>
        </ul>
      </div>
      <FaBars className="text-2xl text-white md:hidden flex" />
    </div>
  );
};

export default Navbar;
