import { BookingItem } from "../atoms/BookingItem"

export type BookingSummary = {
    items: BookingItem[]
}

export const BookingSummary = ({items}: BookingSummary) => {
    let total = 0 
    items.forEach((item) => {
        total = total + item.price
    })
    return (
        <div className="flex py-1 px-2 flex-col justify-center items-center gap-2 rounded border-2 border-slate-900 bg-black w-full">
            <div className="flex py-4 px-2 items-center gap-2 self-stretch border-b-2 border-b-slate-900">
                <span className="text-base leading-6 font-normal text-white">Booking Summary</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 self-stretch">
                <div className="flex flex-col justify-center items-center gap-1 self-stretch">
                    {items.map((item) => {
                        return <BookingItem key={item.item} item={item.item} price={item.price} quantity={item.quantity} />
                    })}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 self-stretch bg-slate-900 rounded">
                    <BookingItem item="Total" price={total} quantity={0} />
                </div>

            </div>

        </div>
    )
}