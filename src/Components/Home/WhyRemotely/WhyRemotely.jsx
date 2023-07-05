import React from "react";
import {
  FaBeer,
  FaFileSignature,
  FaUserAlt,
  FaWarehouse,
  FaArtstation,
  FaMendeley,
  FaUsers,
  FaChartArea,
  FaImage,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WhyRemotely = () => {
  return (
    <div className="my-24 lg:px-20">
      <h1 className="text-3xl font-bold text-center">Why Remotely?</h1>

      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 my-16">
        <div className="py-6 px-8">
          <div className="bg-[#EDF6FD] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaFileSignature className="text-xl text-[#50ABF3]"></FaFileSignature>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">Free Job Posting</h3>
          <p className="text-center text-[#30395299]">
            Post an unlimited number of your open vacancies absolutely for free.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#E6F6ED] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaUserAlt className="text-xl text-[#00AE42]"></FaUserAlt>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">
            Talent Marketplace
          </h3>
          <p className="text-center text-[#30395299]">
            Post jobs and review applications, or browse and order available
            services.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#FFF5E5] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaWarehouse className="text-xl text-[#FFA000]"></FaWarehouse>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">All Types of Jobs</h3>
          <p className="text-center text-[#30395299]">
            From full-time and part-time jobs, to contract, internship,
            freelance, and volunteering.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#F9EEF9] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaMapMarkerAlt className="text-xl text-[#CA56CA]"></FaMapMarkerAlt>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">
            Top Country Locations
          </h3>
          <p className="text-center text-[#30395299]">
            From remote in any location to specific regions, countries, and
            non-remote jobs.
          </p>
        </div>

        {/* 4 item start  */}

        <div className="py-6 px-8">
          <div className="bg-[#FBF2F2] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaMendeley className="text-xl text-[#E7797A]"></FaMendeley>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">Smart Matching</h3>
          <p className="text-center text-[#30395299]">
            Receive recommendations about the best candidates for your jobs.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#F4F8E9] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaUsers className="text-xl text-[#93BF2A]"></FaUsers>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">
            Power of Networking
          </h3>
          <p className="text-center text-[#30395299]">
            Expand your network to find more candidates or jobs through
            introductions.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#F3F3FB] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaImage className="text-xl text-[#8E87DB]"></FaImage>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">
            Creativity Showcase
          </h3>
          <p className="text-center text-[#30395299]">
            Browse portfolios to find the best talent, ideas, and professional
            feedback.
          </p>
        </div>

        <div className="py-6 px-8">
          <div className="bg-[#EFFAF9] w-[60px] flex justify-center items-center h-[60px]  rounded-full mx-auto">
            <p className="">
              {" "}
              <FaChartArea className="text-xl text-[#64D0C9]"></FaChartArea>{" "}
            </p>
          </div>

          <h3 className="text-center font-bold mt-4 mb-2">
            Integrated Payments
          </h3>
          <p className="text-center text-[#30395299]">
            Pay contractors and freelancers on RemoteHub with a safe escrow
            option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyRemotely;
