import React from "react";
import SingleCompany from "../Home/Companys/SingleCompany";
import SingleWork from "./SingleWork";

const HomeWork = () => {
  const datas = [
    {
      image: "https://www.gradsiren.com/assets/img/usa-home/register.png",
      title: "Explore Opportunities",
      drescription:
        "Explore career opportunities across companies of all sizes and sectors",
    },
    {
      image: "https://www.gradsiren.com/assets/img/usa-home/create-profile.png",
      title: "Job Recommendations",
      drescription:
        "Create a specialized profile and get the right job and internship recommendations based on your interests and skills",
    },
    {
      image: "https://www.gradsiren.com/assets/img/usa-home/expert-advice.png",
      title: "Expert Advice",
      drescription:
        "Seek advice from our career experts to stand out in a competitive job market",
    },
    {
      image: "https://www.gradsiren.com/assets/img/usa-home/get-job.png",
      title: "You're Hired!",
      drescription: "Be prepared to start your new job on the right note.",
    },
  ];

  return (
    <div className="mt-10 md:mt-40 mb-28">
      <div>
        <h1 className="text-[#414B5D] font-bold text-center text-3xl mb-3 ">
          How GradSiren Works For You
        </h1>
        <hr className="bg-[#128ADC] w-28 mb-5 h-1 mx-auto" />
        <p className="text-[#414B5D] font-medium text-center">
          GradSiren’s top-of-the-line search program has been built specifically
          to help College students search for and land the best fresher jobs and
          internships from MNCs and Startups around the world.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-11 px-5 ">
        {datas.map((data, i) => (
          <SingleWork key={i} data={data}></SingleWork>
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
