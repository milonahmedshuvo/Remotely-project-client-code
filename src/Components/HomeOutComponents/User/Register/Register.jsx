import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data.email)
    console.log(data.password)
    console.log(data.select)
  };




  return (
    <div className="mt-16 mb-28  ">
      <h1 className="text-center font-bold text-[#0C8D2C] text-2xl">
        Register Form
      </h1>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="w-2/6">
          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input   border-[#A3E2BF] w-full "
              {...register("email", {required: true})}
            />
          </div>




          <div className="form-control w-full my-3 ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input  border-[#A3E2BF] w-full "
              {...register("password", {required:"provide your password"})}
            />
          </div>




          <select className="select border-[#A3E2BF] w-full my-3 " {...register("select", {required: true})}>
            <option selected>Job Seeker</option>
            <option>Employer</option>
          </select>





          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-[#0C8D2C] w-full py-2 mt-7 rounded text-white font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
