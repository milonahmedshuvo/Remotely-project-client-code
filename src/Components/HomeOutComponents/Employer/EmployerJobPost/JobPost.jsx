import React from 'react'

const JobPost = ({post}) => {
 const {address,company,drescription,jobPossition,skills} =post

  return (
    <div className='mx-4 my-16'>
          <div>
            <p className='text-2xl'>{jobPossition}</p>
            <p className='text-xl'>{company}</p>
            <p className='text-xl'>{address}</p>
          </div>

            <p className='mt-2 '>{drescription}</p>

            <button className="btn btn-outline btn-error font-bold mt-2 btn-sm">Delete</button>
    </div>
  )
}

export default JobPost


  