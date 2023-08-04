import React from "react";
import remotely from "../../../image/remote.png";

import {
  FaBeer,
  FaFileSignature,
  FaUserAlt,
  FaWarehouse,
  FaArtstation,
  FaMendeley,
  FaUsers,
  FaChartArea,
  FaImage,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#0983C0] flex flex-col lg:flex-row  lg:gap-10  w-full  pb-20 ">
      <div className="mt-20 ">
        <img src={remotely} alt="" className="mx-auto" />
      </div>

      <div className="  lg:ml-40 mt-20 w-full lg:w-[720px]">
        <h2 className=" text-xl text-center lg:text-start lg:text-4xl text-white font-bold  my-2">
          We help students land their dream jobs
        </h2>
        <p className="text-white text-lg md:text-xl text-center lg:text-start  ">
          GradSiren is the industry leader for college students and recent
          graduates to get internships and entry-level jobs
        </p>

        <div className="bg-white mt-8 py-10  pl-9 pr-9 md:pr-0 ">
          <h3 className="mb-4 ">
            <label htmlFor="" className="mx-4">
              Jobs
            </label>
            <label htmlFor="" className="mx-4">
              Companise
            </label>
            <label htmlFor="" className="mx-4">
              Internships
            </label>
            <label htmlFor="" className="mx-4">
              Advice
            </label>
          </h3>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Keyword, Title"
              className="input input-bordered input-success mb-4 md:mb-0"
            />

            <input
              type="text"
              placeholder="Locations"
              className="input input-bordered input-success ml-0 md:ml-3 mb-4 md:mb-0"
            />

            <input
              type="button"
              value="Find Jobs"
              className="bg-[#0C8D2C] text-white py-3 px-3 rounded ml-0 md:ml-3 mb-4 md:mb-0 font-bold md:font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
