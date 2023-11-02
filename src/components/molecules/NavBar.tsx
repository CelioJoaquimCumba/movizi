import { Link } from "react-router-dom"
import { Button } from "../atoms/Button"
import { NavItem } from "../atoms/NavItem"

export type NavBar = {
    signed? : boolean
}

export const NavBar = ({signed = true}: NavBar) => {
    return(
        <div className="flex py-4 px-2 justify-between items-center bg-gradient-to-t from-black/50  to-black w-full">
            <div className="flex items-center gap-4">
                <Link to={"/"} className="text-base leading-6 font-black text-white">MOVIZI</Link>
                <div className="hidden md:flex items-center gap-1">
                    <NavItem link="/" text={"Home"}/>
                    <NavItem link="/tickets" text={"Tickets"}/>
                </div>
            </div>
                <svg className="flex md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.6001 5.99999C3.6001 5.68173 3.72653 5.3765 3.95157 5.15146C4.17661 4.92642 4.48184 4.79999 4.8001 4.79999H19.2001C19.5184 4.79999 19.8236 4.92642 20.0486 5.15146C20.2737 5.3765 20.4001 5.68173 20.4001 5.99999C20.4001 6.31825 20.2737 6.62347 20.0486 6.84852C19.8236 7.07356 19.5184 7.19999 19.2001 7.19999H4.8001C4.48184 7.19999 4.17661 7.07356 3.95157 6.84852C3.72653 6.62347 3.6001 6.31825 3.6001 5.99999ZM3.6001 12C3.6001 11.6817 3.72653 11.3765 3.95157 11.1515C4.17661 10.9264 4.48184 10.8 4.8001 10.8H19.2001C19.5184 10.8 19.8236 10.9264 20.0486 11.1515C20.2737 11.3765 20.4001 11.6817 20.4001 12C20.4001 12.3182 20.2737 12.6235 20.0486 12.8485C19.8236 13.0736 19.5184 13.2 19.2001 13.2H4.8001C4.48184 13.2 4.17661 13.0736 3.95157 12.8485C3.72653 12.6235 3.6001 12.3182 3.6001 12ZM3.6001 18C3.6001 17.6817 3.72653 17.3765 3.95157 17.1515C4.17661 16.9264 4.48184 16.8 4.8001 16.8H19.2001C19.5184 16.8 19.8236 16.9264 20.0486 17.1515C20.2737 17.3765 20.4001 17.6817 20.4001 18C20.4001 18.3182 20.2737 18.6235 20.0486 18.8485C19.8236 19.0736 19.5184 19.2 19.2001 19.2H4.8001C4.48184 19.2 4.17661 19.0736 3.95157 18.8485C3.72653 18.6235 3.6001 18.3182 3.6001 18Z" fill="white"/>
                </svg>
                    { signed ?
                        <div className="hidden md:flex h-full">
                            {/* <NavItem type="profile" text={"profile"}/> */}
                            <Button text={"Sign out"}/>
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