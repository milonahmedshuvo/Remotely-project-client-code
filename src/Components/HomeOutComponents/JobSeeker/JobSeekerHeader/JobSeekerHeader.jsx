import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaUserFriends, FaBell, FaIdCard, FaMoneyCheck, FaHome } from 'react-icons/fa';






const JobSeekerHeader = () => {
    


  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52">
          
        {/* { manuItem} */}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">Remotely</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        
      {/* { manuItem} */}
  
      
      </ul>
    </div>
    <div className="navbar-end  mr-2 md:mr-5 lg:mr-32 ">
    


       <div className='flex items-center '>


          <div className='flex flex-col items-center'>
              <p><FaHome></FaHome> </p>
              <p>Home</p>
          </div>

          <div className='flex flex-col items-center'>
              <p><FaUserFriends></FaUserFriends> </p>
              <p>My Network</p>
          </div>


          <div className='flex flex-col items-center'>
              <p><FaUserFriends></FaUserFriends> </p>
              <p>ePortfolio</p>
          </div>


          <div className='flex flex-col items-center'>
              <p><FaUserFriends></FaUserFriends> </p>
              <p>Messaging</p>
          </div>


          <div className='flex flex-col items-center'>
              <p><FaBell></FaBell> </p>
              <p>Notifications</p>
          </div>





       </div>
         

      
      {/* Me and Work  */}

      <div  className='border border-red-500  flex justify-between items-center'>

          <div className='flex flex-col items-center px-4 lg:px-7  border-green-500 border-r-2 '>
               <img
                className='rounded-full h-10 w-10 ' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU" alt="" />

               <p>Me</p>
          </div>


          <div className='flex flex-col items-center px-4 lg:px-7' >
             <h1 className='text-xl'> <FaUserAlt></FaUserAlt> </h1>
             <p className='font-medium mt-1'>Work</p>
          </div>

      </div>
      
    </div>
  </div>
  )
}

export default JobSeekerHeader
