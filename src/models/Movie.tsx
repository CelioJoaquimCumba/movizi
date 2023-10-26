export type Movie = {
    title: string,
    genre: string,
    duration: string,
    language: string,
    ranking?: number,
    image: { portrait:string, landscape: string}
    bookings?: number
}