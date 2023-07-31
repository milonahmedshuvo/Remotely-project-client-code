import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { createContextUser } from "../../../Sheared/Context/FullAppContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { newUserCreate, user } = useContext(createContextUser);
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    newUserCreate(data.email, data.password)
      .then((res) => {
        fetch(
          "https://api.imgbb.com/1/upload?&key=fb70d1eaaaaf3643c06f16d2e654b7a0",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((imageData) => {
            console.log(imageData.data.url)
            if (imageData.success) {
              const newUserData = {
                userName: data.name,
                designation: data.designation,
                address: data.address,
                email: data.email,
                userIdentity: data.select,
                image: imageData.data.url,
                cover:"https://i.ibb.co/TbZNmCg/banner.jpg"
              };
              
              handleSaveUserData(newUserData);
            }
          })
          .catch((err) => console.log(err));

        toast.success("Succesful user create..!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Field to user create...!");
      });
  };

  function handleSaveUserData(userData) {
    fetch("http://localhost:5000/newUserData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  //    function dateFormate (obj){
  //     const year = obj.getFullYear()
  //     const month= obj.getMonth()
  //     const day = obj.getDate()

  //     return `year: ${year}: month ${month +1 }: day: ${day}`
  //    }

  // const date = new Date()
  // console.log(date)

  // const result= dateFormate(date)
  // console.log("dddddddddddddddddddddd", result)

  return (
    <div className="mt-16 mb-28  ">
      <div className="w-2/6 mx-auto shadow-lg px-8 py-8 bg-[#EAEAEA]">
        <h1 className="text-center font-bold text-[#0983C0] text-2xl">
          Register Form
        </h1>

        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input   border-[#B2B2B2] w-full "
              {...register("name", { required: "Your valid name provite" })}
            />
            <p className="text-red-400">{errors.name?.message}</p>
          </div>

          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              type="text"
              placeholder="Work/Designation"
              className="input   border-[#B2B2B2] w-full "
              {...register("designation", {
                required: "Your valid work skill and designation",
              })}
            />
            <p className="text-red-400">{errors.designation?.message}</p>
          </div>

          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              className="input   border-[#B2B2B2] w-full "
              {...register("address", { required: "Your valid address" })}
            />
            <p className="text-red-400">{errors.address?.message}</p>
          </div>

          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input   border-[#B2B2B2] w-full "
              {...register("email", { required: "Your email provite" })}
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>

          <div className="form-control w-full my-3 ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input  border-[#B2B2B2] w-full "
              {...register("password", { required: "provide your password" })}
            />
            <p className="text-red-300">{errors.password?.message}</p>
          </div>

          <select
            className="select border-[#B2B2B2] w-full my-3 "
            {...register("select", { required: true })}
          >
            <option selected>Job Seeker</option>
            <option>Employer</option>
          </select>

          <p className="text-red-300">{errors.select?.message}</p>

          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              placeholder="Your Photo"
              className="input   border-[#B2B2B2] w-full "
              {...register("image", { required: "Your valid photo" })}
            />
            <p className="text-red-400">{errors.image?.message}</p>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-[#014C74] w-full py-2 mt-7 rounded text-white font-bold"
            />
          </div>
        </form>



        <p className="mt-3">Already have your Account ? 
           <Link to='/login' className='uppercase text-[#0983C0] ml-2  mr-3'>Login</Link>

           </p>



      </div>
    </div>
  );
};

export default Register;
