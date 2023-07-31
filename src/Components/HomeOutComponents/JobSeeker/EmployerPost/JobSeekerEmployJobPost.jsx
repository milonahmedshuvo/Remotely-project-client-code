import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const JobSeekerEmployJobPost = ({ post }) => {
   
  const {
    address,
    company,
    drescription,
    jobPossition,
    skills,
    _id,
    userName,
    userIdentity,
  } = post;
  const navigate = useNavigate()


   


  const handleApply = () => {
        
        toast.success("Your application successful")   
        navigate("/succesfulSubmit")
  }

  return (
    <div className="mx-4 my-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-2xl">{jobPossition}</p>
          <p className="text-xl">{company}</p>
          <p className="text-xl">{address}</p>
        </div>

        <div className="mr-4">
          <p>{userName}</p>
          <p>{userIdentity}</p>
        </div>
      </div>

      <p className="mt-2 ">{drescription}</p>
      <div>
        <p className="text-xl mt-1">Skills</p>
        {skills.split(" ").map((el, i) => (
          <span key={i} className="mx-2">
            {" "}
            {el}{" "}
          </span>
        ))}
      </div>
      <button
      
       onClick={handleApply}
       
       className="btn btn-outline btn-success font-bold mt-4 btn-sm">
        Apply
      </button>
    </div>
  );
};

export default JobSeekerEmployJobPost;
