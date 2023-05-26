import React from "react";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    initial: {
      y: 0,
      backgroundColor: "#CCCCCC", // Initial background color
      color: "#777777", // Initial border style
      border: "none",
    },
    hover: {
      y: -8,
      backgroundColor: "#00204a", // Background color when hovered
      color: "#ffffff",
      border: "none",
    },
  };

  return (
    <div className="bg-[#EFEFEF] px-5 py-10 md:p-14" id="contact">
      <div className="md:flex justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/3">
          <h1 className="text-[#00204a] font-[700] text-xs mb-3">CONTACT</h1>
          <p className="text-[13px] font-[500] text-[#777777]  underline  mb-4">
            43 Raymouth Rd. Baltemoer, London 3910
          </p>
          <div className="text-[13px] font-[500] text-[#777777]  underline space-y-3">
            <p>+1(123)-456-7890</p>
            <p>+1(123)-456-7890</p>
            <p>info@mydomain.com</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-[#00204a] font-[700] text-xs mb-4">SOURCES</h1>
          <div className="text-[13px] font-[500] text-[#777777]  underline flex space-x-20">
            <div className="space-y-3">
              <p>About us</p>
              <p>Services</p>
              <p>Vision</p>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
            <div className="space-y-3">
              <p>Partners</p>
              <p>Business</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>FAQ</p>
              <p>Creative</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 space-y-3">
          <h1 className="text-[#00204a] font-[700] text-xs mb-4"> LINKS</h1>
          <div className="text-[13px] font-[500] text-[#777777] underline space-y-3">
            <p>Our Vision</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className="flex space-x-4">
            <motion.div
              className="p-3 rounded-xl text-sm"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <BsInstagram />
            </motion.div>
            <motion.div
              className="p-3 rounded-xl text-sm"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <BsTwitter />
            </motion.div>
            <motion.div
              className="p-3 rounded-xl text-sm"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaFacebookF />{" "}
            </motion.div>
            <motion.div
              className="p-3 rounded-xl text-sm"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaLinkedinIn />
            </motion.div>
            <motion.div
              className="p-3 rounded-xl text-sm"
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <BsPinterest />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#777777] mt-16 space-y-3">
        <p>
          Copyright © 2023 . All Rights Reserved. — Designed with love by
          Untree.co
        </p>
        <p>Distributed by themewagon</p>
      </div>
    </div>
  );
};

export default Footer;
