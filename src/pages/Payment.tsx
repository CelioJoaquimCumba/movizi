import { Button } from "../components/atoms/Button"
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { Movie } from "../models/Movie";
import { MovieDetails as MovieHeader } from '../components/organisms/MovieDetails'
import { BookingSummary } from "../components/organisms/BookingSummary";
import { MovieAspects } from "../components/atoms/MovieAspects";
import { Payments } from "../components/organisms/Payments";

const {cast,title, image, genre, duration, language, description, rating, comments, directors, caption, id}: Movie = {
    released:true,
    id:"3",
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
            id:"32",
            text: "This is the first comment",
            timeStamp: "2023-10-31 12:00 PM",
            username: "User1",
            profileImage: "user1.jpg",
            comments: [
                {
                    id:"a",
                    text: "Reply to the first comment",
                    timeStamp: "2023-10-31 12:05 PM",
                    username: "User2",
                    profileImage: "user2.jpg",
                    comments: [] // Empty array for replies
                }
            ]
        },
        // You can add more comments here
    ],

}
const {items} = {
            items: [{item:"ticket seat B4",price:100, quantity:1},{item:"Ticket seat B5",price:100, quantity:1},{item:"Ticket seat B6",price:100, quantity:1}]
            
        }
export const Payment = () => {
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}

const phone = (
    <div className="w-full h-full"  >
        <div style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }} className={`flex md:hidden flex-col items-start gap-2 self-stretch`}>
                <div className="flex flex-col items-center gap-2 w-full h-full bg-gradient-to-t from-black to-transparent">
                    <NavBar/>
                    <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch">
                        <div className="flex p-4 flex-col justify-end items-center gap-2 self-stretch">
                            <img src={image.header} alt="header"className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        <div className="flex px-4 flex-col items-start gap-2 flex-grow self-stretch bg-black">
            <MovieAspects heading={"'"+title+"'"+ " Payment"} text={""}/>
            <BookingSummary items={items}/>
            <Payments/>
            <div className="flex w-full justify-end">
                <Button text={"Pay"}/>
            </div>
            
            <Footer/>
        </div>
    </div>
)

const laptop = (
    <div className="w-full h-full flex flex-col items-start  " style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }}>
        <div className="flex flex-col items-start gap-2 w-full h-full bg-gradient-to-t via-black from-black to-transparent">
            <NavBar/>
            <div className="flex py-16 px-24 flex-grow w-full">
                <div className="flex  py-8 px-14 flex-col justify-center items-center gap-8 self-stretch rounded-2xl bg-black bg-opacity-75 w-full">
                    <MovieHeader released id={id} title={title} genre={genre} duration={duration} language={language} image={image} cast={cast} comments={comments} directors={directors} description={description} rating={rating} caption={caption}/>
                    <div className="flex flex-col items-center gap-4 self-stretch">
                        <div className="flex py-4 px-2 flex-col justify-end items-end gap-2 self-stretch rounded-lg">
                            <BookingSummary items={items}/>
                            <Payments/>
                            <div className="flex w-full justify-end">
                                <Button text="Pay"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>


        </div>

    </div>
)