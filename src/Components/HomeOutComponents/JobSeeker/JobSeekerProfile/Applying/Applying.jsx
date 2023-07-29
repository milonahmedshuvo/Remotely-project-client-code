import React, { useContext, useEffect, useState } from 'react'
import { createContextUser } from '../../../../Sheared/Context/FullAppContext'
import Loading from '../../../../Sheared/Loading'
import SingleApply from './SingleApply'



const Applying = () => {
      const {user, loading} =useContext(createContextUser)
      const [applying, setApplying] = useState([])
      if(loading){
        return <Loading></Loading>
      } 

    useEffect(() =>{
        fetch(`http://localhost:5000/applyingDataByEmail?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) =>setApplying(data))
    },[user?.email])

   

  return (
    <div>
        

        {
            applying.map((apply) => <SingleApply
            key={apply._id}
            apply={apply}
            ></SingleApply>)
        } 
    </div>
  )
}

export default Applying


   