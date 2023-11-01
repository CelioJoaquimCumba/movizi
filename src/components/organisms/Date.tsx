import { DatePicker } from "../molecules/DatePicker"


export const Date = ({startDate, endDate} : DatePicker) => {
    return(
        <div className="flex flex-col items-start gap-4 w-full">
            <span className="text-xl leading-7 font-semibold text-white">Date</span>
            <DatePicker startDate={startDate} endDate={endDate}/>
        </div>
    )
}