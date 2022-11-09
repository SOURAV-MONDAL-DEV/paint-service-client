import React, { children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
    const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        })
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        providerLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;