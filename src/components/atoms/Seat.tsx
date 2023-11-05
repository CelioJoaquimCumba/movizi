import { useState } from "react"

type Seat = {
    seat: string,
    status : "available" | "occupied" | "selected",
    updateSeats: (seat: string) => void
}
export const Seat = ({seat,status,updateSeats}: Seat) =>{
    let bg = ""
    let text = ""
    const [ seatStatus, setSeatStatus ] = useState(status)
    switch(seatStatus){
        case "available":
            bg = "bg-slate-900"
            text = "text-white"
            break
        case "selected":
            bg = "bg-slate-50"
            text = "text-slate-900"
            break
        case "occupied":
            bg = "bg-slate-600"
            text = "text-slate-600"
            break
        default:
            break
    }
    const handleClick = () => {
        if(seatStatus === "occupied") return
        setSeatStatus(seatStatus === "available" ? "selected" :  "available") 
        updateSeats(seat)
    }
    return (
    <button onClick={handleClick} className={`flex w-10 h-10 flex-col justify-center items-center gap-2 flex-shrink-0 rounded border-gray-800 ${bg} ${seatStatus === "available" ? "hover:bg-slate-800" : seatStatus == "selected" ? "hover:bg-slate-200" : "" } ${text} ${ seatStatus === "occupied" && "cursor-default"}` }>
        {seat}
    </button>
    )
}