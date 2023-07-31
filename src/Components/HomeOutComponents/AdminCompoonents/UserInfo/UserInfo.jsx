import { useQuery } from '@tanstack/react-query'
import React from 'react'
import OneuserInfo from './OneuserInfo'

const UserInfo = () => {

    const {data:userInfo=[]}= useQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/userInfoAlldata")
            const data = await res.json()
            return data
        }
    })


  return (
    <div>
         <h1>user info</h1>

         {
            userInfo.map((user) => <OneuserInfo 
            key={user._id}
            user={user}
            ></OneuserInfo>)
         }
    </div>
  )
}

export default UserInfo
