import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    FaUserAlt,
    FaUserFriends,
    FaBell,
    FaIdCard,
    FaMoneyCheck,
    FaHome,
  } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import Loading from "../../../Sheared/Loading";

     




const AdminHeader = () => {
  const {user,loading}= useContext(createContextUser)
  if(loading){
    return <Loading></Loading>
  }


  const {data, isLoading, refetch}=useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://remotely-project-server.vercel.app/getAdminUser?email=${user?.email}`)
      const data = await res.json()
      return data
    }
  })

    if(isLoading){
      return <Loading></Loading>
    }

 console.log("admin", data)
  const {image} =data
  






  return (
    <div className="navbar bg-[#1D4354]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
          >
            {/* { manuItem} */}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-white text-xl">Remotely</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{/* { manuItem} */}</ul>
      </div>
      <div className="navbar-end  mr-2 md:mr-5 lg:mr-24  ">
        <div className="flex items-center flex-col md:flex-row">
          <Link to="/" className="">
            <div className="flex flex-col items-center mr-3 utilitis">
              <p className="text-white text-xl ">
                <FaHome></FaHome>{" "}
              </p>
              <p className="text-white  ">Home</p>
            </div>
          </Link>

          <Link to="/admin">
            <div className="flex flex-col items-center  mr-3">
              <p className="text-white text-xl">
                <FaUserFriends></FaUserFriends>{" "}
              </p>
              <p className="text-white ">User</p>
            </div>
          </Link>

          <Link to="/admin/alljob">
            <div className="flex flex-col items-center  mr-3">
              <p className="text-white text-xl">
                <FaMoneyCheck></FaMoneyCheck>{" "}
              </p>
              <p className="text-white ">Job Post</p>
            </div>
          </Link>

          <Link to="/admin/employerpost">
            <div className="flex flex-col items-center   mr-3">
              <p className="text-white text-xl ">
                <FaIdCard></FaIdCard>{" "}
              </p>
              <p className="text-white ">Employers Job</p>
            </div>
          </Link>

          {/* <div className="flex flex-col items-center  mr-3">
            <p className="text-white text-xl">
              <FaBell></FaBell>{" "}
            </p>
            <p className="text-white ">Notifications</p>
          </div> */}



        </div>

        {/* Me and Work  */}

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center px-4 lg:px-7  border-white border-r-2 ">
            <img className="rounded-full  h-10 w-10 " src={image} alt="" />

            <p className="text-white ">Me</p>
          </div>

          <div className="flex flex-col items-center px-4 lg:px-7">
            <h1 className="text-xl text-white">
              {" "}
              <FaUserAlt></FaUserAlt>{" "}
            </h1>
            <p className=" mt-1 text-white">Work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
