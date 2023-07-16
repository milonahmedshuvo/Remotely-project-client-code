import React from "react";

const Modal = () => {
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
    };
    console.log(createPostData);
  };

  

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
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
