import { Movie } from "../../models/Movie"
import { Button } from "../atoms/Button"

type CardMovie = {
    type?: "default" | "rank",
    orientation? : "vertical" | "horizontal"
} & Movie
export const CardMovie = ({image, title, genre, duration, language, ranking, orientation = "vertical", type = "default"}: CardMovie) => {
    return(
        <div style={{ backgroundImage: `url(${type === "default" || orientation === "vertical" ? image.portrait: image.landscape}})`, backgroundSize: "cover" }} className={` ${type === "default" || orientation === "vertical" ? "aspect-[3/4]" : "aspect-[4/3]"} rounded-lg h-72 flex flex-col justify-end hover:cursor-pointer`}>
                { type === "default" ?
                    <div className={`flex h-full rounded-lg  p-1 flex-col justify-end items-center gap-2 flex-shrink-0  ${type === "default" && "bg-gradient-to-t from-black hover:from-slate-900 to-transparent"}`}>
                        <div className="flex flex-col justify-end items-center gap-2 self-stretch">
                            <span className="text-sm leading-5 font-semibold text-white text-center">{title}</span>
                            <span className="text-xs leading-4 font-normal text-white text-center">{genre} | {duration} | {language}</span>
                            <Button text="Get Ticket"/>
                        </div>
                    </div>
                :
                <div className={`flex h-fit p-2 ${ orientation === "vertical" ? "flex-col" : "flex-row"} justify-end items-start gap-2 self-stretch rounded-b-lg bg-black bg-opacity-75`}>
                    <span className="text-2xl leading-8 font-black text-white">{ranking}</span>
                    <div className={`${ orientation === "vertical" ? "w-8 h-1" : "w-1 h-8"} border-2 border-white`}></div>
                    <span className="text-lg leading-7 font-semibold w-full text-white flex-grow">{title}</span>
                </div>
                }
        </div>
    )
}