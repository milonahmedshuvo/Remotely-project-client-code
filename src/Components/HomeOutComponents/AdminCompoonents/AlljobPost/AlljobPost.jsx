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
     console.log(allPosts)



  return (
    <div>
         <h1>all job posts</h1>
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
