import './App.css'
import { Home } from './pages/Home'


// const movies: Movie[] = [
//     {
//         title: "Spider-Man: No Way Home",
//         genre: "Action, Adventure",
//         duration: "2h 28m",
//         language: "English",
//         ranking: 1,
//         rating: 9,
//         image: {
//             portrait: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
//             landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn-8V3HcPD9Gul0Otnmuk0SZOeGgZSzemyg&usqp=CAU"
//         },
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique fugit hic ex doloribus animi dolorum. Porro eligendi inventore autem, possimus culpa eius quo alias excepturi mollitia at, suscipit voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam impedit tenetur saepe, odio, quae omnis eligendi mollitia consectetur atque nulla, in nesciunt nam. Non omnis assumenda mollitia iure quidem nemo.",
//         directors: "Celio Cumba"
//     },
//     {
//         title: "Inception",
//         genre: "Science Fiction, Action",
//         duration: "2h 28m",
//         language: "English",
//         ranking: 2,
//         image: {
//             portrait: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
//             landscape: "https://frontmediaspot.com/wp-content/uploads/2023/07/Inception-3.jpg"
//         }
//     },
//     {
//         title: "Batman: The Dark Knight",
//         genre: "Action, Crime, Drama",
//         duration: "2h 32m",
//         language: "English",
//         ranking: 3,
//         image: {
//             portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRqDGEcfU3bXhqsGxvmL9KF-hgzeyZ-KqgA&usqp=CAU",
//             landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_Xn7je5rFvtaAWdc0GLh3nXwwVcuavdCQA&usqp=CAU"
//         }
//     },
//     {
//         title: "Pulp Fiction",
//         genre: "Crime, Drama",
//         duration: "2h 34m",
//         language: "English",
//         ranking: 4,
//         image: {
//             portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4QvYfXtwKBQjRQNmO_tC5tsIthuJlPwrcQ&usqp=CAU",
//             landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sk5giX0bysKdAyQr9p4x49yRXpDtTby0iA&usqp=CAU"
//         }
//     },
//     {
//         title: "The Shawshank Redemption",
//         genre: "Drama",
//         duration: "2h 22m",
//         language: "English",
//         ranking: 5,
//         image: {
//             portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIVI9fzyx1aiKQ8tfCJv0QXnOSTF_wHYUfg&usqp=CAU",
//             landscape: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC64jeO7HbbxTPS4DYyYpOtZqgwEUVhhjrQ&usqp=CAU"
//         }
//     }
// ];
// const tickets: Ticket[] = [
//     {
//         date: "2023-10-26",
//         room: 1,
//         seats: ["A1", "A2"],
//         movie: "Spider-Man: No Way Home",
//         image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
//         qrCode: "qr_code_1.png",
//         schedule: "18:00",
//         orientation: "horizontal"
//     },
//     {
//         date: "2023-10-27",
//         room: 2,
//         seats: ["B3", "B4", "B5"],
//         movie: "Pulp Fiction",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4QvYfXtwKBQjRQNmO_tC5tsIthuJlPwrcQ&usqp=CAU",
//         qrCode: "qr_code_2.png",
//         schedule: "20:00",
//         orientation: "vertical"
//     },
//     // Add more tickets as needed
// ];

// const castMembers: CastMember[] = [
//     {
//         image: "https://randomuser.me/api/portraits/men/96.jpg",
//         name: "John Smith",
//         role: "Celio Cumba"
//     },
//     {
//         image: "https://randomuser.me/api/portraits/men/79.jpg",
//         name: "Jane Doe",
//         role: "The chosen one"
//     },
//     {
//         image: "https://randomuser.me/api/portraits/women/42.jpg",
//         name: "Bob Johnson",
//         role: "Supporting Actor"
//     },
//     // Add more cast members as needed
// ];

// const scheduleTimes: ScheduleTime[] = [
//     {
//         startTime: "9:00 AM",
//         endTime: "10:30 AM"
//     },
//     {
//         startTime: "2:00 PM",
//         endTime: "3:30 PM"
//     },
//     {
//         startTime: "7:00 PM",
//         endTime: "8:30 PM"
//     },
//     // Add more schedule times as needed
// ];
function App() {

  return (
    <div className="bg-white w-screen h-full flex justify-center items-start ">
        <Home/>
    </div>
  )
}

export default App
