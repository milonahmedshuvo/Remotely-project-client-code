import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../../Sheared/Loading'
import SinglePost from './SinglePost'

const AdminEmployerPost = () => {
 
     const {data:emploerposts=[], isLoading, refetch } = useQuery({
        queryKey: ["employrposts"],
        queryFn: async () => {
            const res = await fetch(`https://remotely-project-server.vercel.app/employerJobPost`)
            const data = await res.json()
            return data
        }
     })
     if(isLoading){
        return <Loading></Loading>
     }



  return (
    <div>

        {
            emploerposts.map((post)=> <SinglePost
            key={post._id}
            post={post}
            refetch={refetch}
            ></SinglePost>)
        }
    </div>
  )
}

export default AdminEmployerPost
