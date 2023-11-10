import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { Movie } from "../models/Movie";
import { BookingSummary } from "../components/organisms/BookingSummary";
import { MovieAspects } from "../components/atoms/MovieAspects";
import { MovieList } from "../components/organisms/MovieList";
import { useAuth } from "../firebase/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Ticket as TicketType } from "../models/Ticket";
import { getMovies, getTicketById } from "../firebase/firestore";
import { Ticket } from "../components/molecules/Ticket";
import { usePDF } from "react-to-pdf";

export const PaymentSuccess = () => {
    const { isLoading } = useAuth()
    const ticketId = useParams().id
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authUser:any = useAuth().authUser
    const [movies, setMovies] = useState<Array<Movie>>([])
    const [ticket, setTicket] = useState<TicketType>({uid:"",id:"",date:"",room:0,seats:[],movie:"",image:"",qrCode:"",schedule:""})
    const {items} = {
        items: ticket.seats.map(seat=> ({item:seat, price:100, quantity:1}))
    }
    const { movie, image } = ticket
    const navigate = useNavigate()
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            if(authUser && ticketId){
                const ticket = await getTicketById(ticketId)
                if(!ticket){
                    return
                }
                const movies = await getMovies()
                setMovies(movies)
                setTicket(ticket)
            }
        }
        fetchData()
    },[authUser, ticketId])
    if(!isLoading && !authUser){
        navigate("/login")
    }
    const phone = (
        <div className="w-full h-full"  >
            <div style={{ backgroundImage: `url(${image}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                    <div className="flex flex-col items-center gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
                        <NavBar/>
                        <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch">
                            <div className="flex p-4 flex-col justify-end items-center gap-2 self-stretch">
                                <img src={image} alt="header"className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch bg-black">
                <MovieAspects heading={"You have completed your '"+movie+"'"+ " booking"} text={"The ticket will be sent to your email and will also be stored in-app"}/>
                <div className="flex justify-between items-start self-stretch w-full">
                    <Button background="bg-slate-900 border-2 border-white" text={"Download Ticket"} onClick={()=>toPDF()}/>
                    <Button text={"Finish"} onClick={()=>navigate("/")}/>
                </div>
                <div ref={targetRef}>
                    <Ticket ticket={ticket} isLoading={false}/>
                </div>
                <MovieList heading={"More Movies"} movies={movies}/>
                
                <Footer/>
            </div>
        </div>
    )

    const laptop = (
        <div className="w-full h-full flex flex-col items-start  " style={{ backgroundImage: `url(${image}})`, backgroundSize: "cover" }}>
            <div className="flex flex-col items-start gap-2 w-full h-full bg-gradient-to-t via-black from-black to-transparent">
                <NavBar/>
                <div className="flex py-16 px-24 flex-grow w-full">
                    <div className="flex  py-8 px-14 flex-col justify-center items-start gap-8 self-stretch rounded-2xl bg-black bg-opacity-75 w-full">
                        <div className="flex flex-col items-center gap-4 self-stretch">
                            <div className="flex py-4 px-2 flex-col justify-end items-start gap-2 self-stretch rounded-lg">
                                <MovieAspects heading={"Your booking of  '"+movie+"'"+ " was successfull"} text={"The ticket will be sent to your email and will also be stored in-app"}/>
                                <div ref={targetRef}>
                                    <Ticket ticket={ticket} isLoading={false}/>
                                </div>
                                <div className="flex justify-end gap-4 items-start self-stretch w-full">
                                    <Button background="bg-slate-900 border-2 border-white" text={"Download Ticket"} onClick={()=>toPDF()}/>
                                    <Button text={"Finish"}/>
                                </div>
                            </div>
                        </div>
                        <BookingSummary items={items}/>
                        <MovieList heading={"MORE MOVIES IN CINEMA"} movies={movies}/>
                    </div>
                </div>
                <Footer/>


            </div>

        </div>
    )
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}

