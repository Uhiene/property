import { useEffect, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { generateAgents } from "../services/fakeData";
import { motion } from "framer-motion";

const Agent = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    setAgents(generateAgents(3));
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#F2F4F6] py-8 px-5 md:px-20 text-center space-y-20">
      <div className="text-center sm:w-3/4 md:w-2/5">
        <h1 className="text-[#00204a] text-2xl md:text-3xl font-[500]">
          Our Agents
        </h1>
        <p className="text-sm font-thin leading-5 text-[#00000080]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center space-x-5 md:justify-between w-full">
        {agents.map((agent, i) => (
          <Agents agent={agent} key={i} />
        ))}
      </div>
    </div>
  );
};

export function Agents({ agent }) {
  const containerVariants = {
    initial: {
      y: 0,
      backgroundColor: "#00204a", // Initial background color
      border: "none",
      color: "#ffffff", // Initial border style
    },
    hover: {
      y: -8,
      backgroundColor: "#ffffff", // Background color when hovered
      border: "2px solid #00204a",
      color: "#00204a", 
    },
  };

  return (
    <div className="w-full bg-white sm:w-80 md:w-[340px] relative py-8 px-6 rounded-md space-y-4 text-center mb-16 md:mb-6">
      <img
        className="w-20 h-20 object-cover rounded-full absolute -top-10 left-[40%] md:left-[35%]"
        src={agent?.image}
        alt=""
      />
      <h1 className="text-[#00204a] font-[500]">{agent?.name}</h1>
      <p className="text-[#00204a] font-[500] text-sm">{agent?.position}</p>
      <p className="text-sm font-thin leading-5 text-[#00000080]">
        {agent?.review}
      </p>
      <div className="flex justify-center h-10 space-x-4">
        <motion.div
          className="p-3 rounded-full text-sm text-white cursor-pointer"
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
        >
          <BsInstagram/>
        </motion.div>
        <motion.div
          className="p-3 rounded-full text-sm text-white cursor-pointer"
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
        >
          <BsTwitter/>
        </motion.div>
        <motion.div
          className="p-3 rounded-full text-sm text-white cursor-pointer"
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
        >
          <FaFacebookF/>{" "}
        </motion.div>
        <motion.div
          className="p-3 rounded-full text-sm text-white cursor-pointer"
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
        >
          <FaLinkedinIn/>
        </motion.div>
      </div>
    </div>
  );
}
export default Agent;
