import { useState } from "react"
import Input from "../atoms/Input"
import { PaymentType } from "../molecules/PaymentTypes"


export const Payments = () => {
    const paymentType = ["Credit Card" , "Mpesa", "E-mola"]
    const [selected, setSelected] = useState(paymentType[0])
    const handleSelection = (selected:string) => {
        setSelected(selected)

    }
    return(
        <div className="flex flex-col items-start gap-2 w-full">
            <span className="text-base leading-6 font-medium text-white">Payment</span>
            <PaymentType PaymentTypes={paymentType} onClick={(selected)=>handleSelection(selected)}/>
            {selected === "Credit Card" ? 
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <Input maxLength={16} pattern="[0-9]*" type="number" label={"Credit Card Number"} placeholder={"0000 0000 0000 0000"}/>
                    <div className="flex flex-col md:flex-row flex-end gap-2 self-stretch">
                        <Input type="tel" pattern="[0-9]*" maxLength={4} label={"Expiry Date"} placeholder={"MM/YY"}/>
                        <Input maxLength={3} type="tel" pattern="[0-9]" label={"CVV"} placeholder={"000"}/>
                    </div>
                </div>
                :
                <Input maxLength={9} type="tel" pattern="[0-9]*" label={`${selected} Number`} placeholder={"8X XXXX XXXX"}/>
            }

        </div>
    )
}