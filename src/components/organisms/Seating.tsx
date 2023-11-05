import { Seat } from "../atoms/Seat"
import { Seats } from "../molecules/Seats"
type SeatsForm = {
    soldSeats: string[],
    updateSeats: (seats:string) => void
}
export const Seatings = ({soldSeats, updateSeats}:SeatsForm) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const parseSeatString = (seatString:string) => {
        const row = alphabet.indexOf(seatString[0].toUpperCase()) + 1;
        const column = parseInt(seatString.slice(1));
        return { row, column };
    };
    const soldSeatObjects = soldSeats && soldSeats.map(parseSeatString);
    return(
        <div className="flex py-4 px-2 flex-col items-start gap-2 rounded w-full">
            <h1 className="text-white text-lg leading-7 font-normal w-full">Seating Layout</h1>
            <div className="flex py-4 px-2 flex-col justify-end items-center gap-2 self-stretch rounded bg-black">
                <div className="flex items-end gap-2 self-stretch ">
                    <div className="flex py-1 px-4 flex-col justify-end items-start gap-4 self-stretch">
                        {["A","B","C","D","E","F"].map((section) => {
                            return <span className="text-lg leading-7 font-normal text-white" key={section}>{section}</span>
                        })}
                    </div>
                    <div className="flex items-start gap-4 flex-grow  overflow-auto ">
                        <div className="flex flex-col items-start gap-4 ">
                            <div className="flex px-16 flex-col items-center gap-2 self-stretch ">
                                <span className="flex flex-col items-center gap-2 self-stretch text-white text-base leading-6 font-normal rounded-lg bg-slate-500">Screen</span>
                            </div>
                            <div className="flex items-start gap-4  ">
                                <Seats updateSeats={updateSeats} row={6} column={2} start={1} sold={ soldSeatObjects && soldSeatObjects.filter(obj => obj.column >= 1 && obj.column <= 2 ).map(obj => { return {row: obj.row, column: obj.column - 0}})}/>
                                <Seats updateSeats={updateSeats} row={6} column={8} start={3} sold={ soldSeatObjects && soldSeatObjects.filter(obj => obj.column >= 3 && obj.column <= 10 ).map(obj => { return {row: obj.row, column: obj.column - 2}})}/>
                                <Seats updateSeats={updateSeats} row={6} column={2} start={11} sold={ soldSeatObjects && soldSeatObjects.filter(obj => obj.column >= 11 && obj.column <= 12 ).map(obj => { return {row: obj.row, column: obj.column - 10}})}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex py-1 px-2 justify-start items-center gap-2 rounded border-2 border-slate-700 flex-wrap ">
                <span className="text-sm leading-5 font-normal text-white">Seats:</span>
                <div className="flex items-center gap-2">
                    <Seat updateSeats={()=> {}} seat="" status="available"/>
                    <span className="text-sm leading-5 font-normal text-white">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <Seat updateSeats={()=> {}} seat="" status="occupied"/>
                    <span className="text-sm leading-5 font-normal text-white">Occupied</span>
                </div>
                <div className="flex items-center gap-2">
                    <Seat updateSeats={()=> {}} seat="" status="selected"/>
                    <span className="text-sm leading-5 font-normal text-white">Selected</span>
                </div>

            </div>

        </div>
    )
}