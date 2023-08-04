import React from "react";
import { toast } from "react-hot-toast";

const SinglePost = ({ post, refetch }) => {
 
  const { address, company, drescription, jobPossition, skills, _id,userName } = post;
  const handleEmployerpostDelete = (id) => {
    fetch(`https://remotely-project-server.vercel.app/employerPostDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesful Delete");
        refetch();
      })
      .catch((err) => {
        toast.error("Filed Delete");
      });
  };


  refetch()
  return (
    <div className="mx-4 my-16">
      <div>
        <p className="text-2xl">{jobPossition}</p>
        <p className="text-xl">{company}</p>
        <p className="text-xl">{address}</p>
        <p className="text-xl">{userName}</p>
      </div>

      <p className="mt-2 ">{drescription}</p>
      <div>
        <p className="text-xl mt-1">Skills</p>
        {skills.split(" ").map((el, i) => (
          <span key={i} className="mx-2"> {el} </span>
        ))}
      </div>
      <button
        onClick={() => handleEmployerpostDelete(_id)}
        className="btn btn-outline btn-error font-bold mt-4 btn-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default SinglePost;
