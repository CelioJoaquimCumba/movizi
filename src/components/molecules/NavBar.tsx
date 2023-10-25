import { NavItem } from "../atoms/NavItem"

export type NavBar = {
    device: "phone" | "laptop"
    signed : boolean
}

export const NavBar = () => {
    return(
        <div className="flex py-4 px-2 justify-between items-center bg-gradient-to-t from-black/50  to-black w-full">
            <div className="flex items-center gap-4">
                <span className="text-base leading-6 font-black text-white">MOVIZI</span>
                <div className="flex items-center gap-1">
                    <NavItem text={"Home"}/>
                    <NavItem text={"Tickets"}/>
                </div>
            </div>
            <NavItem type="profile" text={"profile"}/>
        </div>
    )
}