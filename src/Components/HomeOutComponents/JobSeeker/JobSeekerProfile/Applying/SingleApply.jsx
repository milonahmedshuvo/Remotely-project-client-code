import React from "react";

const SingleApply = ({ apply }) => {
  const { jobTitle, companyName, drescription, jobSkills, _id } = apply;
  
  const handleDelete = (id) => {
    // event.preventDefault()
    console.log("click", id)
  }


  return (
    <div className="mb-16 mt-12 mx-4">
      <div>
        <h1>{jobTitle}</h1>
        <p>{companyName}</p>
      </div>

      <p>{drescription}</p>

      <div>
        {/* <button className="btn btn-outline btn-warning btn-sm">Warning</button> */}
        <button
         onClick={() => handleDelete(_id) } 
        className="btn btn-outline btn-error btn-sm font-bold">Delete</button>
      </div>
    </div>
  );
};

export default SingleApply;
