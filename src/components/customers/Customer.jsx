import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Customer = ({ customerProp }) => {
  return (
    <div className="w-full md:w-80 space-y-4">
      <img src={customerProp.img} className="w-24 h-24 rounded-full" alt="" />
      <div className="">
        <div className="flex space-x-1 text-xl text-yellow-400">
        <RiStarSFill/>
        <RiStarSFill/>
        <RiStarSFill/>
        <RiStarSFill/>
        <RiStarSFill/>
        </div>
        <h1 className="text-[#00204a] text-lg font-[500]" >
          {customerProp.name}
        </h1>
      </div>
        <p className="text-sm font-[100]">{customerProp.review}</p>
        <p className="text-[#00000080] text-sm font-[100]">{customerProp.position}</p>
    </div>
  );
};

export default Customer;
