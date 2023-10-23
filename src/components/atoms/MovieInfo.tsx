type MovieInfo = {
    date: string,
    schedule: string,
    title: string,
    seats: string,
    image: string
}

export const MovieInfo = ({date, schedule, title, seats, image}: MovieInfo) => {
    return(
        <div className="flex p-4 justify-center items-start gap-2 rounded-xl bg-slate-900 w-full">
            <img className="rounded-xl object-cover w-32 aspect-[3/4]" src={image} alt={`${title} ticket`}/>
            <div className="flex flex-col items-start gap-4 flex-grow">
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">{title}</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">{seats} seats</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">Date: {date}</span>
                <span className="text-sm leading-5 font-semibold text-white self-stretch whitespace-nowrap">Schedule: {schedule}</span>
            </div>
        </div>
    )
}