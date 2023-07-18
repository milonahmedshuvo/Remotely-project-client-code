import React from "react";
import { toast } from "react-hot-toast";

const SingleJobPosts = ({ posts, refetch }) => {
  const { address, company, drescription, jobPossition, _id } = posts;

  const handlePostDelete = (id) => {
    fetch(`http://localhost:5000/jobPostDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesfull Delete Post..!!");
        refetch()
      })
      .catch((err) => {
        console.log(err);
        toast.error("Faild Delete post..!!");
      });
  };

  return (
    <div>
      <div className="border border-gray-300 rounded mb-5 px-3 py-2">
        <div className="flex justify-between ">
          <div>
            <p className="text-2xl ">Possition: {jobPossition} </p>
            <p className="text-xl">Company: {company} </p>
            <p className="text-lg">Address: {address} </p>
          </div>

          <div className="flex ">
            <button className="btn btn-success btn-outline btn-sm mr-2">
              publish
            </button>
            <button
              onClick={() => handlePostDelete(_id)}
              className="btn btn-error btn-outline btn-sm mr-2 "
            >
              Delete
            </button>
          </div>
        </div>

        <p className="mt-2 text-md">{drescription} </p>
      </div>
    </div>
  );
};


export default SingleJobPosts;
