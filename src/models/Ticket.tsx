export type Ticket = {
    date: string,
    room: number,
    seat: string,
    movie: string,
    image: string,
    qrCode: string,
    orientation?: "horizontal" | "vertical"
}