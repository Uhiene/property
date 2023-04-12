import React from "react";

const HeroTexr = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-5/6 space-y-8">
      <h1 className="text-white text-3xl font-bold">
        Easiest way to find your dream home
      </h1>
      <div className="space-x-5">
        <input
          type="text"
          placeholder="Your ZIP code or City. e.g. New York"
          className="bg-white rounded-full p-4 w-96"
        />
        <button
          value=""
          className="bg-[#005555] rounded-full w-40 p-4 text-[#C7DADA] placeholder:text-white"
        >
            Search
        </button>
      </div>
    </div>
  );
};

export default HeroTexr;
