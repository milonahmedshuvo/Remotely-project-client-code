import React from "react";

const SingleWork = ({ data }) => {
  const { image, title, drescription } = data;

  return (
    <div className="mt-16 mb-16 ">
      <div className="flex justify-center w-full ">
        <img className="" src={image} alt="" />
      </div>
      <div className="my-5">
        <h3 className="text-center text-[#414B5D] font-semibold my-2">
          {title}
        </h3>
        <p className="text-center text-[#30395299]">{drescription}</p>
      </div>
    </div>
  );
};

export default SingleWork;
