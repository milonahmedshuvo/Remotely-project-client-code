import React from 'react'
import { toast } from 'react-hot-toast';

const Jobpost = ({job, refetch}) => {
      console.log("jobdd", job)
      const {companyName,drescription,drescriptionTwo, jobSkills,location,jobTitle,_id}= job;
 
      const handlePostDelet = (id) => {
        fetch(`http://localhost:5000/postDelete/${id}`,{
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data)=> {
            console.log(data)
            toast.success("succesfull Delete")
            refetch()
        })
        .catch((er)=> {
            console.log(er)
            toast.error("Field delete")
        })
      }
  return (
    <div>
           <div className='mt-16'>

             <div>
                <p className='text-2xl'>{jobTitle}</p>
                <p className='text-xl'>{companyName}</p>
                 <p className='text-xl'>{location}</p>
             </div>
                  
                  <p className='mt-4'>{drescription}</p>
                  <p>{drescriptionTwo}</p>

                  <div className='mt-3'>
                    <button
                    onClick={() => handlePostDelet(_id)}
                    className='btn btn-error btn-sm '>Delete</button>
                  </div>
           </div>
    </div>
  )
}

export default Jobpost


