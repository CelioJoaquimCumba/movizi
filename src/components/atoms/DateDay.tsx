type DateDay = {
    day: string
}
export const DateDay = ({day}: DateDay) => {
    return(
        <div className="flex w-10 h-10 p-1 flex-col justify-center items-center gap-2 flex-shrink-0 rounded border-gray-800 bg-slate-900 hover:border-none hover:bg-slate-800">
            <span className="text-base leading-6 font-normal text-white">{day}</span>
        </div>
    )
}