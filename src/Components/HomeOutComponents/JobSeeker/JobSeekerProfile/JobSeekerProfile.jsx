/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { FaPen, FaPhotoVideo } from "react-icons/fa";
import Modal from "./Modal";
import { useContext } from "react";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../../Sheared/Loading";



const JobSeekerProfile = () => {
  const { user, loading } = useContext(createContextUser)

  if (loading) {
    return <Loading></Loading>
  }



  const { data, isLoading, refetch } = useQuery({
    queryKey: ["jobSeeker", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://remotely-project-server.vercel.app/userInfo?email=${user?.email}`);
      const data = await res.json()
      return data
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }


  const { userName, email, address, cover, image, userIdentity, designation, } = data;
  refetch()
  console.log(email, userIdentity)






  return (
    <div className="flex flex-col md:flex-row gap-2 lg:gap-6 lg:px-20 bg-[#E2E4E6] ">
      <div className=" w-full md:w-1/3 lg:w-1/4 bg-[#FFFFFF]">


        <div className="relative">
          <img
            className="h-[100px]"
            src={cover} alt="" />

          <div className="absolute top-16 left-28">
            <img className="h-16 w-16 rounded-full" src={image} alt="" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-center text-xl font-bold">{userName}</p>
          <p className="text-center text-sm font-medium">{email}</p>
          <p className="text-center text-sm">{userIdentity}</p>
          <p className="text-center text-sm">{designation}</p>
          <p className="text-center text-sm">{address}</p>


          <div className="w-1/3 ml-20">
            <input
              className="bg-blue-500 px-3 py-1 mt-10 text-white font-bold rounded-full "
              type="button" value="Update Profile" />
          </div>

          <hr className="mt-8  "></hr>
          <div className="flex justify-between items-center  py-4 mx-4">

            <div className="hover:text-blue-400">
              <p className="font-medium text-sm">Connections</p>
              <p className="font-medium">Grow your network</p>
            </div>

            <div>
              <input
                className="bg-[#28A856] px-3 py-1  text-white font-bold rounded-full "
                type="button" value="0" />
            </div>


          </div>




          <hr className=""></hr>
          <Link to='/jobSeeker/jobhistory' >  
          <div className="flex justify-between items-center  py-4 mx-4">
            <div>
              <p className="text-md font-semibold hover:text-blue-400 ">Job History</p>
            </div>
            <div>
              <input
                className="bg-[#28A856] px-3 py-1  text-white font-bold rounded-full "
                type="button" value="1" />
            </div>
          </div>
          </Link>





        </div>
      </div>





      {/* job seeker datails         */}

      <div className=" w-full md:w-2/3 lg:w-3/4 bg-[#FFFFFF]">
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
              <Modal
                userIdentity={userIdentity}
                email={email}
              ></Modal>
            </div>
          </div>

          <div className="flex justify-between items-center px-5">
            <h2 className="text-xl">Create your post </h2>

            <div className="flex justify-between py-3 ">
              <div className="flex items-center px-4 py-1 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-[#0069D9] text-xl mr-2"></FaPhotoVideo>
                <p className="font-medium">Photo</p>
              </div>

              <div className="flex items-center  px-4 py-1 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-[#28A745] text-xl mr-1"></FaPhotoVideo>
                <p className="font-medium">Video</p>
              </div>

              <div className="flex items-center  px-4 py-1 bg-blue-100 rounded-full mr-2 ">
                <FaPhotoVideo className="text-yellow-600 text-xl mr-1"></FaPhotoVideo>
                <p className="font-medium">Files</p>
              </div>
            </div>
          </div>

          <hr></hr>


          <Outlet></Outlet>





        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
