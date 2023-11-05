import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";


const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
})
export const useFirebaseAuth = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [authUser, setAuthUser ] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const clear = () => {
        setAuthUser(null)
        setIsLoading(false)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authStateChanged = async (user:any) => {
        setIsLoading(true)
        if (!user) {
            clear()
            return
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        })
        setIsLoading(false)
    }
    const signOut = () => authSignOut(auth).then(()=> {
        clear()
    })

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, authStateChanged )
        return () => unsubscribe()
    },[])

    return {
        authUser,
        isLoading,
        signOut
    }
}
export const AuthUserProvider = ({children}:{children:React.ReactNode}) => {
    const auth = useFirebaseAuth()
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)