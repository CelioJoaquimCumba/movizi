import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { MovieList } from "../components/organisms/MovieList";
import { TopMovies } from "../components/organisms/TopMovies"
import { Movie } from "../models/Movie";

const {image, genre, duration, language, description}: Movie = {
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
    directors: "Celio Cumba"
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
export const Home = () => {
    return(
        <div className="flex flex-col items-center gap-2 bg-black w-full h-full ">
            {/* header for phone */}
            <div style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                {header}
            </div>
            {/* header for md */}
            <div style={{ backgroundImage: `url(${image.landscape}})`, backgroundSize: "cover" }} className={`hidden md:flex flex-col items-start gap-2 self-stretch`}>
                {header}
            </div>
            <div className="flex flex-col px-4 gap-2 self-stretch">
                <TopMovies movies={movies}/>
                <MovieList heading={"Now Showing"} movies={movies}/>
                <MovieList heading={"Coming Soon"} movies={movies}/>
                <Footer/>
            </div>
        </div>
    )
}
const header = (
    <div className="flex flex-col w-full h-full bg-gradient-to-t from-black to-transparent" >
                    <NavBar/>
                    <div className="flex p-4 md:p-14 pt-64 md:pt-[12rem]">
                        <div className="flex  flex-col justify-end items-center gap-2 self-stretch h-full md:w-1/2">
                            <img src={image.header} alt="header" className="w-1/2" />
                            <span className="text-sm leading-5 font-normal text-white">{genre}|{duration}|{language}</span>
                            <div className="md:hidden">
                                <Button text={"Book Now"}/>
                            </div>
                            <span className="hidden md:block text-sm leading-5 font-normal text-white">{description}</span>
                            <div className="flex justify-center items-center gap-2 self-stretch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M9.16667 10.6667H8.5V8H7.83333M8.5 5.33333H8.50667M14.5 8C14.5 8.78793 14.3448 9.56815 14.0433 10.2961C13.7417 11.0241 13.2998 11.6855 12.7426 12.2426C12.1855 12.7998 11.5241 13.2417 10.7961 13.5433C10.0681 13.8448 9.28793 14 8.5 14C7.71207 14 6.93185 13.8448 6.2039 13.5433C5.47595 13.2417 4.81451 12.7998 4.25736 12.2426C3.70021 11.6855 3.25825 11.0241 2.95672 10.2961C2.65519 9.56815 2.5 8.78793 2.5 8C2.5 6.4087 3.13214 4.88258 4.25736 3.75736C5.38258 2.63214 6.9087 2 8.5 2C10.0913 2 11.6174 2.63214 12.7426 3.75736C13.8679 4.88258 14.5 6.4087 14.5 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="text-sm leading-5 font-normal text-white">More info</span>
                            </div>
                        </div>
                        <div className="hidden  md:flex p-4 flex-col w-1/2 justify-end items-start gap-2 self-stretch">
                            <Button text={"Book Now"}/>
                        </div>
                    </div>
                </div>
)
