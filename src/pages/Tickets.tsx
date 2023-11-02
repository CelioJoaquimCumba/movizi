import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { Tickets as MovieTicket } from "../components/organisms/Tickets"
import { Ticket } from "../models/Ticket";


const movieTickets: Ticket[] = [
    {
        date: "2023-11-02",
        room: 1,
        seats: ["A1", "A2"],
        movie: "Spider-man: Far From Home",
        image: "https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTg1ZDAtYTA5MDNkNWZhZjA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        qrCode: "qrCode1.png",
        schedule: "18:00 - 19:30",
    },
    {
        date: "2023-11-03",
        room: 2,
        seats: ["B1", "B2", "B3"],
        movie: "Movie 2",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        qrCode: "qrCode2.png",
        schedule: "19:30",
    },
    // Add more ticket objects as needed
];
export const Tickets = () => {
    return(
        <div className="flex flex-col items-start gap-2 w-full h-full min-h-screen bg-black">
            <NavBar/>
            <div className="flex flex-col items-start gap-2 flex-grow self-stretch md:py-16 md:px-24">
                <MovieTicket heading={"Purchased Tickets"} tickets={movieTickets}/>
                <MovieTicket heading={"History"} tickets={movieTickets}/>
            </div>
            <Footer/>
        </div>
    )
}