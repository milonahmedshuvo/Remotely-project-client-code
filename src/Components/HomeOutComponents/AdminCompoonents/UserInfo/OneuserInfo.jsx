import React from "react";
import { toast } from "react-hot-toast";


const OneuserInfo = ({ user,refetch }) => {
  const { image, userIdentity, userName, _id } = user;

  const handleUserDelete = (id) => {
    fetch(`http://localhost:5000/userDelete/${id}`,{
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete Successful");
        refetch()
      })
      .catch((err) => {
        toast.error("Filed delete");
      });
  };



  return (
    <div className="grid grid-cols-2 md:grid-cols-4 my-4 ">
      <img className="rounded-full  h-10 w-10 mx-auto " src={image} alt="" />

      <div>
        <p className="text-center">{userName}</p>
      </div>

      <div>
        <p className="text-center">{userIdentity}</p>
      </div>

      <div className="mx-auto">
        <button
          onClick={() => handleUserDelete(_id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneuserInfo;
