import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const useJobseeker = (email) => {
      const [jobSeeker, setJobSeeker] = useState(null)

    if(email){
        useEffect(()=>{
            fetch(`http://localhost:5000/jobSeeker?email=${email}`)
        .then((res)=> res.json())
        .then((data)=> {
            setJobSeeker(data.isJobseeker)
        })
        .catch((err)=> {
            toast.error("Field custom hooks")
        })
        },[email])
    }

    return [jobSeeker]
}

export default useJobseeker
