import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from "./firebase";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const currentUser = auth.onAuthStateChanged((authUser) => {
            setUser(authUser)
        })
        return currentUser
    }, [])

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signout(auth) {
        return signOut(auth)
    }
   
    return (
        <AuthContext.Provider value={{ user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    )
}
