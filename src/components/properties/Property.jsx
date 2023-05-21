import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const Property = ({ roomProp }) => {
  return (
    <div className="w-full shadow-md border-slate-100 border shadow-slate-200 card-details cursor-pointer">
      <Link to={`/room/${roomProp.id}`}>
        <img src={roomProp.img} className="w-full h-1/2" alt="" />
        <div className="p-5 space-y-4">
          <h1 className="text-[#005555] font-semibold border-b-2 border-[#005555] w-fit">
            {roomProp.price}
          </h1>
          <p className="text-xs text-[#00000080]">{roomProp.location}</p>
          <p className="text-2xl font-medium">{roomProp.title}</p>
          <div className="flex items-center space-x-4 text-[#00000080] ">
            <div className="flex items-center space-x-2">
              <FaBed className="text-md" />
              <p className="text-xs font-light">2 beds</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaBath className="text-md" />
              <p className="text-xs font-light">2 baths</p>
            </div>
          </div>
          <button
            value=""
            className="bg-[#005555] rounded-full w-fit p-2 px-4 text-white placeholder:text-white"
          >
            See details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Property;
