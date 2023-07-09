import React, { useContext } from "react";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user } = useContext(createContextUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 

           const handleLoginForm = (data) => {
            console.log(data.email)
            console.log(data.password)
           }

  return (
    <div className="my-36">
      

      <div className=" w-full lg:w-3/6 mx-auto md:pt-12 md:pb-24 md:px-20 px-5 bg-gradient-to-b from-indigo-400 rounded">

      <h1 className="text-3xl text-white text-center">Login Form</h1>


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
      </div>
    </div>
  );
};

export default Login;
