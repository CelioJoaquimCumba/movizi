import { Button } from "../components/atoms/Button"
import { MovieAspects } from "../components/atoms/MovieAspects";
import { Rating } from "../components/atoms/Rating";
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { MovieList } from "../components/organisms/MovieList";
import { MovieReview } from "../components/organisms/MovieReview";
import { TopMovies } from "../components/organisms/TopMovies"
import { Movie } from "../models/Movie";

const {cast,title, image, genre, duration, language, description, rating, comments}: Movie = {
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
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        {
            text: "Another comment",
            timeStamp: "2023-10-31 12:15 PM",
            username: "User3",
            profileImage: "user3.jpg",
            comments: [] // Empty array for comments
        }
        // You can add more comments here
    ]
}
const movies: Movie[] = [
    {
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
        directors: "Celio Cumba"
    },
    {
        title: "Inception",
        genre: "Science Fiction, Action",
        duration: "2h 28m",
        language: "English",
        ranking: 2,
        image: {
            portrait: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            landscape: "https://frontmediaspot.com/wp-content/uploads/2023/07/Inception-3.jpg"
        }
    },
    {
        title: "Batman: The Dark Knight",
        genre: "Action, Crime, Drama",
        duration: "2h 32m",
        language: "English",
        ranking: 3,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRqDGEcfU3bXhqsGxvmL9KF-hgzeyZ-KqgA&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_Xn7je5rFvtaAWdc0GLh3nXwwVcuavdCQA&usqp=CAU"
        }
    },
    {
        title: "Pulp Fiction",
        genre: "Crime, Drama",
        duration: "2h 34m",
        language: "English",
        ranking: 4,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4QvYfXtwKBQjRQNmO_tC5tsIthuJlPwrcQ&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sk5giX0bysKdAyQr9p4x49yRXpDtTby0iA&usqp=CAU"
        }
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: "2h 22m",
        language: "English",
        ranking: 5,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIVI9fzyx1aiKQ8tfCJv0QXnOSTF_wHYUfg&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC64jeO7HbbxTPS4DYyYpOtZqgwEUVhhjrQ&usqp=CAU"
        }
    }
];
export const MovieDetails = () => {
    return(
        <div className="w-full h-full"  >
            <div style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                    {header}
                </div>
                {/* header for md */}
            <div style={{ backgroundImage: `url(${image.landscape}})`, backgroundSize: "cover" }} className={`hidden md:flex flex-col items-start gap-2 self-stretch`}>
                    {header}
            </div>
            <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch bg-black md:collapse">
                <MovieAspects heading={title} text={description}/>
                <div className="flex justify-between items-start self-stretch">
                    <MovieAspects heading={""} text={genre}/>
                    <MovieAspects heading="" text={duration}/>
                </div>
                <MovieAspects heading="Cast" text={cast.map(castMember=>castMember.name).toString()}/>
                <MovieList heading={"More Movies"} movies={movies}/>
                <MovieReview comments={comments}/>
                <Footer/>
            </div>
        </div>
    )
}
const header = (
    <div className="flex flex-col items-center gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
        <NavBar/>
        <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch">
            <div className="flex p-4 flex-col justify-end items-center gap-2 self-stretch">
                <img src={image.header} alt="header"className="w-full" />
                <Rating rating={rating} />
                <Button text="Book Now"/>
            </div>
        </div>
    </div>
)