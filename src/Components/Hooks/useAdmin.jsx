import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useAdmin = (email) => {
      const [isAdmin, setIsadmin]=useState(null)

      if(email){
        useEffect(()=> {
            fetch(`http://localhost:5000/getAdminCustomHook?email=${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log("Admin custom hook:", data)
                setIsadmin(data.isAdmin)
            })
        },[email])
      }
 
      return [isAdmin]
}

export default useAdmin
