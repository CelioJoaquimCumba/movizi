import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/firebase"
import { addCommentToMovie } from "../../firebase/firestore"
import { Comment as CommentInterface } from "../../models/Comment"
import { Comment } from "../molecules/Comment"
import { CreateComment } from "../molecules/CreateComment"

type MovieReview = {
    comments: CommentInterface[],
    movieId: string | undefined
}
export const MovieReview = ({comments, movieId}:MovieReview) => {
    const navigate = useNavigate()
    if(!movieId){
        return
    }
    const handleComment = async (comment:string) => {
        await addCommentToMovie(movieId, {
            id: "",
            timeStamp: new Date().toISOString(),
            text: comment,
            username: auth.currentUser?.displayName || "",
            profileImage: auth.currentUser?.photoURL || "",
            comments: []
        })
        navigate(0)
    }
    const displayName = auth.currentUser?.displayName || ""
    const profilePhoto = auth.currentUser?.photoURL || ""
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="text-xl leading-7 font-semibold text-white text-center">Reviews</h1>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <CreateComment addComment={handleComment} username={displayName} profileImage={profilePhoto}/>
                {comments && comments.map((comment,index) =>{
                    return(
                        <Comment id={comment.id} key={index} text={comment.text} timeStamp={comment.timeStamp} username={comment.username} profileImage={comment.profileImage} comments={comment.comments}/>
                    )
                })}
            </div>
        </div>
    )
}