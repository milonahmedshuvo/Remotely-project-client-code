import React from "react";
import {
  FaBeer,
  FaStar,
  FaStarOfDavid,
  FaRegStar,
  FaAirbnb,
  FaStarHalfAlt,
  FaLowVision,
  FaEnvelopeOpen,
  FaTv,
  FaUniversity,
  FaPeopleArrows,
  FaRegHeart,
  FaEllipsisH,
  FaReply,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleSearchData = ({ job }) => {
  
  const {
    companyName,
    drescription,
    drescriptionTwo,
    experince,
    indrusty,
    jobSkills,
    jobTitle,
    jobtype,
    location,
    _id
  } = job;


  return (
    <div className="bg-[#F4FCFF] px-3 pt-6 pb-10 my-2 rounded">
      <div className="flex justify-between">
        <h2 className="text-[#2196F3] font-semibold text-lg">{jobTitle}</h2>
        <FaRegStar className="text-[#46AC49] text-[30px]"></FaRegStar>
      </div>

      <div className="flex items-center">
        <h1 className="text-[#2196F3] text-xl mr-2">{companyName} </h1>
        <FaCheckCircle className="text-[#2196F3]"></FaCheckCircle>
      </div>

      <div className="flex  mb-4">
        <div className="flex items-center mr-10 ">
          <FaAirbnb className="text-lg mr-[2px] "></FaAirbnb>
          <p className="">{location}</p>
        </div>
        <div className="flex items-center ">
          <FaUniversity className="mr-[2px]"></FaUniversity>
          <p>{jobtype}</p>
        </div>
      </div>

      <p className="text-sm mb-1 ">{drescription}...</p>

      <div className=" flex justify-end mt-2">
        <p className="btn btn-sm bg-[#46AC49] hover:bg-[#46AC49] hover:text-white text-white btn-outline border-none">
          <Link
          to={`/findjobs/oneviewpost/${_id}`} 
          className="text-white hover:text-white">View Post</Link>
        </p>
      </div>
    </div>
  );
  
  }

export default SingleSearchData;
