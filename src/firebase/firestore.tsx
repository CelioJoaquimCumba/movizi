import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase"
import { Ticket } from "../models/Ticket";
import { Movie } from "../models/Movie";

const TICKETS_COLLECTION = "tickets"
const MOVIE_COLLECTION = "movies"
export const addTicket = ({id, date, room, seats, movie, image, qrCode, schedule}:Ticket ) => {
    addDoc(collection(db, TICKETS_COLLECTION), {id, date, room, seats, movie, image, qrCode, schedule})
}
export const getTickets = async (uid:string):Promise<Ticket[]> => {
    const tickets = query(collection(db,TICKETS_COLLECTION),where("id","==",uid))
    const querySnapshot = getDocs(tickets)

    const allTickets:Ticket[] = []
    for (const documentSnapshot of (await querySnapshot).docs) {
        const ticket = documentSnapshot.data()
        allTickets.push({
            ...ticket,
            id: documentSnapshot.id,
            movie: ticket.movie,
            image: ticket.image,
            qrCode: ticket.qrCode,
            schedule: ticket.schedule,
            seats: ticket.seats,
            date: ticket.date,
            room: ticket.room,
            uid: ticket.id
        })
    }
    return allTickets

}
export const getMovies = async ():Promise<Movie[]> => {
    const movies = query(collection(db,MOVIE_COLLECTION))
    const querySnapshot = getDocs(movies)

    const allTickets:Movie[] = []
    for (const documentSnapshot of (await querySnapshot).docs) {
        const movie = documentSnapshot.data()
        allTickets.push({
            ...movie,
            id: documentSnapshot.id,
            title: movie.title,
            genre: movie.genre,
            duration: movie.duration,
            language: movie.language,
            ranking: movie.ranking,
            image: movie.image,
            bookings: movie.booking,
            rating: movie.rating,
            description: movie.description,
            directors: movie.directors,
            caption: movie.caption,
            cast: movie.cast,
            comments: movie.comments
        })
    }
    return allTickets

}