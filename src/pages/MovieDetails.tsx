import { Button } from "../components/atoms/Button"
import { MovieAspects } from "../components/atoms/MovieAspects";
import { Rating } from "../components/atoms/Rating";
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { FormProgress } from "../components/organisms/FormProgress";
import { MovieList } from "../components/organisms/MovieList";
import { MovieReview } from "../components/organisms/MovieReview";
import { Movie } from "../models/Movie";
import { MovieDetails as MovieHeader } from '../components/organisms/MovieDetails'
import { Cast } from "../components/organisms/Cast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import { getMovieById, getMovies } from "../firebase/firestore";
import { useEffect, useState } from "react";

const MovieData: Movie = {
    released: false,
    id:"fdasg213d",
    title: "Spider-Man: No Way Home",
    genre: "Action, Adventure",
    duration: "2h 28m",
    language: "English",
    ranking: 1,
    rating: 9,
    image: {
        portrait: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
        landscape: "https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTg1ZDAtYTA5MDNkNWZhZjA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        header: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVzAGdB9iyb77rY--LX2cXufb3o4nM0RMiTvfRV9ARmZm0FSmgM4Y9jwxpzo2p7I6e_tDzHBr0CUhZ6m8cfB0uWA5V6OBtASvqW_pNDWXU4Q.png?r=8a1"
    },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
    directors: "Celio Cumba",
    cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
}
const moviesData: Movie[] = [
    {
        released: false,
        id:"fads",
        title: "Spider-Man: No Way Home",
        genre: "Action, Adventure",
        duration: "2h 28m",
        language: "English",
        ranking: 1,
        rating: 9,
        image: {
            portrait: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn-8V3HcPD9Gul0Otnmuk0SZOeGgZSzemyg&usqp=CAU"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
        directors: "Celio Cumba",
        cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
    },
    {
        released: false,
        id:"fdas",
        title: "Inception",
        genre: "Science Fiction, Action",
        duration: "2h 28m",
        language: "English",
        ranking: 2,
        image: {
            portrait: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            landscape: "https://frontmediaspot.com/wp-content/uploads/2023/07/Inception-3.jpg"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
        directors: "Celio Cumba",
        cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
    },
    {
        released: false,
        id:"fdas",
        title: "Batman: The Dark Knight",
        genre: "Action, Crime, Drama",
        duration: "2h 32m",
        language: "English",
        ranking: 3,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRqDGEcfU3bXhqsGxvmL9KF-hgzeyZ-KqgA&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_Xn7je5rFvtaAWdc0GLh3nXwwVcuavdCQA&usqp=CAU"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
        directors: "Celio Cumba",
        cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
        
    },
    {
        released: true,
        id:"FDAS",
        title: "Pulp Fiction",
        genre: "Crime, Drama",
        duration: "2h 34m",
        language: "English",
        ranking: 4,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4QvYfXtwKBQjRQNmO_tC5tsIthuJlPwrcQ&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sk5giX0bysKdAyQr9p4x49yRXpDtTby0iA&usqp=CAU"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
        directors: "Celio Cumba",
        cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
    },
    {
        released: true,
        id:"fdas",
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: "2h 22m",
        language: "English",
        ranking: 5,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIVI9fzyx1aiKQ8tfCJv0QXnOSTF_wHYUfg&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC64jeO7HbbxTPS4DYyYpOtZqgwEUVhhjrQ&usqp=CAU"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
        directors: "Celio Cumba",
        cast: [
        {
            image: "https://randomuser.me/api/portraits/men/96.jpg",
            name: "John Smith",
            role: "Celio Cumba"
        },
        {
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Jane Doe",
            role: "The chosen one"
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Bob Johnson",
            role: "Supporting Actor"
        },
    ],
    comments: [
        {
            id:"4",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {

                    id:"1",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            id:"2",
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
    }
];

export const MovieDetails = () => {
    const movieId = useParams().id
    const [movie, setMovie ] = useState<Movie>(MovieData)
    const [movies, setMovies] = useState(moviesData)
    const {id, image, rating, title, comments, directors, cast, caption,duration, description,genre,language} = movie
    const { authUser, isLoading } = useAuth()
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
                        <FormProgress />
                        <MovieHeader released id={id} title={title} genre={genre} duration={duration} language={language} image={image} cast={cast} comments={comments} directors={directors} description={description} rating={rating} caption={caption}/>
                        <div className="flex flex-col items-end justify-center gap-2 self-stretch">
                            <Button text={"Get Ticket"}/>
                        </div>
                        <Cast cast={cast}/>
                        <MovieList heading={"More Movies"} movies={movies}/>
                        <MovieReview movieId={movieId} comments={comments}/>
                    </div>
                </div>


            </div>

        </div>
    )
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}









