import React, { useContext } from 'react'
import { createContextUser } from '../../../../Sheared/Context/FullAppContext'
import { useQuery } from '@tanstack/react-query'
import SingleJobPosts from './SingleJobPosts'

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

      
       

  return (
    <div className='grid grid-cols-1 ml-7 mt-10 mr-14'>
      


        {
            jobposts.map((posts, i) => <SingleJobPosts
            key={i}
            posts={posts}
            ></SingleJobPosts>)
        }  
    </div>
  )
}

export default MyJobPost
