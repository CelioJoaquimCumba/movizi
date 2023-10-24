export type ScheduleTime = {
    startTime : string,
    endTime: string
}

export const ScheduleTime = ({startTime, endTime}: ScheduleTime) => {
    return(
        <div className="flex py-4 px-2 items-center gap-2 rounded bg-black hover:bg-slate-800 w-full">
            <span className="text-base leading-6 font-normal text-white">{startTime} - {endTime}</span>
        </div>
    )
}