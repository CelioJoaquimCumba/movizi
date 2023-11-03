type FormLocation = {
    selected: boolean
    label: string
}

export const FormLocation = ({selected, label}: FormLocation) =>{
    return(
        <div className="flex flex-col items-center gap-1">
                <div className={`flex w-8 h-2 ${ selected ?"bg-slate-900" :"bg-white"} border-2 border-white rounded`}>
                </div>
            <span className="text-xs leading-4 font-normal text-center text-white">{label}</span>
        </div>
    )
}