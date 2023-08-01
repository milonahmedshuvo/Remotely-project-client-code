import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useEmployer = (email) => {
    const [isEmployer, setIsEmployer] = useState(null)
    const [loding, setLoding] = useState(true)
    
       if(email){
        useEffect(()=>{
            fetch(`http://localhost:5000/getEmployer?email=${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                setIsEmployer(data.isEmployer)
                setLoding(false)
            })
        },[email])
       }

       return [isEmployer,loding]
}

export default useEmployer
