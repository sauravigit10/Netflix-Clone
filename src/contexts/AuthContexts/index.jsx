import {auth} from '../../firebase';
import React, {useContext, useEffect,useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
const AuthConext =  React.createContext();

export function useAuth(){
    return React.useContext(AuthConext);
}
export function AuthProvider({children}) {
  const [currentuser, setCurrentUser] = useState(null);   
  const[userLoggedIn, setUserLoggedIn] = useState(false);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,initializeUser);
  return unsubscribe;},[]);
     async function initializeUser(user){
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
     }
     const value={
        currentuser,
        userLoggedIn,
        loading
     }
     return (
        <AuthConext.Provider value={value}>
            {!loading && children}
        </AuthConext.Provider>
     );
}
