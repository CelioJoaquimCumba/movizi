import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebase"
import { getDownloadURL } from "firebase/storage";
import { Ticket } from "../models/Ticket";

const TICKETS_COLLECTION = "tickets"
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