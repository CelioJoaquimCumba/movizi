import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { Button } from "../components/atoms/Button"
// import Input from "../components/atoms/Input"
import MovieQuote from "../components/atoms/MovieQuote"
import { auth } from "../firebase/firebase"
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useState } from "react"

const   REDIRECT_PAGE = "/"

const uiConfig = {
    signInFlow : 'redirect',
    signInSuccessUrl: REDIRECT_PAGE,
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
    ]
}

export const Login = () => {
    const [login, setLogin] = useState(false)

    const handleLogin = () => {
        setLogin(true)
    }
    return(
        <div className="flex flex-col items-center gap-2 w-full h-full min-h-screen bg-black">
            <div className="flex py-2 px-4 items-center gap-2 self-stretch">
                <span className="text-lg leading-7 font-black text-white flex-grow">MOVIZI</span>
            </div>
            <div className="py-16 px-8 md:px-16 flex justify-center items-start gap-8 flex-grow self-stretch">
            <dialog className="flex bg-black border-white border-[1px] " open={login} onClose={()=>setLogin(false)}>
                <StyledFireBaseAuth uiConfig={uiConfig} firebaseAuth={auth}></StyledFireBaseAuth>
            </dialog>
                <div className="flex  flex-col items-center gap-8 flex-grow self-stretch md:w-1/2 ">
                    <div className="flex flex-col justify-center items-center gap-2 self-stretch">
                        <h1 className="text-white text-xl leading-7 font-semibold self-stretch">Login</h1>
                        <p className="text-base leading-6 font-normal text-white w-full">Welcome Back! Please enter your credentials</p>
                    </div>
                    <form className="flex flex-col justify-center items-center gap-4 self-stretch" onSubmit={(e)=> e.preventDefault()}>
                        {/* <Input type="email" label={"Email"} placeholder={"name@domain.com"}/>
                        <Input type="password" label={"Password"} placeholder={"********"}/>
                        <Button style={{width:"100%"}} text={"Login"}/> */}
                        <Button style={{width:"100%"}} type="google-auth" text={"Login with Google"} onClick={handleLogin}/>
                        {/* <div className="flex justify-center items-center gap-2 self-stretch">
                            <span className="text-sm leading-5 font-normal text-white">Don't have an account?</span>
                            <span className="text-sm leading-5 font-normal text-blue-400">Sign up</span>
                        </div> */}
                    </form>
                </div>
                <div className="hidden md:flex px-8 flex-col items-center gap-8 flex-grow self-stretch w-1/2">
                    <MovieQuote/>
                </div>

            </div>
        </div>
    )
}