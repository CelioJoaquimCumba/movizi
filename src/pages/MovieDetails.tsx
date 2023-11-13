import { Button } from "../components/atoms/Button"
import { MovieAspects } from "../components/atoms/MovieAspects";
import { Rating } from "../components/atoms/Rating";
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { MovieList } from "../components/organisms/MovieList";
import { MovieReview } from "../components/organisms/MovieReview";
import { Movie } from "../models/Movie";
import { MovieDetails as MovieHeader } from '../components/organisms/MovieDetails'
import { Cast } from "../components/organisms/Cast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import { getMovieById, getMovies } from "../firebase/firestore";
import { useEffect, useState } from "react";
import { Loader } from "../components/organisms/Loader";
import { MovieData } from "../dummyData/movie";
import { moviesData } from "../dummyData/movies";



export const MovieDetails = () => {
    const movieId = useParams().id
    const [movie, setMovie ] = useState<Movie>(MovieData)
    const [movies, setMovies] = useState(moviesData)
    const {id, image, rating, title, comments, directors, cast, caption,duration, description,genre,language} = movie
    const { authUser, isLoading } = useAuth()
    const [isMovieLoading, setIsMovieLoading] = useState(true)
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            if(authUser && movieId){
                const movie = await getMovieById(movieId)
                if(!movie){
                    return
                }
                setMovie(movie)
                const movies = await getMovies()
                setMovies(movies.filter(movie=> movie.id !== movieId))
                setIsMovieLoading(false)
            }
        }
        fetchData()
    },[authUser, movieId])
    const navigate = useNavigate()
    if(!isLoading && !authUser){
        navigate("/login")
    }
    
    const phone = (
    <div className="w-full h-full"  >
        <div style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                <div className="flex flex-col items-center gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
                    <NavBar/>
                    <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch">
                        <div className="flex p-4 flex-col justify-end items-center gap-2 self-stretch">
                            <img src={image.header} alt="header"className="w-full" />
                            <Rating rating={rating != undefined ? rating : 0} />
                            <Link to={`/booking/${id}`}>
                                <Button text="Book Now"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* header for md */}
        <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch bg-black">
            <MovieAspects heading={title} text={description != undefined ?  description: ""}/>
            <div className="flex justify-between items-start self-stretch">
                <MovieAspects heading={""} text={genre}/>
                <MovieAspects heading="" text={duration}/>
            </div>
            <MovieAspects heading="Cast" text={cast.map(castMember=>castMember.name).toString()}/>
            <MovieList heading={"More Movies"} movies={movies}/>
            <MovieReview movieId={movieId} comments={comments}/>
            <Footer/>
        </div>
    </div>
    )

    const laptop = (
        <div className="w-full h-full flex flex-col items-start  " style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }}>
            <div className="flex flex-col items-start gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
                <NavBar/>
                <div className="flex py-16 px-24 flex-grow w-full">
                    <div className="flex  py-8 px-14 flex-col justify-center items-center gap-8 self-stretch rounded-2xl bg-black bg-opacity-75 w-full">
                        <MovieHeader released id={id} title={title} genre={genre} duration={duration} language={language} image={image} cast={cast} comments={comments} directors={directors} description={description} rating={rating} caption={caption}/>
                        <div className="flex flex-col items-end justify-center gap-2 self-stretch">
                            <Button text={"Get Ticket"} onClick={() => navigate(`/booking/${id}`)}/>
                        </div>
                        <Cast cast={cast}/>
                        <MovieList heading={"More Movies"} movies={movies}/>
                        <MovieReview movieId={movieId} comments={comments}/>
                    </div>
                </div>


            </div>

        </div>
    )
    if(isMovieLoading) {
        return <Loader/>
    }
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}









