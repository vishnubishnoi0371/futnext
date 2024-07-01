"use client"
import React, { useState, useEffect } from "react";
import { navData } from "./Helper";
import Image from "next/image";


const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  useEffect(() => {
    if (navBarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navBarVisible]);

  return (
    <nav className="relative">
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="lg:px-[50px] p-2 sm:p-[15px] lg:py-[11px]  mt-5 flex justify-between items-center">
        <a href="#" className="relative z-[51]">
        <Image
                          width={106}
                          height={48}
                          src="/assets/images/svg/pageLogo.svg"
                          alt="graph-img"
                          className="w-full "
                        />
          </a>
          <ul className="hidden lg:flex gap-5 lg:gap-10 items-center">
            {navData.slice(0, 3).map((obj, i) => (
              <li key={i}>
                <a
                  className="font-plusJkarta block hover:text-gold duration-300 text-base leading-md font-normal text-black relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                  href={obj.to}
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
        
          <ul
            className={`flex gap-5 lg:gap-10 items-center fixed lg:static bg-white lg:bg-transparent w-full h-full lg:w-auto lg:h-auto flex-col lg:flex-row justify-center duration-300 z-50 left-0 ${navBarVisible ? "top-0" : "-top-full"
              }`}
          >
            {navData.map((obj, i) => (
              <li key={i} className={`${i < 3 && "lg:hidden"} `}>
                <a
                  onClick={() => setNavBarVisible(false)}
                  className="font-plusJkarta block hover:text-gold duration-300 text-base leading-md font-normal text-black relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                  href={obj.to}
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label="navshow-hide"
            onClick={() => setNavBarVisible(!navBarVisible)}
            className="lg:hidden relative z-50"
          >
            {navBarVisible ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[25px] h-[25px] sm:w-[45px] sm:h-[45px] cursor-pointer">
                <span className={`bg-black w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "rotate-45" : ""} transition-all duration-300`}></span>
                <span className={`bg-black w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "-rotate-45" : ""} transition-all duration-300`}></span>
              </div>
            ) : (
              <div className="flex lg:hidden flex-col justify-between w-[25px] h-[25px] sm:w-[45px] sm:h-[45px] cursor-pointer relative">
                <span className="bg-black w-1/2 h-[3px] sm:h-1 transition-all duration-300"></span>
                <span className="bg-black w-full h-[3px] sm:h-1 transition-all duration-300"></span>
                <span className="bg-black w-1/2 h-[3px] sm:h-1 ml-auto transition-all duration-300"></span>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;