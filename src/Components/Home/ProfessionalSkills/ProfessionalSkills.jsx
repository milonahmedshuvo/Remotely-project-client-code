import React from "react";
import {
  FaBeer,
  FaBullhorn,
  FaDharmachakra,
  FaHeadphones,
  FaHighlighter,
  FaLandmark,
  FaMapSigns,
  FaLaptop,
  FaMercury,
  FaHouseDamage,
} from "react-icons/fa";

const ProfessionalSkills = () => {
  return (
    <div className="my-32 px-14">
      <h1 className="font-bold text-2xl md:text-3xl text-center my-6 md:my-12">
        Find and Hire Professionals Across All Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
        {/* item 1 */}
        <div className="flex border-2 rounded-lg  border-[#ACD7FA] bg-[#E8F4FE] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#ACD7FA] rounded-full justify-center ">
            <p className=" text-[#2196F3] ">
              {" "}
              <FaLaptop></FaLaptop>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Web, Mobile & IT</p>
            <p className="text-sm text-[#303952b3]">
              JavaScript, Java, Python, Node.js, React, Android Development...
            </p>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex border-2 rounded-lg  border-[#A3E2BF] bg-[#E6F7EE] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#C5ECD7] rounded-full justify-center ">
            <p className=" text-[#08AE54] ">
              {" "}
              <FaBullhorn></FaBullhorn>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Marketing & Sales</p>
            <p className="text-sm text-[#303952b3]">
              {" "}
              Sales, Business Development, B2B Marketing, Outbound Sales...
            </p>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex border-2 rounded-lg  border-[#FFDBA0] bg-[#FFF5E5] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#FFDBA0] rounded-full justify-center ">
            <p className=" text-[#FFA000] ">
              {" "}
              <FaHouseDamage></FaHouseDamage>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Business & Consulting</p>
            <p className="text-sm text-[#303952b3]">
              Recruiting, Business Analysis, Project Management...
            </p>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex border-2 rounded-lg  border-[#C5EEEB] bg-[#EFFAF9] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#C5EEEB] rounded-full justify-center ">
            <p className=" text-[#64D0C9] ">
              {" "}
              <FaDharmachakra></FaDharmachakra>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Design & Creative</p>
            <p className="text-sm text-[#303952b3]">
              Web Design, Graphic Design, UX Design, Adobe Photoshop...
            </p>
          </div>
        </div>

        {/* item 5 */}
        <div className="flex border-2 rounded-lg  border-[#F1CFD2] bg-[#FBF2F3] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#F1CFD2] rounded-full justify-center ">
            <p className=" text-[#D97E85] ">
              {" "}
              <FaMercury></FaMercury>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Engineering</p>
            <p className="text-sm text-[#303952b3]">
              3D Modeling, AutoCAD, Electrical Engineering...
            </p>
          </div>
        </div>

        {/* item 6 */}
        <div className="flex border-2 rounded-lg  border-[#D6E7B0] bg-[#F4F8E9] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#D6E7B0] rounded-full justify-center ">
            <p className=" text-[#93BF2A] ">
              {" "}
              <FaHeadphones></FaHeadphones>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Customer Support</p>
            <p className="text-sm text-[#303952b3]">
              Customer Service, Sales, CRM, Account Management...
            </p>
          </div>
        </div>

        {/* item 7 */}
        <div className="flex border-2 rounded-lg  border-[#D5D3F1] bg-[#F3F3FB] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#D5D3F1] rounded-full justify-center ">
            <p className=" text-[#948EDD] ">
              {" "}
              <FaHighlighter></FaHighlighter>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Writing & Translation</p>
            <p className="text-sm text-[#303952b3]">
              Content Writing, Translation, Copywriting, Editing &
              Proofreading...
            </p>
          </div>
        </div>

        {/* item 8 */}
        <div className="flex border-2 rounded-lg  border-[#FFEFB5] bg-[#FFFBEB] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#FFEFB5] rounded-full justify-center ">
            <p className=" text-[#FFD439] ">
              {" "}
              <FaLandmark></FaLandmark>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Legal & Finance</p>
            <p className="text-sm text-[#303952b3]">
              Accounting, CPA, Corporate Finance, Bookkeeping...
            </p>
          </div>
        </div>

        {/* item 9 */}
        <div className="flex border-2 rounded-lg  border-[#A5DEDE] bg-[#E6F6F6] pb-2 pt-4 w-full px-2">
          <div className="w-12 mr-2 flex bg-white h-12 items-center border border-[#A5DEDE] rounded-full justify-center ">
            <p className=" text-[#0CA7A5] ">
              {" "}
              <FaMapSigns></FaMapSigns>{" "}
            </p>
          </div>

          <div className="w-5/6">
            <p className="font-semibold text-lg">Medical & Healthcare</p>
            <p className="text-sm text-[#303952b3]">
              Medical Doctor, Pharmacology, Nursing, Medical Billing...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
