import React, { useReducer } from "react";
import { toast } from "react-hot-toast";

const SingleApply = ({ apply,refetch }) => {
  const { jobTitle, companyName, drescription, jobSkills, _id } = apply;
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  const handleDelete = (id) => {
       fetch(`https://remotely-project-server.vercel.app/applyingDelete/${id}`, {
        method:"DELETE"
       })
       .then((res)=> res.json())
       .then((data)=>{
        console.log(data)
        toast.success("Delete Succesful")
        refetch()
       })
       .catch((err)=> {
        console.log(err)
        toast.error("Sorry, Delete Field")
       })

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
