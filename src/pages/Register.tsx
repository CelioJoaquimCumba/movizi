import { Button } from "../components/atoms/Button"
import Input from "../components/atoms/Input"
import MovieQuote from "../components/atoms/MovieQuote"

export const Register = () => {
    return(
        <div className="flex flex-col items-center gap-2 w-full h-full bg-black">
            <div className="flex py-2 px-4 items-center gap-2 self-stretch">
                <span className="text-lg leading-7 font-black text-white flex-grow">MOVIZI</span>
            </div>
            <div className="py-16 px-8 md:px-16 flex justify-center items-start gap-8 flex-grow self-stretch">

                <div className="flex  flex-col items-center gap-8 flex-grow self-stretch md:w-1/2 ">
                    <div className="flex flex-col justify-center items-center gap-2 self-stretch">
                        <h1 className="text-white text-xl leading-7 font-semibold self-stretch">Sign Up</h1>
                        <p className="text-base leading-6 font-normal text-white w-full">Welcome! Please provide the following information to create your account</p>
                    </div>
                    <form className="flex flex-col justify-center items-center gap-4 self-stretch">
                        <div className="flex justify-start items-center gap-2 self-stretch ">
                            <Input label={"First Name"} placeholder={"John"}/>
                            <Input label={"First Name"} placeholder={"John"}/>
                        </div>
                        <Input type="email" label={"Email"} placeholder={"name@domain.com"}/>
                        <Input type="password" label={"Password"} placeholder={"********"}/>
                        <Button style={{width:"100%"}} text={"Register"}/>
                        <Button style={{width:"100%"}} type="google-auth" text={"Register with Google"}/>
                        <div className="flex justify-center items-center gap-2 self-stretch">
                            <span className="text-sm leading-5 font-normal text-white">Already have an account?</span>
                            <span className="text-sm leading-5 font-normal text-blue-400">Sign in</span>
                        </div>
                    </form>
                </div>
                <div className="hidden md:flex px-8 flex-col items-center gap-8 flex-grow self-stretch w-1/2">
                    <MovieQuote/>

                </div>

            </div>
        </div>
    )
}