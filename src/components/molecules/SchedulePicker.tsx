import { useState } from "react"
import { ScheduleTime } from "../atoms/ScheduleTime"

export type SchedulePicker = {
    schedules : ScheduleTime[]
    updateSchedule: (schedule: string) => void
}

export const SchedulePicker = ({schedules, updateSchedule}: SchedulePicker) => {
    const [selected, setSelected] = useState<ScheduleTime>()
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(isOpen => !isOpen)
    const handleSelected = (index: number) => {
        handleOpen()
        setSelected(schedules[index])
        updateSchedule(schedules[index].startTime + "- " + schedules[index].endTime)
    }
    return(
        <div className="flex flex-col  items-center rounded border-2 border-slate-700 bg-black text-white  w-full">
            <div className="flex justify-center items-center flex-grow w-full hover:bg-slate-800 px-2" onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex py-4 px-2 items-center gap-2 rounded   w-full">
                    <span className="text-base leading-6 font-normal text-white">{selected?.startTime} - {selected?.endTime}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className={`transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                }`}>
                    <path d="M22.1668 10.5L14.0002 18.6667L5.8335 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {/* main */}
            {isOpen && 
                <div className="flex p-2 flex-col justify-center items-start gap-1 self-stretch bg-black">
                    {schedules.map((schedule, index)=> <ScheduleTime key={schedule.startTime} onClick={()=>handleSelected(index)} startTime={schedule.startTime} endTime={schedule.endTime}/>)}
                </div>
            }
        </div>
    )
}