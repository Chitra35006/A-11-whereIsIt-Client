import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const[user, setUser] = useState(null);

    const[loading, setLoading] = useState(true);

    //createUser
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //signInUser
    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //sign up with pop up
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    //updateUserProfile
    const updateUserProfile =(updateData)=>{
        return updateProfile(auth.currentUser,updateData);
    }

    //LogOut
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('state update',currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        user,
        setUser,
        loading,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        logOut


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;