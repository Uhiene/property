import React from "react";
import { motion } from "framer-motion";

const RealEstate = () => {
  return (
    <motion.div
      className="px-5 py-16 md:p-16 text-center space-y-5"
      initial={{ y: 80, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, stiffness: 50, type: "spring" }}
    >
      <h1 className="text-[#00204a] text-2xl md:text-3xl font-medium">
        Be a part of our growing real state agents
      </h1>
      <button className="bg-[#005555] rounded-full w-fit px-6 text-sm p-4 text-white placeholder:text-white">
        Apply for Real Estate Agent
      </button>
    </motion.div>
  );
};

export default RealEstate;
