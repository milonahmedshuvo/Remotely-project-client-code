import React from "react";
import { FaBeer, FaLongArrowAltRight } from "react-icons/fa";

const YourIdea = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 px-7  md:px-10 lg:px-20">
        <div>
          <h1 className="text-2xl font-bold text-[#ACB0BA]">
            More for All Companies
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold my-5">
            Test Your Ideas and New Products
          </h2>
          <p className="text-[#ACB0BA]">
            See and hear real users as they interact with your design
            prototypes, landing pages, and websites. Download and use RemoteHub
            screen recorder free of charge.
          </p>

          <div className="flex mt-4">
            <p className="text-xl text-[#2196F3]">Learn more </p>
            <span>
              {" "}
              <FaLongArrowAltRight className="text-[#2196F3] ml-4 mt-2 "></FaLongArrowAltRight>
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://static.remotehub.com/smp/assets/images/home/test_your_ideas.svg"
            alt=""
            className="w-full lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default YourIdea;
