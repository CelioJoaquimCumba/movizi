import { Movie } from "../../models/Movie"
import { Rating } from "../atoms/Rating"

export const MovieDetails = ({title, image, rating, genre, duration, language, description, directors, caption}: Movie) => {
    return(
        <div className="flex justify-start items-start gap-2 w-full">
            <img className="w-64 aspect-[3/4] rounded-2xl" src={image.portrait} alt={`${title} poster`}/>
            <div className="flex flex-col items-center gap-4 flex-grow">
                <div className="flex items-start gap-2 self-stretch">
                    <span className="text-3xl leading-0 font-semibold text-white flex-grow">{title}</span>
                    <Rating rating={rating ? rating : 0}/>
                </div>
                <span className="text-base leading-6 font-normal text-white w-full ">{genre} | {duration}</span>
                <span className="text-base leading-6 font-normal text-white w-full">{description}</span>
                <span className="text-base leading-6 font-normal text-white w-full">Directed by: {directors}</span>
                <div className="flex justify-center items-start gap-4 self-stretch">
                    <span className="text-base leading-6 font-normal text-white w-full">Spoken Language: {language}</span>
                    <span className="text-base leading-6 font-normal text-white w-full">Caption: {caption}</span>
                </div>
            </div>
        </div>
    )
}