import React from 'react'
import JobSeekerHeader from '../JobSeekerHeader/JobSeekerHeader'
import { Outlet } from 'react-router-dom'


const JobSeekerLayout = () => {
  return (
    <div>
        <JobSeekerHeader></JobSeekerHeader>
        <h1>Leyout job seeker main </h1>  
        <Outlet></Outlet>    
    </div>
  )
}

export default JobSeekerLayout
