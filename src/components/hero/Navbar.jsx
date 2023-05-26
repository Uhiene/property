import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
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
          <a href="#home" className="text-[#C7DADA] hover:text-white transition delay-200 cursor-pointer">
            Home
          </a>
          <a href="#property" className="flex space-x-2 items-center group relative text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
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
          </a>
          <a href="#services" className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            Services
          </a>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            About
          </li>
          <li className="text-[#C7DADA] hover:text-white cursor-pointer transition delay-200 ">
            Contact Us
          </li>
        </ul>
      </div>
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-2xl hover:text-[#005555]"
      >
        {!nav ? (
          <FaBars className="text-2xl text-white md:hidden flex" />
        ) : (
          <FaTimes />
        )}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full flex py-10 bg-white flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-xl w-1/3 border-b-2 border-[#005555] pb-2 text-center">
          <a
          href="#home"
            className="hover:text-[#005555]"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Home
          </a>
        </li>
        <li className="py-3 text-xl w-1/3 border-b-2 border-[#005555] pb-2 text-center">
          <a
          href="#properties"
            className="hover:text-[#005555]"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Properties
          </a>
        </li>
        <li className="py-3 text-xl w-1/3 border-b-2 border-[#005555] pb-2 text-center">
          <a
          href="#services"
            className="hover:text-[#005555]"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Services
          </a>
        </li>
        <li className="py-3 text-xl w-1/3 border-b-2 border-[#005555] pb-2 text-center">
          <a
          href="#about"
            className="hover:text-[#005555]  "
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            About
          </a>
        </li>
        <li className="py-3 text-xl w-1/3 border-b-2 border-[#005555] pb-2 text-center">
          <a
          href="#contact"
            className="hover:text-[#005555]"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
