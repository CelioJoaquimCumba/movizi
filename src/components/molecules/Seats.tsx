import { Seat } from "../atoms/Seat"

type Seats = {
    row: number,
    column: number,
    start: number,
    sold: Array<{row: number, column: number}>,
    updateSeats: (seats:string) => void
}

export const Seats = ({row, column, start, sold, updateSeats}: Seats) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const matrix: Array<Array<string>> = []
    for (let i = 0 ; i < row ; i ++ ) {
        const array = []
        for (let j = 0 ; j < column ; j ++ ) {
            if ( sold && sold.some(obj => obj.column -1 === j && obj.row-1 === i)) {
                array.push("0"+i+j)
            } else {
                array.push(alphabet[i]+(j+start))
            }
        }
        matrix.push(array)
    }
    return(
        <div className="flex flex-col gap-1 items-start">
            {
            matrix.map(
                (array, index)=>{
                    return(
                        <div key={index} className="flex flex-start gap-1">
                            {array.map(
                                (seat)=> 
                                <Seat updateSeats={updateSeats} key={seat} seat={seat.toString()} status={ seat.at(0) === "0" ? "occupied" : "available"} />
                            )}
                        </div>
                    )
                }
            )
            }
        </div>
    )
}