"use client"
import { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icon";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed sm:bottom-12 bottom-4 hover:scale-110 right-4 sm:w-12 sm:h-12 w-9 h-9 bg-dark-green shadow-[0_2px_20px_-9px_#fff] text-white flex justify-center items-center group rounded-full z-50 transition-all duration-300 ease-linear ${
        isBackToTopVisible ? " translate-y-0" : " translate-y-[200%]"
      }`}

    >
      <span>
        <BackToTopIcon />
      </span>
    </button>
  );
};
export default BackToTop;
