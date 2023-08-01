import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createContextUser } from '../Context/FullAppContext'
import { toast } from 'react-hot-toast'
import useEmployer from '../../Hooks/useEmployer'
import Loading from '../Loading'
import useJobseeker from '../../Hooks/useJobseeker'
import useAdmin from '../../Hooks/useAdmin'

const Navber1 = () => {
      const {userSingOut,loading, user}= useContext(createContextUser)
      if(loading){
        return <Loading></Loading>
      }
      const [isEmployer] = useEmployer(user?.email)
      const [jobSeeker] = useJobseeker(user?.email)
      const [isAdmin] = useAdmin(user?.email)
      
      const handleSingOut =()=> {
         userSingOut()
         .then((res)=>{
          toast.success("succesful user SingOut..!!")
         })
         .catch((err)=> {
          console.log(err)
          toast.error("Filed user SingOut..!!")
         })
      }




    const manuItem = <>
     <Link to="/" className='text-lg font-medium uppercase ml-5 text-[#0983C0] '>Home</Link> 
     <Link to="/findjobs" className='text-lg font-medium uppercase ml-5 text-[#0983C0]'>Find Jobs</Link> 
     <Link to="/sixcompany" className='text-lg font-medium uppercase ml-5 text-[#0983C0]'>Browse Companies</Link>  
     <Link to="/howcanhelp" className='text-lg font-medium uppercase ml-5 text-[#0983C0]'>Help Center</Link>
       

      {
        isEmployer &&  <Link to='/employer' className='uppercase font-medium  ml-2 text-lg text-[#0983C0]  mr-3'>Dashbord</Link>
      }

     {
        jobSeeker &&  <Link to='/jobSeeker' className='uppercase font-medium  ml-2 text-lg text-[#0983C0]  mr-3'>Dashbord</Link>
      }
      {
        isAdmin &&  <Link to='/admin' className='uppercase font-medium  ml-2 text-lg text-[#0983C0]  mr-3'>Dashbord</Link>
      }
</>


  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52">
        
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

    {user?.email?  
    <Link to="/" onClick={handleSingOut} className='uppercase font-medium text-[#0983C0] text'>SingOut</Link>  : 
    <Link to="/login" className='uppercase text-[#0983C0] mr-3 text font-medium'>Login</Link>
    
      }

      
    
  {/* <Link to='/register' className='uppercase text-[#0983C0]  mr-3'>Register</Link> */}
    

  </div>
</div>
  )
}

export default Navber1
