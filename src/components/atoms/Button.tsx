export type Button = {
    type? : "default" | "google-auth"
    text: string,
    background?: string
} & React.HTMLProps<HTMLButtonElement>

export const Button = ({type= "default", text,background, ...props} : Button) => {
    const bg = type === "default" ? {
        default : background ?background:"bg-slate-500",
        hover: "bg-slate-800",
        active: "bg-slate-900"
    } : {
        default : "bg-black",
        hover: "bg-slate-900",
        active: "bg-slate-800"
    }
    return (
        <button className={`flex items-center justify-center text-base leading-6 font-medium gap-2.5 py-2 px-4 rounded-lg text-white ${bg.default}  hover:${bg.hover} active:${bg.active}${type==="google-auth" && " border-2 border-white"}`} {...props}>
            {type === "google-auth" && 
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1418_5120)">
                    <path d="M19.9895 10.1871C19.9895 9.36773 19.9214 8.7698 19.7742 8.14972H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.497L16.9527 17.5174C18.879 15.779 19.9895 13.2211 19.9895 10.1871Z" fill="#4285F4"/>
                    <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50242 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.2106 19.9313 10.1993 19.9313Z" fill="#34A853"/>
                    <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27908 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08876 5.49214C0.397577 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397577 13.0882 1.08876 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
                    <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33718L17.0207 2.59107C15.253 0.985497 12.9527 0 10.1993 0C6.21061 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59184 7.50243 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
                </g>
                <defs>
                    <clipPath id="clip0_1418_5120">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            }
            {text}
        </button>
    )
}