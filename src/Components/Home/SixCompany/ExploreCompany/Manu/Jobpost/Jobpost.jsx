import React from 'react'
import { useLoaderData } from 'react-router-dom'
import JobpostSingle from './JobpostSingle'

const Jobpost = () => {

    const data = useLoaderData()
  




  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 mx-2 lg:mx-0'>
       


         <div className='border border-red-400 '>
           

           {
            data.map((post, i) => <JobpostSingle
            key={i}
            post={post}
            ></JobpostSingle>)
           }
         </div>



         <div className='border border-red-400 '>
            <h1>Datails post </h1>
         </div>


    </div>
  )
}

export default Jobpost
