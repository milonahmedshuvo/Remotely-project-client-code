import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { FaBeer, FaStar, FaStarHalfAlt, FaLowVision, FaEnvelopeOpen, FaTv, FaUniversity, FaPeopleArrows, FaRegHeart } from 'react-icons/fa'




const ExploreCompany = () => {

    const singleDatailsData = useLoaderData()
    const {address, companyName,companySize,companyType,coverpic,drescription,indrustyType,profilePic,sortAddress,website, _id}= singleDatailsData;
   
  return (
    <div className='mb-32'>
       

       <div className='bg-[#E2E4E6] '>

         <div className='w-full mt-5  ' >
            <img className='w-full h-[300px]' src={coverpic} alt="" />

              <div className='px-0 lg:px-28'>
               


                {/* secount design start  */}
                <div className='bg-[#FFFFFF] py-8  relative top-[-100px] '>

                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='ml-24'>
                            <h2 className='font-semibold my-1'>{companyName}</h2>
                            <div className='flex text-yellow-400 my-1'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStarHalfAlt></FaStarHalfAlt>
                            </div>
                            <h3 className='my-1'>{sortAddress}</h3>
                            <h4 className='my-1'>Industry Type(s): {indrustyType}</h4>
                        </div>





                        <div className='flex flex-col lg:flex-row items-center  pr-4'>
                          <p className='mr-6 bg-[#007BFF] px-8 py-2 text-white text-lg  rounded-3xl'>Post</p>
                         

                          <div className=' bg-[#218838] px-8 py-2 text-white text-lg  rounded-3xl flex items-center'>
                          <FaRegHeart className='mr-2'></FaRegHeart>
                          <p >Follow</p>
                          </div>



                        </div>
                    </div>




                    <div className='w-[150px] h-[100px] absolute top-3 left-[-80px] '>
                        <img className='rounded-full border border-4 ' src={profilePic} alt="" />
                    </div>
                    
                </div>




                     <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-[#FFFFFF] pt-5 pb-5 mt-[-60px]'>


                         <div className='flex flex-col items-center justify-center'>
                          <h3><FaLowVision></FaLowVision></h3>
                          <p className='font-semibold mt-2'>
                          {/* Overview */}
                          <Link to={`/DainamicRoute/${_id}`} className='text-[#213547]'>Overview</Link>
                          </p>

                          
                         </div>

                         <div className='flex flex-col items-center justify-center'>
                          <h3> <FaEnvelopeOpen></FaEnvelopeOpen> </h3>
                          <p className='font-semibold mt-2'>Posts</p>
                         </div>


                         <div className='flex flex-col items-center justify-center'>
                          <h3><FaStar></FaStar></h3>
                          <p className='font-semibold mt-2'>Reviews</p>
                         </div>



                         <div className='flex flex-col items-center justify-center'>
                          <h3><FaTv></FaTv></h3>
                          <p className='font-semibold mt-2'>Interviews</p>
                         </div>


                         <div className='flex flex-col items-center justify-center'>
                          <h3> <FaUniversity></FaUniversity></h3>
                          <p className='font-semibold mt-2'>Jobs</p>
                         </div>


                         <div className='flex flex-col items-center justify-center'>
                          <h3><FaPeopleArrows></FaPeopleArrows></h3>
                          <p className='font-semibold mt-2'>people</p>
                         </div>


                     </div>




                     {/* akane hobe outlet  */}
                     
                      

                      <Outlet></Outlet>
                     


              </div>

         </div>






       </div>
    </div>
  )
}

export default ExploreCompany
