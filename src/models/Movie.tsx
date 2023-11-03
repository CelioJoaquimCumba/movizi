import { Comment } from "./Comment"

export type Movie = {
    id: string,
    title: string,
    genre: string,
    duration: string,
    language: string,
    ranking?: number,
    image: { portrait:string, landscape: string,header?:string}
    bookings?: number,
    rating?: number,
    description?: string,
    directors?: string,
    caption?: string,
    cast: Array<{image?: string, name:string, role?:string}>,
    comments: Array<Comment>
}