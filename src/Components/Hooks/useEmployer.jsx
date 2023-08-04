import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const useEmployer = (email) => {
      const [isEmployer, setIsemployer] = useState(null)
     
      if(email){
        useEffect(()=>{
            fetch(`http://localhost:5000/customHooksEmployer?email=${email}`)
            .then((res)=> res.json())
            .then((data)=> {
                console.log("employer custom hooks:", data)
                setIsemployer(data.isEmployer)
            })
            .catch((err)=> {
                toast.error("error employer hooks")
                console.log(err)
            })
        },[email])
      }
 
      return [isEmployer]
}

export default useEmployer
