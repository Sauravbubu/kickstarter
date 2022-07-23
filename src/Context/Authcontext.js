import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/FIrebase";
import { useNavigate  } from "react-router-dom";
export const  AuthContext=createContext()


export default function AuthContextProvider({children}){
    const navigate=useNavigate()
    const [user, setuser] = useState({});
    const [state, setstate] = useState(0);
    function handleLogin(){
        // console.log("authin");
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider)
    }
    const Logout =()=>{
signOut(auth)
setuser({})
    }
    useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setuser(currentUser)
        // console.log("Cuser",currentUser);
        navigate("/home")
    })
        return () => {
            unsubscribe()
        };
    }, []);
    // console.log("user",user);
    
    return <AuthContext.Provider value={{user,handleLogin,Logout}}>{children}</AuthContext.Provider>
}
export const UserAuth=()=>{
    return  useContext(AuthContext)
}
