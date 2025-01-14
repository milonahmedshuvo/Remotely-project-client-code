import { useQuery } from "@tanstack/react-query";
import SingleCompany from "./SingleCompany";
import { Link } from "react-router-dom";

const Companys = () => {
  const {
    data: companys = [],
  
  } = useQuery({
    queryKey: ["companys"],
    queryFn: async () => {
      const res = await fetch("https://remotely-project-server.vercel.app/campanyLimit");
      const data = await res.json();
      return data;
    },
  });

  
  return (
    <div className="my-10 md:my-24 lg:my-32  lg:px-32 md:px-10">
      <div>
        <h1 className="text-[#414B5D] font-bold text-center text-3xl my-3">
          Research Companies
        </h1>
        <hr className="bg-[#128ADC] w-28 mb-5 h-1 mx-auto" />
        <p className="text-[#414B5D] font-medium text-center mx-10 md:mx-0">
          Explore a wide range of placement opportunities from across the
          country that align with your career goals and aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-0 gap-5 lg:gap-10">
        {companys.map((companyData, i) => (
          <SingleCompany key={i} companyData={companyData}></SingleCompany>
        ))}
      </div>

      <div className="w-[270px] mx-auto">
        <Link to="/sixcompany">
          <button
            type="button"
            className="bg-[#006AC1] text-white font-semibold rounded-3xl px-4 w-full  py-2 mt-8 "
          >
            Browse More Companies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Companys;
