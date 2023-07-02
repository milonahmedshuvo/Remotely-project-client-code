import React from 'react'
import { useLoaderData } from 'react-router-dom'


const ExploreCompany = () => {

    const singleDatailsData = useLoaderData()
    const {address, companyName,companySize,companyType,coverpic,drescription,indrustyType,profilePic,sortAddress,website}= singleDatailsData;
   
  return (
    <div>
       <h1>Explore company: {companyName}</h1>
    </div>
  )
}

export default ExploreCompany
