type TicketInfo = {
    attribute : string,
    value : string
}
export const TicketInfo = ({attribute, value}:TicketInfo) => {
    return (
        <div className="flex p-2 justify-center items-start gap-4 w-full">
            <span className="text-base leading-6 font-semibold text-slate-500 text-center">{attribute}</span>
            <span className="flex-grow text-white text-base leading-6 font-normal">{value}</span>
        </div>
    )
}