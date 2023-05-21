import React from "react";
import { useGlobalState } from "../components/store";
import { motion } from "framer-motion";

const Properties = () => {
  const [property] = useGlobalState("property");
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between bg-[#F2F4F6] py-4 md:py-8 px-5 md:px-20 text-center">
      {property.map((propertys, i) => (
        <div
          className="bg-white w-80 sm:w-72 md:w-64 py-8 px-6 rounded-md space-y-4 m-4"
          key={i}
        >
          <div className="flex flex-col items-center">
            <img className="w-14 mb-2" src={propertys.img} alt="" />
            <h1 className="text-[#00204a] text-lg font-[500]">
              {propertys.heading}
            </h1>
          </div>
          <p className="text-sm font-thin leading-5 text-[#00000080]">
            {propertys.text}
          </p>
          <div className="flex flex-col items-center">
            <p className="text-[#00204a]  text-xs mb-2">
              Learn More
            </p>
            <motion.div className="w-20 h-[0.3vh] bg-[#005555] cursor-pointer"
             initial={{ opacity: 1, x: 0 }}
             whileHover={{ opacity: 0, x: -50 }}
             transition={{ delay: 0.6, stiffness: 50, type: "spring" }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;
