import React, { createContext, useContext, useState } from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/FIrebase";
export const  AuthContext=createContext()


export default function AuthContextProvider({children}){
    const [state, setstate] = useState(0);
    function handleLogin(){
        console.log("authin");
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider)
    }
    
    return <AuthContext.Provider value={{handleLogin}}>{children}</AuthContext.Provider>
}
export const UserAuth=()=>{
    return  useContext(AuthContext)
}
