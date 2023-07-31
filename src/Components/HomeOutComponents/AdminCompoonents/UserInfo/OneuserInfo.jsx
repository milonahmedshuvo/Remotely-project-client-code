import React from 'react'

const OneuserInfo = ({user}) => {
      console.log(user)
      const {image,userIdentity,userName} = user;

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 my-4 '>
         <img
          className="rounded-full  h-10 w-10 mx-auto "
          src={image} alt="" />

        <div>
        <p className='text-center'>{userName}</p>
        </div>

          
          <div>
          <p className='text-center'>{userIdentity}</p>
          </div>

          <div className='mx-auto'>
          <button className="btn btn-sm btn-error">Delete</button>
          </div>
    </div>
  )
}

export default OneuserInfo
