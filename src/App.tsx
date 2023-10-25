import './App.css'
import { MovieReview } from './components/organisms/MovieReview'
import { Comment } from './models/Comment';
const comments: Comment[] = [
    {
        text: "I just saw the new Spider-Man movie, and it was AMAZING! Tom Holland is the perfect Spidey! 🕷️ #SpiderManRocks",
        timeStamp: "2023-10-26 13:00 PM",
        username: "John Lock",
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        comments: [{
            text: "I've been a Spidey fan since the Tobey Maguire days, but Tom Holland's portrayal has brought a fresh and youthful energy to the character. Great movie! 🕸️",
            timeStamp: "2023-10-26 13:15 PM",
            username: "Edna Harvey",
            profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
            comments: []
        },]
    },
    {
        text: "The villain in this Spider-Man movie was seriously compelling. Michael Keaton's Vulture is one of the best Spidey villains to date. 🦅",
        timeStamp: "2023-10-26 14:00 PM",
        username: "Irene Barnett",
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        comments: [{
            text: "The VFX in the Spider-Man movie were mind-blowing! The swinging scenes through New York City were a visual treat. 🏙️🕷️",
            timeStamp: "2023-10-26 13:30 PM",
            username: "Charles Barnet",
            profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
            comments: []
        },
        {
            text: "Can we talk about that post-credit scene? Mind = Blown! 🌌🚀 I can't wait for the next installment.",
            timeStamp: "2023-10-26 13:45 PM",
            username: "Michele herera",
            profileImage: "https://randomuser.me/api/portraits/women/34.jpg",
            comments: []
        },]
    },
    {
        text: "I love how the movie explores the responsibility that comes with having superpowers. It's not just about fighting bad guys, but also protecting the ones you love. 🦸‍♂️❤️",
        timeStamp: "2023-10-26 14:15 PM",
        username: "Brad Gonzalez",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        comments: [{
        text: "Anyone catch all those Easter eggs and references to the comics? The attention to detail is incredible! 📚🔎",
        timeStamp: "2023-10-26 14:30 PM",
        username: "Normam Graves",
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        comments: []
    },
    {
        text: "I watched it in IMAX, and the action sequences were next level. Felt like I was swinging through the city with Spidey! 🎥🕷️",
        timeStamp: "2023-10-26 14:45 PM",
        username: "Jeanne Lopez",
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        comments: []
    },
    {
        text: "The humor in the Spider-Man movies is on point! Peter's quips and banter make every scene a delight. 😂👌",
        timeStamp: "2023-10-26 15:00 PM",
        username: "Holly Ortiz",
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        comments: []
    },
    {
        text: "This movie is a must-watch for any Spider-Man fan. It delivers on every level – action, heart, and Spidey's classic charm. 🕷️❤️",
        timeStamp: "2023-10-26 15:15 PM",
        username: "Same Matthews",
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        comments: []
    }]
    },
    
];
function App() {

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-start">
      <div className='w-full bg-white p-4 flex justify-center'>
      <MovieReview comments={comments}/>
      </div>
    </div>
  )
}

export default App
