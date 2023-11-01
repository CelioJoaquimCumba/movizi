import { Ticket as props } from "../../models/Ticket"
import { TicketInfo } from "../atoms/TicketInfo"
import QRCode from "react-qr-code"


export const Ticket = ({date, room, seats, movie, image, qrCode, orientation = "vertical"}: props) => {
    return (
        <div className={`flex p-1 ${orientation === "vertical" ? "flex-col" : "flex-row"} items-start rounded-2xl border-2 border-slate-700`}>
            <div className={`flex py-4 px-2 flex-col items-start gap-2 self-stretch ${orientation === "vertical" ? "rounded-t-2xl" : "rounded-s-2xl"} bg-black `}>
                <div className="flex items-center gap-2 self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none">
                        <path d="M15 5V7M15 11V13M15 17V19M5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="text-xl leading-7 font-semibold text-white text-center">Ticket</span>
                </div>
                <img src={image} className={` ${orientation === "horizontal" ? "w-64 " : "w-full"} object-cover rounded`} />
            </div>
            <div className={`flex py-4 px-2 ${orientation === "vertical" ? "flex-col" : "flex-row"} items-center gap-2 self-stretch ${orientation === "vertical" ? "rounded-b-2xl" : "rounded-e-2xl"} bg-slate-900`}>
                <div className="flex flex-col items-center w-full gap-2 flex-grow">
                    <TicketInfo attribute="Movie" value={movie}/>
                    <TicketInfo attribute="Date" value={date}/>
                    <TicketInfo attribute="Room" value={room.toString()}/>
                    <TicketInfo attribute="Seat" value={seats.toString()}/>
                </div>
                <div className={` border-white border-dashed border-2 ${orientation === "vertical" ? "h-1 w-full" : "h-full w-1"}  `}></div>
                <QRCode
                    value={qrCode}
                    className="w-full aspect-square"
                />
            </div>
        </div>
    )
}