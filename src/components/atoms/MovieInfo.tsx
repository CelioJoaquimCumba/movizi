import { Ticket } from "../../models/Ticket"

type MovieInfo = {
    date: string,
    schedule: string,
    title: string,
    seats: string,
    image: string
}

export const MovieInfo = ({date, schedule, movie, seats, image}: Ticket) => {
    return(
        <div className="flex p-4 justify-center items-start gap-4 rounded-xl bg-slate-900 hover:bg-slate-800 w-full">
            <img className="rounded-xl object-cover w-32 aspect-square" src={image} alt={`${movie} ticket`}/>
            <div className="flex flex-col items-start gap-4 flex-grow">
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">{movie}</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">{seats.map(seat=>seat)} seats</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">Date: {date}</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">Schedule: {schedule}</span>
            </div>
        </div>
    )
}