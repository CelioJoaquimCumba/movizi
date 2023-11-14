import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { Movie } from "../models/Movie";
import { MovieDetails as MovieHeader } from '../components/organisms/MovieDetails'
import { Date } from "../components/organisms/Date";
import { Schedule } from "../components/organisms/Schedule";
import { Seatings } from "../components/organisms/Seating";
import { BookingSummary } from "../components/organisms/BookingSummary";
import { MovieAspects } from "../components/atoms/MovieAspects";
import { useNavigate, useParams } from "react-router-dom";
import { addTicket, getMovieById } from "../firebase/firestore";
import { useEffect, useState } from "react";
import { Payments } from "../components/organisms/Payments";
import { useAuth } from "../firebase/auth";
import { Loader } from "../components/organisms/Loader";
import { MovieData } from "../dummyData/movie";

const {startDate, endDate, schedules,soldSeats} = {
            startDate:{
                day: 10,
                month: 10,
                year: 2023
            },
            endDate:{
                day: 21,
                month: 11,
                year: 2023
            },
            schedules : [{startTime: "12h 30m", endTime:"14h"},{ startTime:"15h 15m", endTime:"16h"},{startTime:"17h 30m", endTime:"19h"},{startTime:"20h 30m", endTime:"21h"}],
            soldSeats:["A1","A2"],
        }
export const Booking = () => {
    const movieId = useParams().id || ""
    const [movie, setMovie ] = useState<Movie>(MovieData)
    const {id, cast,title, image, genre, duration, language, description, rating, comments, directors, caption} = movie
    const { isLoading } = useAuth()
    const [isMovieLoading, setIsMovieLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authUser: any = useAuth().authUser
    const navigate = useNavigate()
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            if(authUser && movieId){
                const movie = await getMovieById(movieId)
                if(!movie){
                    return
                }
                setMovie(movie)
                setIsMovieLoading(false)
            }
        }
        fetchData()
    },[authUser, movieId])
    if(!isLoading && !authUser){
        navigate("/login")
    }

    const [selectedDate, setSelectedDate] = useState("")
    const handleDate = (date:string) => setSelectedDate(date)

    const [selectedSchedule, setSelectedSchedule] = useState("")
    const handleSchedule = (schedule:string) => setSelectedSchedule(schedule)
    const [ selectedSeats, setSelectedSeats] = useState<Array<string>>([])
    
    const handleSeats = (seat:string) => {
        if(selectedSeats.find(s => s === seat)){
            setSelectedSeats(selectedSeats.filter(s => s !== seat))
        }else{
            setSelectedSeats([...selectedSeats, seat])
        }
    }
    const makePayment = async() => {
        if(!authUser) return
        if(Math.floor(Math.random()*5) !== 0 ){
            try {
                const ticketId = await addTicket({
                    uid: authUser.uid,
                    id: authUser.uid,
                    date: selectedDate,
                    room: 4,
                    seats: selectedSeats,
                    movie: title,
                    image: image.portrait,
                    qrCode: "123",
                    schedule: selectedSchedule
                },movieId)
                navigate(`/payment-success/${ticketId}`)
            } catch (error) {
                navigate("/payment-failure")
            }
        }else{
            navigate("/payment-failure")
        }
    }
    const items = selectedSeats.map(seat => ({
        item:"Ticket seat: "+seat,price:10, quantity:1
    }))
    const phone = (
        <div className="w-full h-full"  >
            <div style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                    <div className="flex flex-col items-center gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
                        <NavBar/>
                        <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch">
                            <div className="flex p-4 flex-col justify-end items-center gap-2 self-stretch">
                                <img src={image.header} alt="header"className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch bg-black">
                <MovieAspects heading={"'"+title+"'"+ " Booking"} text={""}/>
                <Date updateDate={handleDate} startDate={startDate} endDate={endDate}/>
                <Schedule updateSchedule={handleSchedule} schedules={schedules}/>
                <Seatings updateSeats={handleSeats} soldSeats={soldSeats}/>
                <BookingSummary items={items}/>
                <Payments/>
                <div className="flex w-full justify-end">
                    <Button text={"Pay"} onClick={makePayment}/>
                </div>
                <Footer/>
            </div>
        </div>
    )
    const laptop = (
        <div className="w-full h-full flex flex-col items-start  " style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }}>
            <div className="flex flex-col items-start gap-2 w-full h-full bg-gradient-to-t via-black from-black to-transparent">
                <NavBar/>
                <div className="flex py-16 px-24 flex-grow w-full">
                    <div className="flex  py-8 px-14 flex-col justify-center items-center gap-8 self-stretch rounded-2xl bg-black bg-opacity-75 w-full">
                        <MovieHeader released id={id} title={title} genre={genre} duration={duration} language={language} image={image} cast={cast} comments={comments} directors={directors} description={description} rating={rating} caption={caption}/>
                        <div className="flex flex-col items-center gap-4 self-stretch">
                            <div className="flex py-4 px-2 flex-col justify-end items-end gap-2 self-stretch rounded-lg">
                                {/* <div className="flex justify-center items-start gap-2 self-stretch"> */}
                                    <Date  updateDate={handleDate} startDate={startDate} endDate={endDate}/>
                                    <Schedule updateSchedule={handleSchedule} schedules={schedules}/>
                                {/* </div> */}
                                <Seatings updateSeats={handleSeats} soldSeats={soldSeats}/>
                                <BookingSummary items={items}/>
                                <Payments/>
                                <div className="flex w-full justify-end">
                                    <Button text="Pay" onClick={makePayment}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
    
    
            </div>
    
        </div>
    )
    if(isMovieLoading){
        return <Loader/>
    }
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}
