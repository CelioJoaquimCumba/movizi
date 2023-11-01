type MovieAspects = {
    heading: string,
    text: string
}

export const MovieAspects = ({heading, text}: MovieAspects) => {
    return(
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className=" text-xl leading-7 font-semibold text-white">{heading}</h1>
            <p className="text-white self-stretch text-sm leading-5 font-normal">{text}</p>
        </div>
    )
}