import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navber1 = () => {

    const manuItem = <>

    
    <li> <Link to="/" className='text-lg'>Home</Link> </li>
    <li> <Link to="/" className='text-lg'>Find Jobs</Link> </li>
    <li> <Link to="/sixcompany" className='text-lg'>Browse Companies</Link> </li>
    <li> <Link to="/" className='text-lg'>Career Advice</Link> </li>
    <li> <Link to="/howcanhelp" className='text-lg'>Help Center</Link> </li>
    
    
    
   
</>


  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
      { manuItem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Remotely</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    { manuItem}

    
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}

    <Link to='/register'>Register</Link>
    <Link to="/login">Login</Link>
  </div>
</div>
  )
}

export default Navber1
