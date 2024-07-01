export const CommonButton = ({ text, className = "", ...props }) => {
    return (
      <button
        className={`duration-300 flex rounded-[36px] font-inter font-normal text-sm leading-md p-[14px_20px] md:p-[16px_24px] text-center ${className}`}
        {...props}
      >
        {text}
      </button>
    );
  };
  