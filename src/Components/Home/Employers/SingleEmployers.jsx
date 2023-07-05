import React from 'react'


const SingleEmployers = ({employer}) => {
    console.log(employer)
    const {title, dres, image}= employer



  return (
    <div>
           <div className='border border-[#BEE0FB] rounded-2xl py-24 h-[290px] relative bg-[#FFFFFF]  px-7  mt-16 md:mt-0'>

              <div>
                  <p className='text-center text-lg mb-3 font-bold'>{title}</p>
                   <p className='text-center pb-10 text-[#303952cc]'>{dres}</p>
              </div>


              <div className='absolute top-[-70px] right-[100px] md:right-[10px]'>
                  <img src={image} alt="" />
              </div>
               
           </div>



    </div>
  )
}

export default SingleEmployers
