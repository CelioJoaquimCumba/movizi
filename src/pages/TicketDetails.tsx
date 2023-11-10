import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer"
import { NavBar } from "../components/molecules/NavBar"
import { Ticket } from "../components/molecules/Ticket"
import { useAuth } from "../firebase/auth"
import { Ticket as TicketType } from "../models/Ticket"
import { useEffect, useState } from "react"
import { usePDF } from 'react-to-pdf'
import { getTicketById } from "../firebase/firestore"

export const TicketDetails = () => {
    const { isLoading } = useAuth()
    const ticketId = useParams().id
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authUser:any = useAuth().authUser
    const [ticket, setTicket] = useState<TicketType>({uid:"",id:"",date:"",room:0,seats:[],movie:"",image:"",qrCode:"",schedule:""})
    const [isLoadingTicket, setIsLoadingTicket] = useState(true)
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            if(authUser && ticketId){
                const ticket = await getTicketById(ticketId)
                if(!ticket){
                    return
                }
                setTicket(ticket)
                setIsLoadingTicket(false)
            }
        }
        fetchData()
    },[authUser, ticketId])
    const navigate = useNavigate()
    if(!isLoading && !authUser){
        navigate("/login")
    }
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    return(
        <div className="flex flex-col items-start gap-2 w-full h-full min-h-screen bg-black">
            <NavBar/>
            <div className="flex flex-col px-1 gap-2 items-start self-stretch">
                <Button text={"Download Ticket"} onClick={()=> toPDF()}/>
                <div ref={targetRef} className="w-full" >
                    <Ticket ticket={ticket} isLoading={isLoadingTicket}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}