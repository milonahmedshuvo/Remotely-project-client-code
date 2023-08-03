import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'




const uesJobseeker = (email) => {
      const [isJobseeker, setIsJobseeker] = useState(null)
      
      if(email){
        useEffect(()=>{
            fetch(`http://localhost:5000/jobSeeker?email=${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                setIsJobseeker(data.isJobseeker)
                console.log("custom hook", data)
            })
            .catch((err)=>{
                console.log(err)
                toast.error("feild hook job seeker")
            })
        },[email])
      }

      return [isJobseeker]
      
}



export default uesJobseeker
