import { createContext, useContext } from "react";
import {GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from 'firebase/auth'
import { auth } from "../../firebase";
export const Authcontext=createContext()

export const AuthcontextProvider=({child})=>{

const signIn=()=>{

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
}
    return <Authcontext.Provider value={{signIn}}>{child}</Authcontext.Provider>
}





