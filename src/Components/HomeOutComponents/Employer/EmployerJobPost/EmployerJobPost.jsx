import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../../Sheared/Loading'
import JobPost from './JobPost'

const EmployerJobPost = () => {

      const {data:employerPost=[], isLoading, refetch} = useQuery({
        queryKey: ["employerPost"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/employerJobPost")
          const data = res.json()
          return data
         }
      })

       if(isLoading){
        return <Loading></Loading>
       }

    console.log(employerPost)

  return (
    <div>
        

       {
         employerPost.map((post) => <JobPost
         key={post._id}
         post={post}
         refetch={refetch}
         ></JobPost>)
       }
    </div>
  )
}

export default EmployerJobPost
