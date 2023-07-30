import { useQuery } from '@tanstack/react-query'
import React from 'react'
import JobSeekerEmployJobPost from './JobSeekerEmployJobPost'

const EmployerPost = () => {

     const {data:employerjob=[], isLoading, refetch } = useQuery({
        queryKey: ['employerjob'],
        queryFn: async ( ) => {
            const res =await fetch("http://localhost:5000/employerJobPost")
            const data =  await res.json()
            return data
        }
     })

  return (
    <div>
        

         {
            employerjob.map((post,i)=> <JobSeekerEmployJobPost
            key={i}
            post={post}
            ></JobSeekerEmployJobPost>)
         }
    </div>
  )
}

export default EmployerPost
