import { Comment as CommentInterface } from "../../models/Comment"
import { Comment } from "../molecules/Comment"
import { CreateComment } from "../molecules/CreateComment"

type MovieReview = {
    comments: CommentInterface[]
}
export const MovieReview = ({comments}:MovieReview) => {
    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-xl leading-7 font-semibold text-white text-center">Reviews</h1>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <CreateComment username={"Zoe Hernandez"} profileImage={"https://randomuser.me/api/portraits/women/16.jpg"}/>
                {comments.map((comment) =>{
                    return(
                        <Comment text={comment.text} timeStamp={comment.timeStamp} username={comment.username} profileImage={comment.profileImage} comments={comment.comments}/>
                    )
                })}
            </div>
        </div>
    )
}