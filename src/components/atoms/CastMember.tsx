export type CastMember = {
    image: string,
    name: string,
    role: string
}

export const CastMember = ({image, name, role}: CastMember) => {
    return(
        <div className="flex p-2 flex-col items-center gap-2 rounded-md">
            <img className="w-24 rounded-full aspect-square object-cover" src={image} alt={name}/>
            <span className="text-white text-base leading-6 font-normal whitespace-nowrap">{role}</span>
            <span className="text-sm leading-5 font-normal text-gray-300 whitespace-nowrap">{name}</span>
        </div>
    )
}