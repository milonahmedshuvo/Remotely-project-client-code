import React from 'react'
import { useLoaderData } from 'react-router-dom'


const ExploreCompany = () => {

    const singleDatailsData = useLoaderData()
    const {address, companyName,companySize,companyType,coverpic,drescription,indrustyType,profilePic,sortAddress,website}= singleDatailsData;
   
  return (
    <div>
       

       <div>

         <div className='w-full mt-5' >
            <img className='w-full h-[200px]' src={coverpic} alt="" />

              <div className='border border-red-400 px-0 lg:px-28'>


                <div className='bg-white py-6 border border-green-400'>

                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='ml-24'>
                            <h2 className='font-semibold my-3 '>{companyName}</h2>
                            <h3>{sortAddress}</h3>
                            <h4>{indrustyType}</h4>
                        </div>

                        <div className='flex flex-col lg:flex-row items-center border border-red-500'>
                          <p className='mr-6 bg-[#007BFF] px-8 py-2 text-white text-lg  rounded-3xl'>Post</p>
                          <p className=' bg-[#218838] px-8 py-2 text-white text-lg  rounded-3xl'>Follow</p>
                        </div>
                    </div>
                    
                </div>


              </div>

         </div>






       </div>
    </div>
  )
}

export default ExploreCompany
