type FormLocation = {
    selected: boolean
    label: string
}

export const FormLocation = ({selected, label}: FormLocation) =>{
    return(
        <div className="flex flex-col items-center gap-2">
            {selected ?
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <circle cx="8.5" cy="8" r="6" fill="#0F172A" stroke="white" strokeWidth="4"/>
                </svg>
            :
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <circle cx="8.5" cy="8" r="8" fill="white"/>
                </svg>
            }
            <span className="text-xs leading-4 font-normal text-center text-white">{label}</span>
        </div>
    )
}