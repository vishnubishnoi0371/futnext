export const CommonButton = ({ text, className = "", ...props }) => {
    return (
      <button
        className={`duration-300 flex rounded-[36px] font-inter font-normal text-sm text-center ${className}`}
        {...props}
      >
        {text}
      </button>
    );
  };
  