import React from 'react'
import { useLoaderData } from 'react-router-dom'

const OnepostDatails = () => {
      const jobDatas = useLoaderData()
      const {companyName,drescription,drescriptionTwo,experince,indrusty,jobSkills,jobTitle,jobtype,location}= jobDatas;
    


      
  return (
    <div>
         <h1>One post datails </h1>
    </div>
  )
}

export default OnepostDatails
