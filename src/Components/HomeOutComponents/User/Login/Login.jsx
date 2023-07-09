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
  console.log(user);

  return (
    <div className="my-36">
      <h1>Login Form</h1>

      <div className="flex justify-center items-center">
        <form className="w-2/6">

          <div className="my-3">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-info w-full  "
            />
          </div>



          <div className="my-3">
          <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered input-info w-full  "
            />
          </div>

          <div>
            <input
              type="button"
              value="Submit"
              className="bg-info w-full py-2 mt-7 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
