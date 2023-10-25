type DateDay = {
    day: string,
    onClick?: (day:string)=>void
}
export const DateDay = ({day, onClick}: DateDay) => {
    const handleClick = () => {
        onClick && onClick(day)
    }
    return(
        <div onClick={handleClick} className="flex md:w-10 md:h-10 w-8 h-8 p-1 flex-col justify-center items-center gap-2 flex-shrink-0 rounded border-gray-800 bg-slate-900 hover:border-none hover:bg-slate-800 active:bg-slate-900 hover:cursor-pointer">
            <span className="text-base leading-6 font-normal text-white">{day}</span>
        </div>
    )
}