import React, { useContext } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createContextUser } from "../../Sheared/Context/FullAppContext";

const Banner = () => {
  const {setSearchData} = useContext(createContextUser)
  const navigate = useNavigate();


  const { data: datas = [] } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const res = await fetch("https://remotely-project-server.vercel.app/findJobLocation");
      const data = await res.json();
      return data;
    },
  });


  





  const handleSerchData = (event) => {
    event.preventDefault()
    const jobTitle = event.target.jobPossition.value
    const company = event.target.company.value
    console.log(jobTitle, company)

    fetch(`https://remotely-project-server.vercel.app/jobSerchFilter?company=${company}&job=${jobTitle}`)
    .then((res) => res.json())
    .then((data) => {
      
      setSearchData(data)
      navigate("/findjobs/searchDataShow")
      
    }) 
    .catch((err) => {
      console.log(err)
    })


  }






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
          <form onSubmit={handleSerchData} className="flex flex-col md:flex-row">
            

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


           <select name="jobPossition" className="select select-bordered ml-0 md:ml-4 mb-2 md:mb-0 w-full ">
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
              className="bg-[#0C8D2C] text-white py-3 px-3 rounded ml-0 md:ml-3 mb-4 md:mb-0 mr-2 font-bold md:font-medium"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
