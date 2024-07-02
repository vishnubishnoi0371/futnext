"use client"
import { ButtonArrow } from "./Icon";

export const PrimaryButton = ({ text, className = "", ...props }) => {
    return (
        <button
            className={`duration-300 gap-2 bg-pigment_green flex rounded-3xl font-inter font-normal items-center text-sm leading-md p-[10px_14px] md:p-[12px_16px] text-center ${className}`}
            {...props}
        >
            {text} <ButtonArrow />
        </button>
    );
};
