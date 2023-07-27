import React from "react";
import { FaBeer } from "react-icons/fa";

const FindJobs = () => {






  
  return (
    <div className="bg-[#D9EAF5] py-16">
      <div className="ml-20 grid grid-cols-1 md:grid-cols-2">
        {/* Frist div */}
        <div className="">
          <h2 className="text-4xl font-bold">Find Remote Jobs</h2>
          <p className="text-lg mt-5">
            Create a profile and apply for new remote job opportunities.
          </p>
          <p className="text-lg ">
            Find professionals that best match your job requirements.
          </p>

          <div className="flex flex-col md:flex-row mt-14 ">
            {/* <input
              type="text"
              placeholder="Keyword, Title"
              className="input input-bordered  mb-4 md:mb-0"
            /> */}

            {/* <input
              type="text"
              placeholder="Locations"
              className="input input-bordered  ml-0 md:ml-2 mb-2 md:mb-0"
            /> */}

            <select className="select select-bordered ml-0 md:ml-2 mb-2 md:mb-0 w-full">
              <option disabled selected>
                Company
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <select className="select select-bordered ml-0 md:ml-4 mb-2 md:mb-0 w-full">
              <option disabled selected>
              jobTitle
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

           
            <input
              type="button"
              value="Find Jobs"
              className="bg-[#2196F3] text-white py-3 px-4 rounded ml-0 md:ml-4 mb-2 md:mb-0 font-bold md:font-medium"
            />
          </div>
        </div>

        {/* secound section  */}
        <div>
          <div className="bg-[##f0f9ff]">
            <p>Mobile & it</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
