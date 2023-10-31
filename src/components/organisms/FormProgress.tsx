import { LocationTrack } from "../molecules/LocationTrack"
type FormProgress = {
    index: 0|1|2
}
export const FormProgress = ({index}:FormProgress) => {
    return (
        <div className="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M13.3333 25.3334L4 16M4 16L13.3333 6.66669M4 16H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <LocationTrack index={index}/>
        </div>
    )
}