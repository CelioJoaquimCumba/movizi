import { Movie } from "../../models/Movie"
import { MovieChartItem } from "../atoms/MovieChartItem";
import { CardMovie } from "../molecules/CardMovie"

type TopMovies = {
    movies: Movie[];
}
export const TopMovies = ({movies}:TopMovies) => {
    return(
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="text-xl leading-7 font-semibold text-white">Top Movies This Week</h1>
            <div className=" hidden md:flex flex-row items-start gap-2 self-stretch ">
                <CardMovie type="rank" orientation="vertical" {...movies[0]}/>
                <div className="flex flex-col items-start gap-2  self-stretch w-full">
                    <CardMovie type="rank" orientation="horizontal" {...movies[1]}/>
                    <CardMovie type="rank" orientation="horizontal" {...movies[2]}/>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    <CardMovie type="rank" orientation="horizontal" {...movies[3]}/>
                    <CardMovie type="rank" orientation="horizontal" {...movies[4]}/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch md:hidden">
                {movies.map((movie) => {
                    return(
                        <MovieChartItem key={movie.title} id={movie.id} ranking={movie.ranking ? movie.ranking : 0} title={movie.title} image={movie.image.portrait} bookings={movie.bookings ? movie.bookings : 0}/>
                    )
                })}

            </div>

        </div>
    )
}