import { useEffect, useState } from "react"
import { NavBar } from "../components/molecules/NavBar"
import { Movie } from "../models/Movie"
import { Loader } from "../components/organisms/Loader"
import { getMovies } from "../firebase/firestore"
import { Button } from "../components/atoms/Button"
import { MovieChartItem } from "../components/atoms/MovieChartItem"
import { useNavigate } from "react-router-dom"

export const Admin = () => {
    const [movies, setMovies] = useState<Array<Movie>>([
    {   id: "",
        title: "",
        genre: "",
        duration: "",
        language: "",
        ranking: 0,
        image: { portrait:"", landscape: "",header:""},
        bookings: 0,
        rating: 0,
        description: "",
        directors: "",
        caption: "",
        cast: [],
        comments: [],
        released: true
    }])
    const [areMoviesLoading, setAreMoviesLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            const movies = await getMovies()
            setMovies(movies)
            setAreMoviesLoading(false)
        }
        fetchData()
    })
    if(areMoviesLoading){
        return <Loader/>
    }
    
    return(
        <div className="w-full h-full min-h-screen flex flex-col bg-black text-white">
            <NavBar/>
            <div className="flex w-full h-full flex-col p-4">
                <div className="flex justify-end">
                    <Button text={"Add movie"} onClick={() => navigate("/admin/movie/add")}/>
                </div>
                <h1 className="text-xl leading-7 font-semibold text-white">Movies</h1>
                <div className="flex flex-col gap-2">
                    {movies.map((movie: Movie, index) => {
                        return(
                            <MovieChartItem key={movie.title} id={movie.id} ranking={index+1} title={movie.title} image={movie.image.portrait} bookings={movie.bookings ? movie.bookings : 0} navigateTo={`/admin/movie/${movie.id}`}/>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}