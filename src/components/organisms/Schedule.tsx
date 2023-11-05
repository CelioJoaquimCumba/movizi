import { SchedulePicker } from "../molecules/SchedulePicker"

export const Schedule = ({schedules, updateSchedule} : SchedulePicker) => {
    return(
        <div className="flex flex-col items-start gap-4 w-full">
            <span className="text-xl leading-7 font-semibold text-white">Schedule</span>
            <SchedulePicker updateSchedule={updateSchedule} schedules={schedules}/>

        </div>
    )
}