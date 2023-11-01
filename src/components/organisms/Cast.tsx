import { CastMember } from "../atoms/CastMember"

type Cast =  {
    cast : CastMember[]
}
export const Cast = ({cast}: Cast) => {
    return (
        <div className="flex flex-col items-start justify-center w-full">
            <span className="text-3xl leading-9 font-semibold text-white">Cast</span>
            <div className="flex items-start gap-4 self-stretch overflow-auto">
                {cast.map((member) => {
                    return (
                        <CastMember key={member.name} image={member.image} name={member.name} role={member.role}/>
                    )
                })}
            </div>

        </div>
    )
}