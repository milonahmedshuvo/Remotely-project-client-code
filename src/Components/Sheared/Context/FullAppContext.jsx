import React, { createContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../../Firebase.config';
const auth = getAuth(app);
export const createContextUser =  createContext()


const FullAppContext = ({children}) => {
      const [user, setUser]= useState({city: "Dhaka, Bangladesh"})



      const newUserCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const userSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
      }
      
      const info ={user, newUserCreate,  userSingIn}
  return (
    <div>
       <createContextUser.Provider value={info}>
            {children}
        </createContextUser.Provider>     
    </div>
  )
}

export default FullAppContext
