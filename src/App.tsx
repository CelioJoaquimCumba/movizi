import './App.css'
import { MovieList } from './components/organisms/MovieList';
import { MovieReview } from './components/organisms/MovieReview'
import { TopMovies } from './components/organisms/TopMovies';
import { Comment } from './models/Comment';
import { Movie } from './models/Movie';

const movies: Movie[] = [
    {
        title: "Spider-Man: No Way Home",
        genre: "Action, Adventure",
        duration: "2h 28m",
        language: "English",
        ranking: 9.2,
        image: {
            portrait: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn-8V3HcPD9Gul0Otnmuk0SZOeGgZSzemyg&usqp=CAU"
        }
    },
    {
        title: "Inception",
        genre: "Science Fiction, Action",
        duration: "2h 28m",
        language: "English",
        ranking: 8.8,
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
        ranking: 9.0,
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
        ranking: 8.9,
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
        ranking: 9.3,
        image: {
            portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIVI9fzyx1aiKQ8tfCJv0QXnOSTF_wHYUfg&usqp=CAU",
            landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC64jeO7HbbxTPS4DYyYpOtZqgwEUVhhjrQ&usqp=CAU"
        }
    }
];
function App() {

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-start">
      <div className='w-full bg-white p-4 flex flex-col justify-center'>
      <TopMovies movies={movies.map((movie) => movie)}/>
      <MovieList heading="Popular Movies" movies={movies.map((movie) => movie)}/>
      </div>
    </div>
  )
}

export default App
