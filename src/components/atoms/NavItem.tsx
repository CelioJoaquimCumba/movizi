import { Link } from "react-router-dom"

type NavItem = {
    text: string,
    type?: "default" | "profile",
    link: string
}
export const NavItem = ({text,link}: NavItem) => {
    return (
        <div className="flex py-1 px-2 justify-center items-center gap-2 rounded bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-100 text-white active:text-slate-800 cursor-pointer">
            <Link to={link} className="text-sm leading-5 font-normal">
                {text}
            </Link>
        </div>
    )
}