import { useNavigate } from "react-router-dom"

type MovieChartItem = {
    id: string,
    ranking: number,
    bookings: number,
    title: string,
    image: string
}

export const MovieChartItem = ({ranking, bookings, title, id, image}: MovieChartItem) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movie/${id}`)
    }
    return(
        <div className="flex p-2 justify-center items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 w-full" onClick={handleClick}>
            <div className="flex py-4 justify-center items-center gap-2 self-stretch">
                <span className="text-4xl leading-10 font-black text-white">
                    {ranking}
                </span>
                 <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-white"></div>
            </div>
            <div className="flex flex-col gap-1 flex-grow">
                <span className="text-white text-sm leading-5 font-semibold self-stretch">{title}</span>
                <span className="text-white text-xs leading-4 font-normal">bookings {bookings}</span>
            </div>
            <img className=" aspect-square object-cover w-16 flex-shrink-0 rounded-md" src={image} alt={`${title} movie`}/>
        </div>
    )
}