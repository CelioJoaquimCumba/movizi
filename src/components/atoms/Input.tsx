import React from 'react';

type Input = {
    label : string,
    placeholder: string,


} & React.HTMLProps<HTMLInputElement>
const Input = ({label, placeholder,...props}: Input) => {
    return (
        <div className='flex flex-col items-start gap-1 rounded'>
            <label className='text-sm leading-5 font-normal text-white'>{label}</label>
            <input placeholder={placeholder} {...props} className='flex py-4 px-2 justify-between items-center self-stretch rounded bg-black hover:bg-slate-900 text-sm leading-5 font-normal text-white placeholder-gray-400' />
        </div>
    )
}

export default Input;
