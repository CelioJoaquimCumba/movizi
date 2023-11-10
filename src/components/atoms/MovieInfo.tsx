import { useNavigate } from "react-router-dom"

type MovieInfo = {
    id: string,
    date: string,
    schedule: string,
    movie: string,
    seats: Array<string>,
    image: string,
    isLoading: boolean
}

export const MovieInfo = ({id, date, schedule, movie, seats, image, isLoading}: MovieInfo) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/ticket/${id}`)
    }
    return(
        <div onClick={handleClick} className={`flex p-4 justify-start items-center gap-4 rounded-xl bg-slate-900 hover:bg-slate-800 w-full ${isLoading && "animate-pulse dark:bg-slate-900"}`}>
            {isLoading ?
                <MovieInfoSkeleton/>
                :
                <>
                    <img className="rounded-xl object-cover w-40 aspect-square" src={image} alt={`${movie} ticket`}/>
                    <div className="flex flex-col items-start gap-4 flex-grow">
                        <span className={`text-sm leading-5 font-semibold text-white self-stretch`}>{movie}</span>
                        <span className={`text-sm leading-5 font-semibold text-white self-stretch`}>{seats.map(seat=>seat)} seats</span>
                        <span className={`text-sm leading-5 font-semibold text-white self-stretch`}>Date: {date}</span>
                        <span className={`text-sm leading-5 font-semibold text-white self-stretch`}>Schedule: {schedule}</span>
                    </div>
                </>

            }
        </div>
    )
}

const MovieInfoSkeleton = () => (
    <>
        <div className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-xl object-cover w-32 aspect-square">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
    </>
)