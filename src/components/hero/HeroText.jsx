import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center h-4/6 space-y-8"
     
    >
      <motion.h1 className="text-white text-center text-2xl md:text-3xl font-bold"
       initial={{ y: 80 ,opacity: 0.5 }}
       animate={{ y: 0 , opacity: 1 }}
       transition={{ delay: 0.5, stiffness: 50, type: "spring" }}>
        Easiest way to find your dream home
      </motion.h1>
      <motion.div className="w-full sm:w-3/4 md:w-1/2 flex space-x-5"
       initial={{ y: 80,opacity: 0.5  }}
       animate={{ y: 0 , opacity: 1   }}
       transition={{ delay: 0.7, stiffness: 50, type: "spring" }}>
        <input
          type="text"
          placeholder="Your ZIP code or City. e.g. New York"
          className="bg-white rounded-full p-4 w-3/4"
        />
        <button
          value=""
          className="bg-[#005555] rounded-full w-1/4 p-4 text-white placeholder:text-white"
        >
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default HeroText;
