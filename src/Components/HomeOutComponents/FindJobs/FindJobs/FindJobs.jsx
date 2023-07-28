import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const FindJobs = () => {
  const { data: datas = [] } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/findJobLocation");
      const data = await res.json();
      return data;
    },
  });

   
  const handleSerchData = (event) => {
    event.preventDefault()
    const jobTitle = event.target.jobPossition.value
    const company = event.target.company.value
    
    fetch(`http://localhost:5000/jobSerchFilter?company=${company}&job=${jobTitle}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Database Response ", data)
    }) 
    .catch((err) => {
      console.log(err)
    })

    console.log("submitttttttttttt")

  }

  return (
    <div className="bg-[#D9EAF5] py-16 ">
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

          <form 
           onSubmit={handleSerchData}
           className="flex flex-col md:flex-row mt-14 ">
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

            <select name="company" className="select select-bordered ml-0 md:ml-2 mb-2 md:mb-0 w-full">
              <option disabled selected>
                Company
              </option>

              <option>FaceBook</option>
              <option>Amazon</option>
              <option>Google</option>
              <option>Tesla</option>
              <option>PWC</option>
              <option>Workday</option>
            </select>

            <select name="jobPossition" className="select select-bordered ml-0 md:ml-4 mb-2 md:mb-0 w-full">
              <option disabled selected>
                job Possition
              </option>

              {datas.map((el, i) => (
                <option key={i}> {el.jobTitle}</option>
              ))}
            </select>

            <input
              type="submit"
              value="Find Jobs"
              className="bg-[#2196F3] text-white py-3 px-4 rounded ml-0 md:ml-4 mb-2 md:mb-0 font-bold md:font-medium"
            />
          </form>
        </div>

        {/* secound section  */}
        <div>
          <div className="bg-[##f0f9ff]">
            <p>Mobile & it</p>
          </div>
        </div>
      </div>

      {/* Outlet children components  */}

      <div className="ml-20 my-20 mr-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default FindJobs;
