import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebase"
import { getDownloadURL } from "firebase/storage";
import { Ticket } from "../models/Ticket";

const TICKETS_COLLECTION = "tickets"
export const addTicket = ({id, date, room, seats, movie, image, qrCode, schedule}:Ticket ) => {
    addDoc(collection(db, TICKETS_COLLECTION), {id, date, room, seats, movie, image, qrCode, schedule})
}
