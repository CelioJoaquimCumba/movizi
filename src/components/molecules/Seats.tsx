import { Seat } from "../atoms/Seat"

type Seats = {
    row: number,
    column: number,
    start: number,
    sold: Array<{row: number, column: number}>
}

export const Seats = ({row, column, start, sold}: Seats) => {
    const matrix: Array<Array<number>> = []
    for (let i = 0 ; i < row ; i ++ ) {
        const array = []
        for (let j = 0 ; j < column ; j ++ ) {
            if ( sold && sold.some(obj => obj.row -1 === j && obj.column-1 === i)) {
                array.push(0)
            } else {
                array.push(j+start)
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
                                <Seat key={seat} seat={seat.toString()} status={ seat === 0 ? "occupied" : "available"} />
                            )}
                        </div>
                    )
                }
            )
            }
        </div>
    )
}