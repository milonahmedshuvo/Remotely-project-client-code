import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContextUser } from '../../../../Sheared/Context/FullAppContext'
import Loading from '../../../../Sheared/Loading'
import SingleApply from './SingleApply'
import { useQuery } from '@tanstack/react-query'



const Applying = () => {
      const {user, loading} =useContext(createContextUser)
    //   const [applying, setApplying] = useState([])
      const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

      if(loading){
        return <Loading></Loading>
      } 

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/applyingDataByEmail?email=${user?.email}`)
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setApplying(data)
    //         forceUpdate()
    //     })
    // },[user?.email])

    const {data:applying=[], isLoading, refetch} = useQuery({
        queryKey: ['applying', user?.email],
        queryFn: async ( ) => {
            const res = await fetch(`http://localhost:5000/applyingDataByEmail?email=${user?.email}`)
            const data = res.json()
            return data
        }
        
    })


     

   

  return (
    <div>
        

        {
            applying.map((apply) => <SingleApply
            key={apply._id}
            apply={apply}
            refetch={refetch}
            ></SingleApply>)
        } 
    </div>
  )
}

export default Applying


   