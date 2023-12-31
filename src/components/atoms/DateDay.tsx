type DateDay = {
    day: string,
    onClick?: (day:string)=>void
    disabled?: boolean
}
export const DateDay = ({day, onClick, disabled =false}: DateDay) => {
    const handleClick = () => {
        !disabled && onClick && onClick(day)
    }
    return(
        <div onClick={handleClick} className={`flex md:w-10 md:h-10 w-8 h-8 p-1 flex-col justify-center items-center gap-2 flex-shrink-0 rounded border-gray-800 ${!disabled ? "bg-slate-900 hover:bg-slate-800 active:bg-slate-900" : "bg-gray-500"}  hover:border-none  hover:cursor-pointer`}>
            <span className={`text-base leading-6 font-normal ${!disabled ? "text-white" : "text-gray-600"}`}>{day}</span>
        </div>
    )
}