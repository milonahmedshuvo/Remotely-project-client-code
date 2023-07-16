import React from "react";
import { FaPen, FaPhotoVideo } from "react-icons/fa";
import Modal from "./Modal";

const JobSeekerProfile = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 lg:gap-6 lg:px-20 bg-[#E2E4E6] ">
      <div className="border border-green-300 w-full md:w-1/3 lg:w-1/4 bg-[#FFFFFF]">
        <h1>job seeker profile </h1>
      </div>

      <div className="border border-red-500 w-full md:w-2/3 lg:w-3/4 bg-[#FFFFFF]">
        <div>
          <div className="flex justify-between items-center py-7 px-5 border-b border-gray-300 ">
            <div className="flex items-center ">
              <img
                className="rounded-full  h-14 w-14 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU"
                alt=""
              />

              <h1 className="font-medium text-lg ml-3">
                What do you want to talk about?
              </h1>
            </div>

            <div>
              <label htmlFor="my_modal_6" className="">
              <FaPen
                className="text-[#28A745] text-3xl"                
              ></FaPen>
              </label>              
              <Modal></Modal>
            </div>
          </div>

          <div className="flex justify-between items-center px-5">
            <h2 className="text-xl">Create your post </h2>

            <div className="flex justify-between py-3 ">
              <div className="flex items-center px-4 py-2 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-[#0069D9] text-xl mr-2"></FaPhotoVideo>
                <p className="font-medium">Photo</p>
              </div>

              <div className="flex items-center  px-4 py-2 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-[#28A745] text-xl mr-1"></FaPhotoVideo>
                <p className="font-medium">Video</p>
              </div>

              <div className="flex items-center  px-4 py-2 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-yellow-600 text-xl mr-1"></FaPhotoVideo>
                <p className="font-medium">Files</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
