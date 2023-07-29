import React from 'react'
import EmployerHeader from '../EmployerHeader/EmployerHeader'
import { Outlet } from 'react-router-dom'

const EmployerLayout = () => {


  return (
    <div>
       <EmployerHeader></EmployerHeader>
        <Outlet></Outlet>  
    </div>
  )
}

export default EmployerLayout
