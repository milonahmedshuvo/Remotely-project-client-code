import React from "react";
import { toast } from "react-hot-toast";

const JobPost = ({ post }) => {
  const { address, company, drescription, jobPossition, skills, _id } = post;

  const handleEmployerpostDelete = (id) => {
    fetch(`http://localhost:5000/employerPostDelete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesful Delete");
      })
      .catch((err) => {
        toast.error("Filed Delete");
      });
  };

  return (
    <div className="mx-4 my-16">
      <div>
        <p className="text-2xl">{jobPossition}</p>
        <p className="text-xl">{company}</p>
        <p className="text-xl">{address}</p>
      </div>

      <p className="mt-2 ">{drescription}</p>

      <button
        onClick={() => handleEmployerpostDelete(_id)}
        className="btn btn-outline btn-error font-bold mt-2 btn-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default JobPost;
