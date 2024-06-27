import React, { useState,createContext,useContext, useEffect } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
export const AuthContext = createContext({
    authStatus : false,
    user : "", 
    handleLogin : () => {},
    handleRegister : () => {},
    handleLogout : () => {},
})

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)

  const handleLogin = async (email, password,callback) => {
    try {
     const userCredentials = await signInWithEmailAndPassword(auth, email, password);
     const user = userCredentials.user 
     setUser(user);   
     setAuthStatus(true);
     if (callback) callback()  
    } 
    catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleRegister = async (email, password,callback) => {
    try {
     const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
     const user = userCredentials.user
     setUser(user);
     setAuthStatus(true)
     if (callback) callback()
    } catch (error) {
      console.error("Register error: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setAuthStatus(false);
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  useEffect(() => {
   const unsubscribe = () => {
      onAuthStateChanged(auth, Curruser => {
        if(Curruser){
        setUser(Curruser);
        setAuthStatus(true);
      } else {
       setUser(null);
       setAuthStatus(false);
      }
       })
       return unsubscribe;
  }
},[]);

   return (
    <AuthContext.Provider value={{authStatus, user, handleLogin, handleRegister, handleLogout}}>
    {children}
    </AuthContext.Provider>
   )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;