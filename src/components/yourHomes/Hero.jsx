import React from "react";
import { useGlobalState } from "../store";
import hero from "../../assets/hero_bg_3.jpg"
import dots from "../../assets/dots.png"
import { motion } from "framer-motion";

const Hero = () => {
  const [aside] = useGlobalState("aside");
  return (
    <div className="flex flex-col-reverse md:flex-row py-16 bg-no-repeat  bg-top-right md:bg-right-bottom h-full"
    style={{backgroundImage: `url(${dots})`}}>
      <aside className="md:w-2/5 space-y-12 py-10">
        {aside.map((asides, i) => (
          <div
            className="flex items-start md:items-center  space-x-4"
            key={i}
          >
            <motion.div className="p-6 md:p-8 mb-2 bg-[#EFEFEF] rounded-full cursor-pointer "
             whileHover={{ border: '2px solid navy', scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } }}>
            <img className="w-4 " src={asides.img} alt="" />
            </motion.div>
            <div className="md:w-1/2">
              <h1 className="text-[#00204a] font-[500]">
                {asides.heading}
              </h1>
              <p className="text-sm font-thin leading-5 text-[#00000080]">
                {asides.text}
              </p>
            </div>
          </div>
        ))}
      </aside>
      <div className="w-full md:w-3/5 h-96 md:h-inherit border bg-cover bg-center object-contain bg-no-repeat mr-16"
      style={{backgroundImage: `url(${hero})`}}>
      </div>
    </div>
  );
};

export default Hero;
