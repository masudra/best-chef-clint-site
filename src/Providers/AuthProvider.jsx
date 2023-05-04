import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


 export const AuthContex= createContext("")

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]= useState("")
    const [loding,setLoding]= useState(false)

    const creatUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser= (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,curentUser =>{
            console.log(curentUser)
            setUser(curentUser)
            setLoding(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loding,
        creatUser,
        loginUser,
        logOut

    }
    

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;