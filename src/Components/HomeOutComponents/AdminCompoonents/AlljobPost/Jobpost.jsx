import React from 'react'

const Jobpost = ({job, refetch}) => {
      console.log("jobdd", job)
      const {companyName,drescription,drescriptionTwo, jobSkills,location,jobTitle}= job;

  return (
    <div>
           <div className='mt-16'>

             <div>
                <p className='text-2xl'>{jobTitle}</p>
                <p className='text-xl'>{companyName}</p>
                 <p className='text-xl'>{location}</p>
             </div>
                  
                  <p className='mt-4'>{drescription}</p>
                  <p>{drescriptionTwo}</p>

                  <div className='mt-3'>
                    <button className='btn btn-error btn-sm '>Delete</button>
                  </div>
           </div>
    </div>
  )
}

export default Jobpost


