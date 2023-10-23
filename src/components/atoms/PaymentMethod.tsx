type PaymentMethod = {
    text: string
}

export const PaymentMethod = ({text}: PaymentMethod) => {
    return(
        <div className="flex w-full py-4 px-2 items-center gap-2 rounded bg-black hover:bg-slate-900 text-base leading-6 font-medium text-white">
            {text}
        </div>
    )
}