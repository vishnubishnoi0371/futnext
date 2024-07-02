import React from 'react';
import { EyeOpen } from '../common/Icon';

const Inputs = ({ type, placeholder, inputuse, eyeclasses, value, onChange, togglePasswordVisibility, showPassword }) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-medium text-base leading-121 tracking-tighter text-light-white'>{inputuse}</p>
            <div className='w-full p-[15.5px_16px_19px_16px] max-h-[48px] rounded-[36px] bg-black-olive flex items-center justify-between'>
                <input
                    type={type}
                    placeholder={placeholder}
                    className='placeholder:font-normal w-full border-none outline-none bg-transparent placeholder:text-sm placeholder:tracking-tighter placeholder:text-light-white text-light-white font-normal leading-121 text-sm placeholder:opacity-40'
                    value={value}
                    onChange={onChange}
                />
                {inputuse === 'Password' && (
                    <span className={`${eyeclasses} ml-3 cursor-pointer`} onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeOpen /> : <EyeOpen />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Inputs;
