type NavItem = {
    text: string,
    type?: "default" | "profile"
}
export const NavItem = ({text}: NavItem) => {
    return (
        <div className="flex py-1 px-2 justify-center items-center gap-2 rounded bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-100 text-white active:text-slate-800">
            <span className="text-sm leading-5 font-normal">
                {text}
            </span>
        </div>
    )
}