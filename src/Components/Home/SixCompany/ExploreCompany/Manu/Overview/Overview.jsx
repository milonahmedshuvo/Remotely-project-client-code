import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Overview = () => {
      const datas = useLoaderData()
      const { address, companyName,companySize,companyType,coverpic,drescription,indrustyType,profilePic,sortAddress,website, _id } = datas;




  return (
    <div className='mt-10 flex flex-col lg:flex-row w-full gap-6 bg-[#FFFFFF]'>
       
       <div className='border-1 pt-5 pb-16 px-5 border border-gray-400 w-2/3'>
            
            <h1 className='font-medium my-5 text-xl '>{companyName}  overview</h1>
          <p>{drescription}</p>
       </div>


       <div className=' w-1/3 border border-gray-400 '>
            <div className='relative'>
                <img className='h-[70px] w-full ' src={coverpic} alt="" />


                <div className=' absolute top-10 left-32 '>
                    <img className='rounded-full h-20 mx-auto ' src={profilePic} alt="" />

                    <h2 className='mt-1 text-center'>{companyName}</h2>
                    <h2 className='mt-1 text-center'>{sortAddress}</h2>
                   
                </div>

                
            </div>


             {/* <h1>website: {website}</h1> */}
            
       </div>
    </div>
  )
}

export default Overview
