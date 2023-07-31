import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

  return (
    <div>
          <AdminHeader></AdminHeader>
          <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout

    