import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

      const userSingOut =() => {
        return signOut(auth)
      }  



       useEffect(()=> {
            const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser)
              console.log(currentUser)
            })

            return ()=> unsubcribe()
       },[])



       
      
      const info ={user, newUserCreate,  userSingIn, userSingOut}
  return (
    <div>
       <createContextUser.Provider value={info}>
            {children}
        </createContextUser.Provider>     
    </div>
  )
}

export default FullAppContext
