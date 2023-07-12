import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { createContextUser } from "../../../Sheared/Context/FullAppContext";






const Register = () => {
      const {newUserCreate}= useContext(createContextUser)
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
                 } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data.name)
    console.log(data.email)
    console.log(data.password)
    console.log(data.select)
     newUserCreate(data.email, data.password)
    .then((res) => {
      console.log(res.user)
      toast.success("Succesful user create..!")
    })
    .catch((error) => {
      console.log(error)
      toast.error("Field to user create...!")
    })
  };






               function dateFormate (obj){
                const year = obj.getFullYear()
                const month= obj.getMonth()
                const day = obj.getDay()

                return `year: ${year}: month ${month}: day: ${day}`
               }

           
            const date = new Date()
            console.log(date)
            
            const result= dateFormate(date)
            console.log("dddddddddddddddddddddd", result)






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
              {...register("name", {required: "Your valid name provite"})}
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
              {...register("designation", {required: "Your valid work skill and designation"})}
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
              {...register("address", {required: "Your valid address"})}
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
              {...register("email", {required: "Your email provite"})}
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
              {...register("password", {required:"provide your password"})}
            />
            <p className="text-red-300">{errors.password?.message}</p>
          </div>


         
          



          <div className="form-control w-full my-3  ">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo"
              className="input   border-[#B2B2B2] w-full "
              {...register("photo", {required: "Your valid photo"})}
            />
            <p className="text-red-400">{errors.photo?.message}</p>
          </div>



          <select className="select border-[#B2B2B2] w-full my-3 " {...register("select", {required: true})}>
            <option selected>Job Seeker</option>
            <option>Employer</option>
          </select>

          <p className="text-red-300">{errors.select?.message}</p>



          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-[#014C74] w-full py-2 mt-7 rounded text-white font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
