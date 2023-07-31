import { useQuery } from '@tanstack/react-query'
import React from 'react'
import OneuserInfo from './OneuserInfo'
import Loading from '../../../Sheared/Loading'

const UserInfo = () => {

    const {data:userInfo=[], refetch, isLoading}= useQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/userInfoAlldata")
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
            userInfo.map((user) => <OneuserInfo 
            key={user._id}
            user={user}
            refetch={refetch}
            ></OneuserInfo>)
         }
    </div>
  )
}

export default UserInfo
