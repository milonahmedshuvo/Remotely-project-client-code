import React from 'react'
import Lottie from "lottie-react";
import loadingAnimation from '../../image/loading.json'
const Loading = () => {


  
  return (
    <div className='flex justify-center'>
       <Lottie className='' animationData={loadingAnimation} loop={true} />  
    </div>
  )
}

export default Loading
