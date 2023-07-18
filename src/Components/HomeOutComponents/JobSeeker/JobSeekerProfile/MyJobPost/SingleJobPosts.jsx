import React from "react";

const SingleJobPosts = ({ posts, refetch }) => {
  console.log(posts);
  const { address, company, drescription, jobPossition } = posts;

  refetch();
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
            <button className="btn btn-success btn-outline btn-sm mr-2">publish</button>
            <button className="btn btn-error btn-outline btn-sm mr-2 ">Delete</button>
          </div>
        </div>

        <p className="mt-2 text-md">{drescription} </p>
      </div>
    </div>
  );
};

export default SingleJobPosts;
