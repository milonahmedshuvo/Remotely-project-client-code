import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../../Sheared/Loading'
import Jobpost from './Jobpost'

const AlljobPost = () => {
   
     const {data:allPosts=[], isLoading, refetch} =useQuery({
        queryKey: ["allPosts"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/alljob")
            const data = await res.json()
            return data
        }
     })
     if(isLoading){
        return <Loading></Loading>
     }
     



  return (
    <div className=' mx-4 md:mx-20 lg:mx-40'>
         
          {
            allPosts.map((job)=> <Jobpost
            key={job._id}
            job={job}
            refetch={refetch}
            ></Jobpost>)
          } 
    </div>
  )
}

export default AlljobPost
