import React from 'react'
import { FaBeer, FaStar,FaStarOfDavid,FaRegStar,FaAirbnb, FaStarHalfAlt, FaLowVision, FaEnvelopeOpen, FaTv, FaUniversity, FaPeopleArrows, FaRegHeart } from 'react-icons/fa'


const JobpostSingle = ({post}) => {
    console.log(post)
    const { jobTitle, location, jobtype, drescription } = post;



  return (
    <div className='bg-[#F4FCFF] px-3 py-6'>

         <div className='flex justify-between'>
            <h2 className='text-[#007CD8] font-semibold text-lg'>{jobTitle}</h2>
            <FaRegStar className='text-[#46AC49] text-[30px]'></FaRegStar>
         </div>

        
        <div className='flex items-center mb-4'>
            <FaAirbnb className='text-lg mr-2 '></FaAirbnb>
            <p className='text-[#007CD8] font-medium'>{location}</p>
        </div>
         <p className='text-sm mb-1 '>{drescription}...</p> 

         <div className='bg-[#F2F2F3] py-3 text-sm pl-3'>
            <p>{jobtype}</p>
         </div>
    </div>
  )
}

export default JobpostSingle
