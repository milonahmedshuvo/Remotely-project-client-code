import React from "react";
import { Link } from "react-router-dom";

const SingleCompany = ({ companyData }) => {
  
  const { companyName, profilePic, coverpic, sortAddress, indrustyType,_id } =
    companyData;

  return (
    <div>
      <div className="border border-[#DEE0E3] border-1 shadow-sm relative mt-12">
        <div className="flex justify-center">
          <img className="w-full h-[170px]" src={coverpic} alt="" />

          <div className="absolute top-32 ">
            <img
              className="w-[100px] rounded-full border border-gray-200"
              src={profilePic}
              alt=""
            />
          </div>
        </div>

        <div className="mt-16 pb-6">
          <h3 className="text-center text-[#444444] font-medium">
            {companyName}
          </h3>
          <h5 className="text-center">{sortAddress}</h5>
          <h6 className="text-center">{indrustyType}</h6>
        </div>

        <div className="py-2 px-3 border border-[#D3D3D3] mb-4 rounded-3xl mx-auto w-1/2">
          <span className="mr-2 text-sm pr-2 border-r-2 hover:text-[#305393] hover:font-semibold">
            <Link to={`/DainamicRoute/${_id}`}>Explore</Link>
            
          </span>
          <Link to={`/DainamicRoute/${_id}/${companyName}`}>
            <span className="text-sm hover:text-[#305393] hover:font-semibold">
              Open Jobs
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCompany;
