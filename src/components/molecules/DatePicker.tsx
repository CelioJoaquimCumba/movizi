import { useState } from "react"
import { getDaysOfMonth } from "../../utils/getDaysOfMonth"
import { DateDay } from "../atoms/DateDay"

const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
export type DatePicker = {
    startDate: {day: number, month:number, year:number}
    endDate:{day: number, month:number, year:number}
    updateDate : (date:string) => void
}

export const DatePicker = ({startDate,endDate, updateDate}:DatePicker) => {
    const date = new Date()
    const [ month, setMonth ] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())
    const [days, setDays]  = useState(getDaysOfMonth(year,month))
    const [selectedDate, setSelectedDate] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    let startAt = 0
    if(startDate.year === year){
        if (startDate.month === month) {
            startAt = startDate.day
        } else if (startDate.month > month) {
            startAt = 32
        }else {
            startAt = 0
        }
    } else if (startDate.year > year ) {
        startAt = 32
    } else {
        startAt = 0
    }
    let endAt = 32
    if(endDate.year === year){
        if (endDate.month === month) {
            endAt = endDate.day
        }
        else if (endDate.month > month) {
            endAt = 32
        }
        else {
            endAt = 0
        }
    } else if (endDate.year < year ) {
        endAt = 0
    } else {
        endAt = 32
    }

    const handleDateRange = (isForward: boolean) => {
        let newMonth = month
        let newYear = year
        if( !isForward ) {
            if (newMonth === 0) {
                setMonth(11)
                newYear = year -1
                setYear(newYear)
            } else {
                newMonth = month - 1
                setMonth(newMonth)
            }
        } else {
            if(month === 11) {
                setMonth(0)
                newYear = year + 1
                setYear(newYear)
            } else {
                newMonth = month + 1
                setMonth(newMonth)
            }
        }
        setDays(()=>getDaysOfMonth(year,newMonth))
    }
    const handleSelect = (day: string) => {
        setSelectedDate(`${day}-${monthsOfYear[month]}-${year}`)
        updateDate(`${day}-${monthsOfYear[month]}-${year}`)
        handleOpen()
    }
    const handleOpen = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return(
        <div className={`flex py-4 px-2 flex-col items-center gap-2 rounded border-2 border-slate-700 bg-black ${ !isOpen && "hover:bg-slate-800"} w-full`} >
            <div className="flex justify-content items-center gap-2 self-stretch" onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base leading-6 font-normal text-white flex-grow">{selectedDate? selectedDate : "Select Date"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transform transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
            }`}>
                    <path d="M5 15L12 8L19 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {isOpen &&<div className={`flex flex-col gap-2 items-center self-stretch `}>
                <div className="flex justify-center items-start gap-2 self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="hover:bg-slate-800 rounded" onClick={()=>handleDateRange(false)}>
                        <path d="M12.4998 15.8333L6.6665 10L12.4998 4.16667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base leading-6 font-normal text-white">{monthsOfYear[month]} {year}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="hover:bg-slate-800 rounded" onClick={()=>handleDateRange(true)}>
                        <path d="M7.5 4.16667L13.3333 10L7.5 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="flex flex-col items-start gap-1">
                    {days.map((array, index) => {
                        return(
                            <div key={index} className="flex items-start gap-2">
                                {array.map((day)=> {
                                    const disable = !(startAt <= Number(day) && endAt >= Number(day))
                                    return(
                                        day && <DateDay disabled={disable} onClick={()=>handleSelect(day)} key={day} day={day}/>
                                    )
                                    })}
                            </div>
                        )
                    })}
                </div>
            </div>}

        </div>
    )
}