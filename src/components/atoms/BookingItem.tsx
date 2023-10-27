export type BookingItem = {
    item: string,
    price: number,
    quantity: number
}
export const BookingItem = ({item, price, quantity}: BookingItem) => {
    return (
        <div className="flex py-4 px-2 justify-between items-center rounded w-full">
            <span className="text-base leading-6 font-normal text-white">{item}</span>
            <span className="text-sm leading-5 font-normal text-white">{ quantity>1 && `${quantity} X`}  {price} $ </span>
        </div>
    )
}