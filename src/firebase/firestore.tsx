import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase"
import { Ticket } from "../models/Ticket";
import { Movie } from "../models/Movie";
import { Comment } from "../models/Comment";

const TICKETS_COLLECTION = "tickets"
const MOVIE_COLLECTION = "movies"
export const addTicket = async ({id, date, room, seats, movie, image, qrCode, schedule}:Ticket ):Promise<string> => {
    const reference = await addDoc(collection(db, TICKETS_COLLECTION), {id, date, room, seats, movie, image, qrCode, schedule})
    return reference.id
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

    const allMovies:Movie[] = []
    for (const documentSnapshot of (await querySnapshot).docs) {
        const movie = documentSnapshot.data()
        allMovies.push({
            ...movie,
            id: documentSnapshot.id,
            title: movie.title,
            genre: movie.genre,
            duration: movie.duration,
            language: movie.language,
            ranking: movie.ranking,
            image: movie.image,
            bookings: movie.bookings,
            rating: movie.rating,
            description: movie.description,
            directors: movie.directors,
            caption: movie.caption,
            cast: movie.cast,
            comments: movie.comments,
            released: movie.released
        })
    }
    return allMovies.sort((a, b) => {
    // Use the bookings property for comparison
        const bookingsA = a.bookings || 0;
        const bookingsB = b.bookings || 0;

        // Sort in descending order
        return bookingsB - bookingsA;
        });

}

export const getMovieById = async(id: string): Promise<Movie|null> => {
    const docRef = doc(db,MOVIE_COLLECTION,id)
    let docSnap
    try {
        docSnap = await getDoc(docRef)
    }
    catch(error) {
        console.log(error)
    }
    if(!docSnap){
        return null
    }
    const data= docSnap.data()
    if(!data){
        return null
    }
    const movie: Movie = {
        id:id,
        title: data.title,
        genre: data.genre,
        duration: data.duration,
        language: data.language,
        ranking: data.ranking,
        image: data.image,
        bookings: data.bookings,
        rating: data.rating,
        description: data.description,
        directors: data.directors,
        caption: data.caption,
        cast: data.cast,
        comments: data.comments,
        released: data.released
}

    return movie
}


export const getTicketById = async(id: string): Promise<Ticket|null> => {
    const docRef = doc(db,TICKETS_COLLECTION,id)
    let docSnap
    try {
        docSnap = await getDoc(docRef)
    }
    catch(error) {
        console.log(error)
    }
    if(!docSnap){
        return null
    }
    const data= docSnap.data()
    if(!data){
        return null
    }
    const ticket: Ticket = {
        id:id,
        uid:data.uid,
        date: data.date,
        room: data.room,
        seats: data.seats,
        movie: data.movie,
        image: data.image,
        qrCode: data.qrCode,
        schedule: data.schedule,
        expired: data.expired
}

    return ticket
}

export const addCommentToMovie = async (movieId:string, comment:Comment) => {
  const movieRef = doc(db, MOVIE_COLLECTION, movieId);

  // Get the current movie data
  const movieSnap = await getDoc(movieRef)
  if (!movieSnap.exists()) {
    console.error("Movie not found");
    return;
  }

  const movieData = movieSnap.data();

  // Update the comments array with the new comment
  const updatedComments = [comment,...(movieData.comments || [])];


  // Update the movie document with the new comments array
  try {
    await updateDoc(movieRef, {
      comments: updatedComments,
    });


    console.log("Comment added successfully");
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};



