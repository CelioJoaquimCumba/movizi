import { FormLocation } from "../atoms/FormLocation"

type LocationTrackProps = {
    index: 0|1|2
}
export const LocationTrack = ({index}:LocationTrackProps) => {
    return (
        <div className="flex px-8 items-start gap-4 rounded-2xl w-full justify-center">
            <FormLocation selected={index === 0} label={"Details"}/>
            <FormLocation selected={index === 1} label={"Booking"}/>
            <FormLocation selected={index === 2} label={"Payment"}/>
        </div>
    )
}