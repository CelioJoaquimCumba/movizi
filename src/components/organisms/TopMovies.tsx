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
                <CardMovie type="rank" orientation="vertical" {...movies[0]} ranking={1}/>
                <div className="flex flex-col items-start gap-2  self-stretch w-full">
                    {movies.length>1 && <CardMovie type="rank" orientation="horizontal" {...movies[1]} ranking={2}/>}
                    {movies.length>2 && <CardMovie type="rank" orientation="horizontal" {...movies[2]} ranking={3}/>}
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    {movies.length > 3 && <CardMovie type="rank" orientation="horizontal" {...movies[3]} ranking={4}/>}
                    {movies.length > 4 && <CardMovie type="rank" orientation="horizontal" {...movies[4]} ranking={5}/>}
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch md:hidden">
                {movies.filter((movie, index) => index < 3 && movie).map((movie, index) => {
                    return(
                        <MovieChartItem key={movie.title} id={movie.id} ranking={index+1} title={movie.title} image={movie.image.portrait} bookings={movie.bookings ? movie.bookings : 0}/>
                    )
                })}

            </div>

        </div>
    )
}