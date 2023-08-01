import React, { useEffect, useState } from 'react'

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin]=useState(null)

    if(email){
        useEffect(()=>{
            fetch(`http://localhost:5000/getAdmin?email=${email}`)
            .then((res)=> res.json())
            .then((data)=> {
                setIsAdmin(data.isAdmin)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[email])
    }

return [isAdmin]
 
}

export default useAdmin
