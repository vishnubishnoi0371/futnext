export const CommonButton = ({ text, className , icon = "", ...props }) => {
    return (
      <button
        className={`duration-300 flex rounded-[36px] leading-121 font-normal text-sm text-center ${className}`}
        {...props}
      >
        {text}{icon}
      </button>
    );
  };
  