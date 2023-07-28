import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../../../Firebase.config';
const auth = getAuth(app);
export const createContextUser =  createContext()


const FullAppContext = ({children}) => {
      const [user, setUser]= useState({city: "Dhaka, Bangladesh"})
      const [loading, setLoading] = useState(true)
      const [searchData, setSearchData] = useState([])
      console.log("seeddddddddddd", searchData)   

      const newUserCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)        
      }

      const userSingIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      const userSingOut =() => {
        setLoading(true)
        return signOut(auth)
      }  



       useEffect(()=> {
            const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser)
              setLoading(false)
              console.log(currentUser)
            })

            return ()=> unsubcribe()
       },[])



       
      
      const info ={user, newUserCreate,  userSingIn, userSingOut, loading, setSearchData,searchData }
  return (
    <div>
       <createContextUser.Provider value={info}>
            {children}
        </createContextUser.Provider>     
    </div>
  )
}

export default FullAppContext
