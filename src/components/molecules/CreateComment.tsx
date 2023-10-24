import { Button } from "../atoms/Button"
import Input from "../atoms/Input"

type CreateComment =  {
    username: string,
    profileImage: string
}

export const CreateComment = ({username, profileImage}: CreateComment) => {
    return (
        <div className="flex py-2 px-4 flex-col gap-2 items-start rounded bg-black w-full">
            <div className="flex flex-start gap-2">
                <img src={profileImage} className=" w-12 aspect-square rounded-full object-cover object-center" alt="profile"/>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-base leading-6 font-medium text-white text-center">{username}</span>
                    <div className="flex items-start gap-1">
                        <div className="flex items-start">
                            {[1,2,3,4,5].map((index)=>
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="none">
                                <path d="M7.23928 2.3416C7.47928 1.6048 8.52168 1.6048 8.76088 2.3416L9.61688 4.9752C9.66917 5.13559 9.77084 5.27535 9.90733 5.37449C10.0438 5.47362 10.2082 5.52708 10.3769 5.5272H13.1465C13.9217 5.5272 14.2433 6.5192 13.6169 6.9752L11.3769 8.6024C11.2401 8.70163 11.1383 8.84161 11.0859 9.00228C11.0336 9.16296 11.0335 9.33607 11.0857 9.4968L11.9417 12.1304C12.1817 12.8672 11.3377 13.4808 10.7097 13.0248L8.46968 11.3976C8.33304 11.2984 8.16852 11.245 7.99968 11.245C7.83083 11.245 7.66631 11.2984 7.52968 11.3976L5.28968 13.0248C4.66248 13.4808 3.81928 12.8672 4.05848 12.1304L4.91448 9.4968C4.96662 9.33607 4.96652 9.16296 4.91421 9.00228C4.8619 8.84161 4.76005 8.70163 4.62328 8.6024L2.38408 6.976C1.75768 6.52 2.08008 5.528 2.85448 5.528H5.62328C5.79211 5.52805 5.95664 5.47467 6.0933 5.37552C6.22995 5.27637 6.33174 5.13652 6.38408 4.976L7.24008 2.3424L7.23928 2.3416Z" fill="#94A3B8"/>
                            </svg>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex p-1 items-end gap-2 self-stretch">
                <Input  label={"Add Comment"} placeholder={"comment here"}/>
                <Button text={"Post"}/>
            </div>
        </div>
    )
}