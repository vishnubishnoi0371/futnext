import React from 'react'
import { EyeOpen } from '../Icon'

const Inputs = (props) => {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-base leading-121 tracking-tighter text-light-white'>{props.inputuse}</p>
                <div className='w-full p-[15.5px_16px_19px_16px] max-h-[48px] rounded-[36px] bg-black-olive flex items-center justify-between'>
                <input type={props.type} placeholder={props.placeholder} className='placeholder:font-normal w-full border-none outline-none bg-transparent placeholder:text-sm placeholder:tracking-tighter placeholder:text-light-white text-light-white font-normal leading-121 text-sm placeholder:opacity-40 ' />
                <span className={`${props.eyeclasses} ml-3 cursor-pointer`}><EyeOpen/></span>
                </div>
            </div>
        </>
    )
}

export default Inputs