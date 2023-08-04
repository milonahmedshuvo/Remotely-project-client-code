import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createContextUser } from '../Context/FullAppContext'
import { toast } from 'react-hot-toast'
import Loading from '../Loading'
import rem from "../../../image/logo.png"
import { useQuery } from '@tanstack/react-query'
import useAdmin from '../../Hooks/useAdmin'
import uesJobseeker from '../../Hooks/useJobseeker'
import useEmployer from '../../Hooks/useEmployer'


const Navber1 = () => {
      const {userSingOut,loading, user}= useContext(createContextUser)
      if(loading){
        return <Loading></Loading>
      }
    
      


     const {data:alluserinfoOneData={}} = useQuery({
      queryKey:["alluserinfoOneData", user?.email],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/alluserinfoOneData?email=${user?.email}`)
        const data= await res.json()
        return data
      }
     })

      const {image} = alluserinfoOneData

    
      

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

     

      const [isAdmin] = useAdmin(user?.email)
      const [isJobseeker] = uesJobseeker(user?.email)
      const [isEmployer] = useEmployer(user?.email)




    const manuItem = <>
     <Link to="/" className='text-lg font-medium  ml-5 text-[#FFFFFF] '>Home</Link> 
     <Link to="/findjobs" className='text-lg font-medium  ml-5 text-[#FFFFFF]'>Find Jobs</Link> 
     <Link to="/sixcompany" className='text-lg font-medium  ml-5 text-[#FFFFFF]'>Browse Companies</Link>  
     <Link to="/howcanhelp" className='text-lg font-medium  ml-5 text-[#FFFFFF]'>Help Center</Link>
       

      {
        isEmployer &&  <Link to='/employer' className='font-medium  ml-2 text-lg text-[#FFFFFF]  mr-3'>Dashbord</Link>
      }

     {
        isJobseeker &&  <Link to='/jobSeeker' className=' font-medium  ml-2 text-lg text-[#FFFFFF]   mr-3'>Dashbord</Link>
      }
      {
        isAdmin &&  <Link to='/admin' className=' font-medium  ml-2 text-lg text-[#FFFFFF]  mr-3'>Dashbord</Link>
      }
</>


  return (
    <div className="navbar bg-[#0983C0] sticky top-0 z-30 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52">
        
      { manuItem}
      
      </ul>
    </div>
    {/* <a className=" text-[#C1FF72] font-serif text-2xl font-semibold uppercase">Remotely</a> */}
   

    <img src="https://softzino.com/images/icon-white.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    { manuItem}

    
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}

    {user?.email?  
    <Link to="/" onClick={handleSingOut} className='uppercase font-medium text-[#FFFFFF] text'>SingOut</Link>  : 
    <Link to="/login" className='uppercase text-[#FFFFFF] mr-3 text font-medium'>Login</Link>
    
      }

      
<img className="rounded-full mr-2 ml-2 h-10 w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sl3kmWLEHd_w4_ez9nh-2BYZcSQ8GviTaA&usqp=CAU" alt="" />

      
    
  
    

  </div>
</div>
  )
}

export default Navber1
