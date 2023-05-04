import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';


 export const AuthContex= createContext("")

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]= useState("")

    const creatUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser= (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        user,
        creatUser,
        loginUser

    }
    

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;