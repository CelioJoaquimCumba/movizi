import { useState } from "react"
import { Comment as props } from "../../models/Comment"


export const Comment = ({text, timeStamp, username, profileImage, comments}: props) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded((expanded)=>!expanded)
    }
    return(
        <div className="flex py-2 px-4 flex-col gap-2 items-start rounded bg-black w-full">
            <div className="flex flex-start gap-2">
                <img src={profileImage} className=" w-12 aspect-square rounded-full object-cover object-center" alt="profile"/>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-base leading-6 font-medium text-white text-center">{username}</span>
                    <div className="flex items-start gap-1">
                        <span className="text-xs leading-4 font-normal text-gray-300 text-center">{timeStamp}</span>
                    </div>
                </div>

            </div>
            <span className="text-base leading-5 font-normal text-white text-ellipsis overflow-hidden line-clamp-5">{text}</span>
            {comments.length > 0 &&
            <div className={`flex justify-center items-center gap-0.5 hover:bg-white hover:bg-opacity-30 p-2 rounded hover:cursor-pointer `} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                    <path d="M6.66667 10H6.675M10 10H10.0083M13.3333 10H13.3417M17.5 10C17.5 13.6817 14.1417 16.6667 10 16.6 667C8.77386 16.6708 7.56233 16.4006 6.45417 15.8758L2.5 16.6667L3.6625 13.5667C2.92667 12.535 2.5 11.3117 2.5 10C2.5 6.31833 5.85833 3.33333 10 3.33333C14.1417 3.33333 17.5 6.31833 17.5 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs leading-4 font-normal text-white">replies ({comments.length})</span>
            </div>}
            <div className={`flex flex-col ps-4 ${ !expanded && "hidden"} `}>
                {comments.length > 0 
                &&
                comments.map((comment)=> <Comment text={comment.text} profileImage={comment.profileImage} timeStamp={comment.timeStamp} username={comment.username} comments={[]}/>)
                }
            </div>
        </div>
    )
}