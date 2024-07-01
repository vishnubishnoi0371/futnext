"use client"
import { ButtonArrow } from "./Icon";

export const PrimaryButton = ({ text, className = "", ...props }) => {
    return (
        <button
            className={`duration-300 gap-2 bg-pigment_green flex rounded-3xl font-inter font-normal text-sm leading-md p-[14px_20px] md:p-[16px_24px] text-center ${className}`}
            {...props}
        >
            {text} <ButtonArrow />
        </button>
    );
};
