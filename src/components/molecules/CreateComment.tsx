import { Button } from "../atoms/Button"
import Input from "../atoms/Input"

type CreateComment =  {
    username: string,
    profileImage: string
}

export const CreateComment = ({username, profileImage}: CreateComment) => {
    return (
        <div className="flex py-2 px-4 flex-col gap-2 items-start rounded bg-black w-full">
            <div className="flex flex-start items-center gap-2">
                <img src={profileImage} className=" w-12 aspect-square rounded-full object-cover object-center" alt="profile"/>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-base leading-6 font-medium text-white text-center">{username}</span>
                </div>
            </div>
            <div className="flex p-1 items-end gap-2 self-stretch">
                <Input  label={"Add Comment"} placeholder={"comment here"}/>
                <Button text={"Post"}/>
            </div>
        </div>
    )
}