import { Ticket } from "../../models/Ticket"
import { MovieInfo } from "../atoms/MovieInfo"

type Tickets = {
    heading: string,
    tickets: Ticket[]
    isLoading: boolean
}

export const Tickets = ({heading, tickets, isLoading}: Tickets) => {
    return(
        <div className="flex flex-col px-4 gap-2 items-start self-stretch w-full">
            {(isLoading || tickets.length> 0)  && <h1 className="text-xl leading-7 font-semibold text-white">{heading}</h1>}
            {
                !isLoading ?
                tickets.length > 0 && tickets.map((ticket) => {
                    return(
                        <MovieInfo isLoading={isLoading} key={ticket.id} {...ticket}/>
                    )
                })
            :
            <MovieInfo isLoading={isLoading} id={""} date={""} schedule={""} movie={""} seats={[]} image={""}/>
            }

        </div>
    )
}