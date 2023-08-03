import React from 'react'
import { useContext } from 'react'
import { createContextUser } from '../../Sheared/Context/FullAppContext'
import Loading from '../../Sheared/Loading'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'


const HowCanhelp = () => {
      const {user,loading} = useContext(createContextUser)
      if(loading){
        return <Loading></Loading>
      }


      const {data} = useQuery({
        queryKey: ['getjobs', user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/getjobs?email=${user?.email}`)
          const data = await res.json()
          return data
        }
      })

      console.log("query data:", data)



      //  const {data:jobSeeker={}} = useQuery ({
      //   queryKey: ['jobSeeker'],
      //   queryFn: async () => {
      //      const res = await fetch(`http://localhost:5000/jobSeeker?email=${user?.email}`)
      //      const data = await res.json()
      //      return data
      //   }
      //  })

      //  console.log("query2", jobSeeker)

        // get job seeker rule 



        useEffect(()=>{
            fetch(`http://localhost:5000/jobSeeker?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log("useEffet", data))
            .catch((err)=>console.log(err))
        },[user?.email])
      

        









  return (
    <div>
        <h1 className='text-3xl font-bold text-purple-400 text-center'>How can we help you?</h1>  
    </div>
  )
}

export default HowCanhelp
