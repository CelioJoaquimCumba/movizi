type BackButton =  React.HTMLProps<HTMLButtonElement>

export const BackButton = ({...props}) => {
    return (
        <button className="flex p-1 items-start gap-2 rounded-full hover:bg-white hover:bg-opacity-10" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M13.3333 25.3334L4 16M4 16L13.3333 6.66669M4 16H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}