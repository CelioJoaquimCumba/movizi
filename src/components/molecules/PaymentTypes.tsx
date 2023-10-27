import { useState } from "react"
import { PaymentMethod } from "../atoms/PaymentMethod"

type PaymentType = {
    PaymentTypes : string[]
    onClick: (selected:string) => void
}

export const PaymentType = ({PaymentTypes, onClick}: PaymentType) => {
    const [selected, setSelected] = useState(PaymentTypes[0])
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(isOpen => !isOpen)
    const handleSelected = (index: number) => {
        handleOpen()
        setSelected(PaymentTypes[index])
        onClick(PaymentTypes[index])
    }
    return(
        <div className="flex flex-col  items-center rounded border-2 border-slate-700 bg-black text-white  w-full">
            <div className="flex justify-center items-center flex-grow w-full hover:bg-slate-800 px-2" onClick={handleOpen}>
                <div className="flex w-full py-4 px-2 items-center gap-2 rounded bg-black hover:bg-slate-900 text-base leading-6 font-medium text-white">
                    {selected}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className={`transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                }`}>
                    <path d="M22.1668 10.5L14.0002 18.6667L5.8335 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {/* main */}
            {isOpen && 
                <div className="flex p-2 flex-col justify-center items-start gap-1 self-stretch bg-black">
                    {PaymentTypes.map((PaymentType, index)=> <PaymentMethod key={PaymentType} onClick={() => handleSelected(index)} text={PaymentType} />)}
                </div>
            }
        </div>
    )
}