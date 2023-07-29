import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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
} from "react-icons/fa";
import { useContext } from "react";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { toast } from "react-hot-toast";

const OneJobView = () => {
  const oneJob = useLoaderData();
  const { user, loading } = useContext(createContextUser);
  const navigate = useNavigate()


  if (loading) {
    return <h2>Loading...</h2>;
  }

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
  } = oneJob;

  const handleApply = (event) => {
    event.preventDefault();
    console.log("click");

    const applydata = {
      companyName,
      drescription,
      drescriptionTwo,
      experince,
      indrusty,
      jobSkills,
      jobTitle,
      jobtype,
      location,
      email: user?.email
    };
    console.log(applydata);

    fetch("http://localhost:5000/applyDataPost", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(applydata)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        navigate("/succesfulSubmit")
        toast.success("Your Application Succesfull..!!")
    })
    .catch((err) => {
        toast.error(err)
    })

  };

  return (
    <div className=" w-full lg:w-[900px]  border-t-2   border-t-[#3792D6] pb-4 pt-4 mx-auto  mt-8 mb-20  ">
      <div className="flex justify-between">
        <h2 className="text-2xl text-[#3792D6] font-medium ">{jobTitle}</h2>

        <div className="flex justify-center items-center ">
          <FaReply className="text-lg mr-4 text-center"></FaReply>

          <FaEllipsisH className="text-lg"></FaEllipsisH>
        </div>
      </div>

      <div>
        <p>Indrusty type: {indrusty}</p>
        <p>{location}</p>
      </div>

      <div className="flex justify-end border-b-2 pb-2 ">
        <p
          onClick={handleApply}
          className="btn rounded-full bg-[#1479B8] hover:bg-[#1479B8] text-white hover:text-white"
        >
          Apply Now
        </p>
        
        <p className=" border border-[#28A745] ml-2 rounded-full hover:bg-[#28A745] btn text-[#28A745] hover:text-white  px-11 bg-white">
          Save
        </p>
      </div>

      <div className="mt-10">
        <p className="text-xl mb-2">Job Drescription</p>
        <p className="text-md">{drescription}.</p>
        <p className="text-md mt-2">{drescriptionTwo}.</p>

        <p className="text-xl mb-2 mt-7">Job Skills</p>
        <div>
          {jobSkills.split(" ").map((skill, i) => (
            <span className="mx-2" key={i}>
              {" "}
              {skill}{" "}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div>
            <p>Job Type</p>
            <p>{jobtype}</p>
          </div>

          <div>
            <p>Expeince</p>
            <p>{experince}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneJobView;
