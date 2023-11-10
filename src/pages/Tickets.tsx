import { useNavigate } from "react-router-dom";
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { Tickets as MovieTicket } from "../components/organisms/Tickets"
import { Ticket } from "../models/Ticket";
import { useAuth } from "../firebase/auth";
import { useEffect, useState } from "react";
import { getTickets } from "../firebase/firestore";



export const Tickets = () => {
    const { isLoading } = useAuth()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authUser:any = useAuth().authUser
    const [tickets, setTickets] = useState<Array<Ticket>>([])
    const navigate = useNavigate()
    if(!isLoading && !authUser){
        navigate("/login")
    }
    const [isLoadingTicket, setIsLoadingTicket] = useState(true)
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            if(authUser){
                const tickets = await getTickets(authUser.uid)
                setTickets(tickets)
                setIsLoadingTicket(false)
            }
            // ...
        }
        fetchData()
    },[authUser])
    return(
        <div className="flex flex-col items-start gap-2 w-full h-full min-h-screen bg-black">
            <NavBar/>
            <div className="flex flex-col items-start gap-2 flex-grow self-stretch md:py-16 md:px-24">
                <MovieTicket isLoading={isLoadingTicket} heading={"Purchased Tickets"} tickets={tickets.filter(t=>!t.expired)}/>
                <MovieTicket isLoading={isLoadingTicket} heading={"History"} tickets={tickets.filter(t=>t.expired)}/>
            </div>
            <Footer/>
        </div>
    )
}