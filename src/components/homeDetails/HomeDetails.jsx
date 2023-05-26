import React, { useEffect, useState } from "react";
import house from "../../assets/hero_bg_3.jpg";
import { Agents } from "../../views/Agent";
import { generateAgent } from "../../services/fakeData";
import { useParams } from "react-router-dom";

const HomeDetails = () => {
  const [agent, setAgent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setAgent(generateAgent(id));
  }, []);

  return (
    <div className="md:flex justify-between p-5 md:p-16">
      <div className="md:w-2/3 mb-5 md:mb-0">
        <img src={house} alt="" className="md:w-[90%] h-11/12" />
      </div>
      <div className="md:w-1/3 text-[#888888] text-sm">
        <h1 className="text-[#00204A] text-xl font-semibold md:text-3xl mb-2">
          5232 California Ave. 21BC
        </h1>
        <p>California, United States</p>
        <div className=" font-thin space-y-5 mt-5 mb-16">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            laborum quo quos omnis sed magnam id, ducimus saepe, debitis error
            earum, iste dicta odio est sint dolorem magni animi tenetur.
          </p>
          <p>
            Perferendis eligendi reprehenderit, assumenda molestias nisi eius
            iste reiciendis porro tenetur in, repudiandae amet libero.
            Doloremque, reprehenderit cupiditate error laudantium qui, esse quam
            debitis, eum cumque perferendis, illum harum expedita.
          </p>
        </div>
        <Agents agent={agent} />
      </div>
    </div>
  );
};

export default HomeDetails;
