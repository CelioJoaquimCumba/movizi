export type Comment = {
    id: string,
    text: string,
    timeStamp: string,
    username: string,
    profileImage: string
    comments: Comment[]
}