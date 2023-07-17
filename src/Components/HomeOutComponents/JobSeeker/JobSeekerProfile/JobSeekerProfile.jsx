import React, { useEffect } from "react";
import { FaPen, FaPhotoVideo } from "react-icons/fa";
import Modal from "./Modal";
import { useContext } from "react";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { useQuery } from "@tanstack/react-query";

const JobSeekerProfile = () => {
    const {user, loading }= useContext(createContextUser)
    
    if(loading){
      return <h1>jobSeeker profile loading...</h1>
    }

    
      const {data , isLoading }= useQuery({
        queryKey: ["jobSeeker", user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/userInfo?email=${user?.email}`);
          const data= await res.json()
          return data
        }
      })

      if(isLoading){
        return <h1>data</h1>
      }

      console.log(data)
      const {userName, email, address,cover,image, userIdentity, designation, } = data;   







  return (
    <div className="flex flex-col md:flex-row gap-2 lg:gap-6 lg:px-20 bg-[#E2E4E6] ">
      <div className="border border-green-300 w-full md:w-1/3 lg:w-1/4 bg-[#FFFFFF]">
        
        
            <div className="relative">
                 <img
                  className="h-[100px]"
                  src={cover} alt="" />

                 <div className="absolute top-16 left-28">
                  <img className="h-16 w-16 rounded-full" src={image} alt="" />
                 </div>
            </div>






      </div>





  {/* job seeker datails         */}

      <div className="border border-red-500 w-full md:w-2/3 lg:w-3/4 bg-[#FFFFFF]">
        <div>
          <div className="flex justify-between items-center py-7 px-5 border-b border-gray-300 ">
            <div className="flex items-center ">
              <img
                className="rounded-full  h-14 w-14 "
                src={image}
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
