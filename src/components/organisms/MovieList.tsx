import { Movie } from "../../models/Movie"
import { CardMovie } from "../molecules/CardMovie"

type MovieList = {
    heading: string,
    movies: Movie[]
}
export const MovieList = ({heading, movies}: MovieList) => {
    return(
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="text-xl leading-7 font-semibold text-white">{heading}</h1>
            <div className="flex items-start justify-start gap-4 self-stretch overflow-auto">
                {movies.map((movie) => {
                    return(
                        <CardMovie key={movie.title} {...movie}/>
                    )
                })}
            </div>
        </div>
    )
}