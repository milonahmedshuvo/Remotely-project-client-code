import React from 'react'
import Navber1 from './Navber/Navber1'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navber1></Navber1>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
