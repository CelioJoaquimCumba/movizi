import { useNavigate } from "react-router-dom"
import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer"
import { NavBar } from "../components/molecules/NavBar"
import { Ticket } from "../components/molecules/Ticket"
import { useAuth } from "../firebase/auth"

export const TicketDetails = () => {
    const { authUser, isLoading } = useAuth()
    const navigate = useNavigate()
    if(!isLoading && !authUser){
        navigate("/login")
    }
    return(
        <div className="flex flex-col items-start gap-2 w-full h-full min-h-screen bg-black">
            <NavBar/>
            <div className="flex flex-col px-1 gap-2 items-start self-stretch">
                <Button text={"Download Ticket"}/>
                <Ticket id="2" date={"16 Oct 2023"} room={1} seats={["A4","B4"]} movie={"Spiderman: Far From Home"} image={"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"} qrCode={"123fdsa"} schedule={"18h 30m - 20h 30m"}/>
            </div>
            <Footer/>
        </div>
    )
}