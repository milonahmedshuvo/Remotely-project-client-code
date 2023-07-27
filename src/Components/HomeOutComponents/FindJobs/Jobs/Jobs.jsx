import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Job from './Job'

const Jobs = () => {

      const {data:alljobs=[], isLoading}= useQuery({
        queryKey:["alljobs"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/alljobs")
            const data =await res.json()
            return data
        }
      })


      


  return (
    <div>
        {
            alljobs.map((job) => <Job
            key={job._id}
            job={job}
            ></Job>)
        }
    </div>
  )
}

export default Jobs
