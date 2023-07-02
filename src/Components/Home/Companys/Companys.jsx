import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleCompany from "./SingleCompany";

const Companys = () => {
  const {
    data: companys = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["companys"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/campanyLimit");
      const data = await res.json();
      return data;
    },
  });

  console.log(companys);
  return (
    <div className="my-32 px-32">
      <div>
        <h1 className="text-[#414B5D] font-bold text-center text-3xl my-3">
          Research Companies
        </h1>
        <hr className="bg-[#128ADC] w-28 mb-5 h-1 mx-auto" />
        <p className="text-[#414B5D] font-medium text-center">
          Explore a wide range of placement opportunities from across the
          country that align with your career goals and aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {companys.map((company, i) => (
          <SingleCompany key={i} company={company}></SingleCompany>
        ))}
      </div>

      <div className="w-[270px] mx-auto">
        <button
          type="button"
          className="bg-[#006AC1] text-white font-semibold rounded-3xl mt-8 "
        >
          Browse More Companies
        </button>
      </div>
    </div>
  );
};

export default Companys;
