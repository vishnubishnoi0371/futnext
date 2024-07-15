"use client"
import { EyeClose, EyeOpen } from './Icon';

const Inputs = ({ type, placeholder, inputuse, eyeclasses, value, onChange, togglePasswordVisibility, showPassword }) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-medium text-base '>{inputuse}</p>
            <div className='w-full  max-h-[48px] rounded-[36px]  flex items-center justify-between'>
                <input
                    type={type}
                    placeholder={placeholder}
                    className='placeholder:font-normal w-full border p-2 outline-none bg-transparent placeholder:text-sm placeholder:tracking-tighter placeholder:text-light-white text-light-white font-normal leading-121 text-sm placeholder:opacity-40'
                    value={value}
                    onChange={onChange}
                />
                {inputuse === 'Password' && (
                    <span className={`${eyeclasses} ml-3 cursor-pointer`} onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeOpen /> : <EyeClose />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Inputs;
