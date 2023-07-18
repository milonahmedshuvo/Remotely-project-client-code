import React from 'react'

const SingleJobPosts = ({posts}) => {

    console.log(posts)
    const {address, company, drescription, jobPossition } = posts


  return (
    <div>
          <div className='border border-gray-300 rounded mb-5 px-3 py-2'>
              <p className='text-2xl '>Possition: {jobPossition} </p>
              <p className='text-xl'>Company: {company} </p>
              <p className='text-lg'>Address: {address} </p>
              <p className='mt-2 text-md'>{drescription} </p>
          </div>
    </div>
  )
}

export default SingleJobPosts
