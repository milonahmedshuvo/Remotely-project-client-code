import React from "react";
import { toast } from "react-hot-toast";

const Modal = ({ userIdentity }) => {
  console.log("userIdentity", userIdentity);

  const handleCreatePostData = (event) => {
    event.preventDefault();

    const jobPossition = event.target.jobPossition.value;
    const company = event.target.company.value;
    const address = event.target.address.value;
    const drescription = event.target.drescription.value;

    const createPostData = {
      jobPossition,
      company,
      address,
      drescription,
      userIdentity,
    };
    console.log(createPostData);
    fetch("http://localhost:5000/jobSeeker/employerJobpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createPostData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesful submit..!!");
      })
      .catch((err) => {
        toast.error("faild Submit..!!");
      });
  };

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>

          <form onSubmit={handleCreatePostData}>
            <input
              type="text"
              name="jobPossition"
              placeholder="Job Possition"
              className="input input-bordered w-full mt-5 "
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="input input-bordered w-full mt-5"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full mt-5"
            />

            <textarea
              name="drescription"
              className="textarea w-full mt-6 textarea-bordered"
              placeholder="Job Dresscription "
            ></textarea>

            <input
              type="submit"
              className="w-full mt-5 bg-blue-400 py-2 rounded text-white "
              value="Submit"
            />
          </form>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn w-full">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
