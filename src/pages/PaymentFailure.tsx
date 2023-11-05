import { useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/Button"
import { MovieAspects } from "../components/atoms/MovieAspects";
import { Footer } from "../components/molecules/Footer";
import { NavBar } from "../components/molecules/NavBar"
import { useAuth } from "../firebase/auth";
import { Movie } from "../models/Movie";

const {title, image}: Movie = {
    id: "2",
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
    ],

}
export const PaymentFailure = () => {
    const { authUser, isLoading } = useAuth()
    const navigate = useNavigate()
    if(!isLoading && !authUser){
        navigate("/login")
    }
    return(
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">{phone}</div>
            <div className="hidden md:block w-full h-full">{laptop}</div>
        </div>
    )
}

const phone = (
    <div className="flex flex-col gap-4 w-full h-full min-h-screen bg-black"  >
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
        <div className="flex px-4 flex-col items-center gap-2 flex-grow self-stretch bg-black">
            <MovieAspects heading={"Your booking of '"+title+"'"+ "has failed"} text={"Something went wrong. We suggest to check if you have balance in your account."}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
                <path d="M73.376 129.376C79.3769 123.377 87.5147 120.007 96 120.007C104.485 120.007 112.623 123.377 118.624 129.376M72 80H72.08M120 80H120.08M168 96C168 105.455 166.138 114.818 162.519 123.553C158.901 132.289 153.598 140.226 146.912 146.912C140.226 153.598 132.289 158.901 123.553 162.519C114.818 166.138 105.455 168 96 168C86.5448 168 77.1822 166.138 68.4468 162.519C59.7114 158.901 51.7741 153.598 45.0883 146.912C38.4025 140.226 33.099 132.289 29.4807 123.553C25.8623 114.818 24 105.455 24 96C24 76.9044 31.5857 58.5909 45.0883 45.0883C58.5909 31.5857 76.9044 24 96 24C115.096 24 133.409 31.5857 146.912 45.0883C160.414 58.5909 168 76.9044 168 96Z" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex w-full justify-between">
                <Button text={"Try again"}/>
                <Button text={"Exit"}/>
            </div>
        </div>
        <Footer/>
    </div>
)

const laptop = (
    <div className="w-full h-screen min-h-full  flex flex-col items-start  " style={{ backgroundImage: `url(${image.portrait}})`, backgroundSize: "cover" }}>
        <div className="flex flex-col items-start gap-2 w-full h-full bg-gradient-to-t via-black from-black to-transparent">
            <NavBar/>
            <div className="flex py-16 px-24 flex-grow w-full h-full">
                <div className="flex  py-8 px-14 flex-col justify-center items-start gap-8 self-stretch rounded-2xl bg-black bg-opacity-75 w-full">
                    <div className="flex flex-col items-center gap-4 self-stretch">
                        <div className="flex py-4 px-2 flex-col justify-end items-center gap-2 self-stretch rounded-lg">
                            <MovieAspects heading={"Your booking of  '"+title+"'"+ " has failed"} text={"Something went wrong. We suggest to check if you have balance in your account."}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
                                <path d="M73.376 129.376C79.3769 123.377 87.5147 120.007 96 120.007C104.485 120.007 112.623 123.377 118.624 129.376M72 80H72.08M120 80H120.08M168 96C168 105.455 166.138 114.818 162.519 123.553C158.901 132.289 153.598 140.226 146.912 146.912C140.226 153.598 132.289 158.901 123.553 162.519C114.818 166.138 105.455 168 96 168C86.5448 168 77.1822 166.138 68.4468 162.519C59.7114 158.901 51.7741 153.598 45.0883 146.912C38.4025 140.226 33.099 132.289 29.4807 123.553C25.8623 114.818 24 105.455 24 96C24 76.9044 31.5857 58.5909 45.0883 45.0883C58.5909 31.5857 76.9044 24 96 24C115.096 24 133.409 31.5857 146.912 45.0883C160.414 58.5909 168 76.9044 168 96Z" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="flex justify-end gap-4 items-start self-stretch w-full">
                                <Button background="bg-slate-900 border-2 border-white" text={"Try again"}/>
                                <Button text={"Finish"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>


        </div>

    </div>
)