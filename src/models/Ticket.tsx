export type Ticket = { 
    uid:string,
    id: string,
    date: string,
    room: number,
    seats: string[],
    movie: string,
    image: string,
    qrCode: string,
    schedule: string,
    expired?: boolean
}