import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Movie as TMovie } from "../../models/Movie"
import { addMovie, getMovieById } from "../../firebase/firestore"
import { NavBar } from "../../components/molecules/NavBar"
import Input from "../../components/atoms/Input"
import { Loader } from "../../components/organisms/Loader"
import { Button } from "../../components/atoms/Button"
import { useAuth } from "../../firebase/auth"
import { admins } from "../../utils/admins"

export const AdminMovieDetails = () => {
    const id = useParams().id || ""
    const [movie, setMovie ] = useState<TMovie>()
    const [isMovieLoading, setIsMovieLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            const movie = await getMovieById(id)
            if(!movie){
                return
            }
            setMovie(movie)
        }
        if(id){
            fetchData()
        }
        setIsMovieLoading(false)
    },[])
    const {authUser} = useAuth()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const user:any = authUser
    if(isMovieLoading){
        return <Loader/>
    }
    if(user?.email && !admins.includes(user.email)) {
        return <>Unauthorized</>
    }
    if(!movie) {
        return <>Movie not found</>
    }

    const handleSave = async() => {
        await addMovie(id, movie)
        navigate(0)
    }
    return(
        <div className="flex flex-col w-full h-full min-h-screen bg-black text-white">
            <NavBar/>
            <div className="w-full h-full flex flex-col p-4 gap-8">
                <Input label={"Title"} placeholder={"Title"} value={`${valueVerifier(movie.title)}`} onChange={(e)=>setMovie({...movie, title:e.currentTarget.value})}/>
                <div>
                    <img className="flex max-w-xs aspect-[3/4]" src={`${valueVerifier(movie.image.portrait)}`} />
                    <Input label={"Image URL (portrait)"} placeholder={"URL"} value={`${valueVerifier(movie.image.portrait)}`} onChange={(e)=>setMovie({...movie, image:{...movie.image, portrait:e.currentTarget.value}})}/>
                </div>
                <div>
                    <img className="flex max-w-xs aspect-[4/3]" src={`${valueVerifier(movie.image.landscape)}`} />
                    <Input label={"Image URL (landscape)"} placeholder={"URL"} value={`${valueVerifier(movie.image.landscape)}`} onChange={(e)=>setMovie({...movie, image:{...movie.image, landscape:e.currentTarget.value}})}/>
                </div>
                <div>
                    <img className="flex max-w-xs aspect-[4/3]" src={`${valueVerifier(movie.image.header)}`} />
                    <Input label={"Image URL (header)"} placeholder={"URL"} value={`${valueVerifier(movie.image.header)}`} onChange={(e)=>setMovie({...movie, image:{...movie.image, header:e.currentTarget.value}})}/>
                </div>
                <Input label={"Genre"} placeholder={"Genre"} value={`${valueVerifier(movie.genre)}`} onChange={(e)=>setMovie({...movie, genre:e.currentTarget.value})}/>
                <Input label={"Description"} placeholder={"Description"} value={`${valueVerifier(movie.description)}`} onChange={(e)=>setMovie({...movie, description:e.currentTarget.value})}/>
                <Input label={"Directors"} placeholder={"Directors"} value={`${valueVerifier(movie.directors)}`} onChange={(e)=>setMovie({...movie, directors:e.currentTarget.value})}/>
                <Input label={"Duration"} placeholder={"Duration"} value={`${valueVerifier(movie.duration)}`} onChange={(e)=>setMovie({...movie, duration:e.currentTarget.value})}/>
                <Input label={"Language"} placeholder={"Language"} value={`${valueVerifier(movie.language)}`} onChange={(e)=>setMovie({...movie, language:e.currentTarget.value})}/>
                <Input label={"Caption"} placeholder={"Caption"} value={`${valueVerifier(movie.caption)}`} onChange={(e)=>setMovie({...movie, caption:e.currentTarget.value})}/>
                <Input label={"Rating"} placeholder={"Rating"} type="number" value={`${valueVerifier(movie.rating)}`} onChange={(e)=>setMovie({...movie, rating:Number(e.currentTarget.value)})}/>
                <Input className="w-full flex " label={"Released"} placeholder={"Released"} type="checkbox" value={`${valueVerifier(movie.released)}`} onChange={(e)=>setMovie({...movie, released:Boolean(e.currentTarget.value)})}/>
                <div>
                    <h1 className=" text-base leading-6 font-medium text-white">Cast</h1>
                    <Button text={"Add"} onClick={()=>{
                        setMovie({...movie, cast:[...movie.cast, {image:"", name:"", role:""}]})
                    }}/>
                    <div className="flex w-full overflow-x-auto gap-4">
                        {movie.cast.map((cast, index)=>(
                            <div className="flex flex-col w-48 min-w-[12rem] items-center">
                                <img className="flex rounded-full aspect-square w-24" src={cast.image} alt={cast.name}/>
                                <Input label={"image"} placeholder={"image"} value={`${valueVerifier(cast.image)}`} onChange={(e)=>setMovie({...movie, cast:[...movie.cast.slice(0,index), {...movie.cast[index], image:e.currentTarget.value}, ...movie.cast.slice(index+1)]})}/>
                                <Input label={"Name"} placeholder={"name"} value={`${valueVerifier(cast.name)}`} onChange={(e)=>setMovie({...movie, cast:[...movie.cast.slice(0,index), {...movie.cast[index], name:e.currentTarget.value}, ...movie.cast.slice(index+1)]})}/>
                                <Input label={"role"} placeholder={"role"} value={`${valueVerifier(cast.role)}`} onChange={(e)=>setMovie({...movie, cast:[...movie.cast.slice(0,index), {...movie.cast[index], role:e.currentTarget.value}, ...movie.cast.slice(index+1)]})}/>
                            </div>
                        ))}
                    </div>
                </div>
                <Button text={"Save"} onClick={handleSave}/>

            </div>

        </div>
    )
}

const valueVerifier = (value: string | undefined | unknown) => {
    if(!value){
        return ""
    }
    return value
}


export type Movie = {
    cast: Array<{image?: string, name:string, role?:string}>,
    comments: Array<Comment>,
    released: boolean
}