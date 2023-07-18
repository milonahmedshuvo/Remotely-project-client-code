import React, { useContext } from 'react'
import { createContextUser } from '../../../../Sheared/Context/FullAppContext'
import { useQuery } from '@tanstack/react-query'

const MyJobPost = () => {
      const { user, loading }= useContext(createContextUser)
      if(loading){
        return <h1> my job post loading...</h1>
      }


      const {data:jobposts=[], isLoading }= useQuery({
        queryKey: ['jobposts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/getJobPostData?email=${user?.email}`);
            const data= await res.json()
            return data
        }  
      })
       
      if(isLoading){
        return <h1> my job post loading...</h1>
      }

      console.log("jobposts data", jobposts)
       

  return (
    <div>
        <h1>my job post</h1>  
    </div>
  )
}

export default MyJobPost
