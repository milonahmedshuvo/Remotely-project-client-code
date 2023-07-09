import React, { createContext, useState } from 'react'
export const createContextUser =  createContext()



const FullAppContext = ({children}) => {
      const [user, setUser]= useState({city: "Dhaka, Bangladesh"})

      
      const info ={user}
  return (
    <div>
       <createContextUser.Provider value={info}>
            {children}
        </createContextUser.Provider>     
    </div>
  )
}

export default FullAppContext
