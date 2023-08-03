import React, { useContext, useEffect, useState } from "react";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate} from "react-router-dom";
import Loading from "../../../Sheared/Loading";
import { useQuery } from "@tanstack/react-query";
import uesJobseeker from "../../../Hooks/uesJobseeker";



const Login = () => {
  const { user,loading, userSingIn } = useContext(createContextUser);

  if(loading){
    return <Loading></Loading>
  }

  const {register,handleSubmit,watch,formState: { errors }} = useForm();
  

           const handleLoginForm = (data) => {
            console.log(data.email)
            console.log(data.password)
            userSingIn(data.email, data.password)
            .then((res) => {
              console.log(res)
              toast.success("Succesful user login..!!")
             
            })
            .catch((err)=>{
              console.log(err)
              toast.error("Filed user login..!!")
            })
           }

           console.log("email", user?.email)
          



           const navigate = useNavigate()

           const [isJobseeker] = uesJobseeker(user?.email)
           console.log(isJobseeker)
           if(isJobseeker){
            navigate('/jobSeeker')
           }
         

           
          
           
           
  return (
    <div className="my-36">
      

      <div className=" w-full lg:w-3/6 mx-auto md:pt-12 md:pb-24 md:px-20 px-5 bg-gradient-to-b from-indigo-100 rounded">

      <h1 className="text-3xl text-[#0983C0] text-center">Login Form</h1>


        <form onSubmit={handleSubmit(handleLoginForm)} className="">

          <div className="my-3">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered   w-full  "
              {...register("email", {required: "Your email provite"})}
              
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>



          <div className="my-3">
          <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered  w-full  "
              {...register("password", {required: "Your password provite"})}
            />
            <p className="text-red-400">{errors.password?.message}</p>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-info w-full py-2 mt-7 rounded text-white "
            />
          </div>
        </form>
           <p className="mt-3">Are you new user? 
           <Link to='/register' className='uppercase text-[#0983C0] ml-2 mr-3'>Register</Link>

           </p>

        
      </div>
    </div>
  );
};

export default Login;
