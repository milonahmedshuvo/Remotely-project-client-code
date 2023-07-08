import React from "react";
import {
  FaBeer,
  FaShare,
  FaCreativeCommonsNcEu,
  FaForumbee,
  FaJediOrder,
} from "react-icons/fa";

const Organizations = () => {
  return (
    <div className="bg-[#FCF6EC] pt-14 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" flex justify-center">
          <img
            className="w-1/2"
            src="https://static.remotehub.com/smp/assets/images/home/get-volunteers-for-your-projects.svg"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-xl mb-4 font-bold text-[#AAABAF]">
            More for Nonprofit Organizations
          </h2>
          <h1 className="text-3xl font-bold mb-4">
            Get Volunteers for Your Projects
          </h1>
          <p className="">
            Create a page for your nonprofit organization to recruit volunteers
            from all around the world. Post your volunteering opportunities on
            RemoteHub, and find professionals who share your values.
          </p>

          <div className="w-full">
            <button
              type="button"
              className="bg-[#2383D3] font-semibold text-white rounded-full mt-14"
            >
              Post valunter Projects
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 mt-28 gap-6 ">
        <div className="border-2 rounded-xl bg-[#FFFFFF] p-5 border-[#FCD99E]">
          <h1>
            {" "}
            <FaShare className="text-[#FFA000] text-xl mb-4"></FaShare>
          </h1>
          <p className="text-[#9499A6] mb-4 ">
            RemoteHub has connected Boundless Brilliance with volunteers across
            the world who share our passion of empowering students in STEM. The
            RemoteHub team is a pleasure to work with and the platform is very
            convenient and easy to use.
          </p>

          <div className="flex items-center ">
            <h1>
              <FaCreativeCommonsNcEu className="text-lg text-[#948EDD]"></FaCreativeCommonsNcEu>
            </h1>

            <div className="ml-4">
              <h1> Boundless Brilliance </h1>
              <h5>Van Nuys, CA, United States</h5>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-xl bg-[#FFFFFF] p-5 border-[#FCD99E]">
          <h1>
            {" "}
            <FaShare className="text-[#FFA000] text-xl mb-4"></FaShare>
          </h1>
          <p className="text-[#9499A6] mb-4 ">
            {" "}
            RemoteHub has connected Boundless Brilliance with volunteers across
            the world who share our passion of empowering students in STEM. The
            RemoteHub team is a pleasure to work with and the platform is very
            convenient and easy to use.
          </p>

          <div className="flex items-center ">
            <h1 className="text-lg text-[#88CDF3]">
              {" "}
              <FaJediOrder></FaJediOrder>
            </h1>

            <div className="ml-4">
              <h1> Boundless Brilliance </h1>
              <h5>Van Nuys, CA, United States</h5>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-xl bg-[#FFFFFF] p-5 border-[#FCD99E]">
          <h1>
            {" "}
            <FaShare className="text-[#FFA000] text-xl mb-4"></FaShare>
          </h1>
          <p className="text-[#9499A6] mb-4 ">
            RWe use Remotely to reach out to the thousands of remote
            professionals. Thanks to the rich set of tools, the entire
            recruiting and work process can be done in one place which is very
            convenient.
          </p>

          <div className="flex items-center ">
            <h1>
              <FaForumbee className="text-lg text-[#0CA7A5]"></FaForumbee>
            </h1>

            <div className="ml-4">
              <h1> Volunteer Assistance to the Vulnerable </h1>
              <h5>Ft. Lauderdale, FL, United States</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
