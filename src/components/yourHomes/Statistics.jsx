import React from "react";
import { useGlobalState } from "../store";
import { motion } from "framer-motion";

const Statistics = () => {
  const [stats] = useGlobalState("stats");
  return (
    <motion.div
      className="flex flex-wrap justify-between mt-5 md:w-4/5"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {stats.map((statss, i) => (
        <div className="space-y-4 w-1/3 md:w-fit m-4 md:m-0" key={i}>
          <h1 className="text-[#00204a] text-4xl font-[900]">
            {statss.numbers}
          </h1>
          <p className="text-sm font-thin leading-5 text-[#00000080]">
            {statss.text}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default Statistics;
