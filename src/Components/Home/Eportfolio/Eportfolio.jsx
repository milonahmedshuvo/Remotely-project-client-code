import React from "react";

const Eportfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
      <div className=" ">
        <img
          src="https://www.gradsiren.com/assets/img/portfolio_image.png"
          alt=""
        />
      </div>

      <div className="mt-28">
        <h1 className="text-2xl mb-5 font-semibold text-[#414B5D]">
          Create your free ePortfolio today!
        </h1>
        <h3 className="text-[#128ADC] font-semibold uppercase mb-5 w-[500px]">
          SHOWCASE YOUR TRUE POTENTIAL TO PROSPECTIVE EMPLOYERS, NOT JUST YOUR
          GPA OR DEGREE
        </h3>

        <h5 className="text-[#414B5D] font-medium  mb-12">
          You're more than just a resume. Create a highly visible ePortfolio (or
          multiple ePortfolios for multiple talent facets) that will make you
          stand out from the competition and get hired.
        </h5>

        <div>
          <button
            type="button"
            className="bg-[#006AC1] py-2 px-4 rounded-3xl text-white "
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eportfolio;
