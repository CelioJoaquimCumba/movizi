import { Link } from "react-router-dom"
import { Button } from "../atoms/Button"
import { NavItem } from "../atoms/NavItem"
import { Menu } from "../atoms/Menu"
import { useAuth } from "../../firebase/auth"

export type NavBar = {
    signed? : boolean
}

export const NavBar = ({signed = true}: NavBar) => {
    const { authUser, signOut } = useAuth()
    return(
        <div className="flex py-4 px-2 justify-between items-center bg-gradient-to-t from-black/50  to-black w-full">
            <div className="flex items-center gap-4">
                <Link to={"/"} className="text-base leading-6 font-black text-white">MOVIZI</Link>
                <div className="hidden md:flex items-center gap-1">
                    <NavItem link="/" text={"Home"}/>
                    <NavItem link="/tickets" text={"Tickets"}/>
                </div>
            </div>
            <div>
                <Menu/>
                
            </div>
            { signed ?
                <div className="hidden md:flex h-full gap-2 items-center">
                    {/* <NavItem type="profile" text={"profile"}/> */}
                    <span className=" text-sm leading-5 font-normal text-white">{authUser?.email}</span>
                    <Button text={"Sign out"} onClick={signOut}/>
                </div>
                :
                <div className="hidden md:flex items-center gap-2">
                    <Button text={"Sign In"}/>
                    <Button  text={"Register"}/>
                </div>
            }
        </div>
    )
}