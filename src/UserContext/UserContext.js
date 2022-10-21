import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUserAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUserAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUserWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, []);

    const handelLogOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, loading, createUserAccount, signUserAccount, signInUserWithGoogle, handelLogOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;