import { Ticket } from "../../models/Ticket"
import { MovieInfo } from "../atoms/MovieInfo"

type Tickets = {
    heading: string,
    tickets: Ticket[]
}

export const Tickets = ({heading, tickets}: Tickets) => {
    return(
        <div className="flex flex-col gap-2 items-start self-stretch w-full">
            <h1 className="text-xl leading-7 font-semibold text-white">{heading}</h1>
            {tickets.map((ticket) => {
                return(
                    <MovieInfo {...ticket}/>
                )
            })}

        </div>
    )
}