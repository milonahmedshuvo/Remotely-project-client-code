import React, { useReducer } from "react";
import { toast } from "react-hot-toast";

const EmployerModal = ({userIdentity, email, userName}) => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    const handleEmployerData = (event) => {
        event.preventDefault();
    
        const jobPossition = event.target.jobPossition.value;
        const company = event.target.company.value;
        const address = event.target.address.value;
        const drescription = event.target.drescription.value;
        const skills = event.target.skills.value
        const createPostData = {
          jobPossition,
          company,
          address,
          skills,
          drescription,
          userIdentity,
          email,
          userName
        };
        console.log(createPostData);
        
        fetch("https://remotely-project-server.vercel.app/employerJobPost", {
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
            forceUpdate()
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


          <form onSubmit={handleEmployerData}>
            <input
              type="text"
              name="jobPossition"
              placeholder="Job title"
              className="input input-bordered w-full mt-5 "
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full mt-5"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full mt-5"
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills"
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

export default EmployerModal;
