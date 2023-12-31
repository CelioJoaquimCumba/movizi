type PaymentMethod = {
    text: string
    onClick?: () => void
}

export const PaymentMethod = ({text, onClick}: PaymentMethod) => {
    const handleClick = () => {
        onClick && onClick()
    }
    return(
        <div onClick={handleClick} className="flex w-full py-4 px-2 items-center gap-2 rounded bg-black hover:bg-slate-900 text-base leading-6 font-medium text-white">
            {text}
        </div>
    )
}