import React from 'react'
import Navber1 from './Navber/Navber1'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navber1></Navber1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
