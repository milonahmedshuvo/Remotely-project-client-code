import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SixSingle from './SixSingle';



const SixCompany = () => {

      const {data:allCompanys=[], isLoading, refetch }=useQuery({
          queryKey: ['allCompanys'],
          queryFn: async () => {
              const res = await fetch("https://remotely-project-server.vercel.app/allCompany");
              const result = await res.json()
              return result
              
          }
      })


       if(isLoading){
        return <h1 className='font-bold'> Looding......</h1>
       }




  return (
    <div className='my-20 px-24'>
       <h1 className='text-[#128ADC] text-3xl font-semibold'>Best Internships For Career Development</h1>


       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {allCompanys.map((companyData, i) => (
          <SixSingle key={i} companyData={companyData}></SixSingle>
        ))}
      </div>


    </div>
  )
}

export default SixCompany
