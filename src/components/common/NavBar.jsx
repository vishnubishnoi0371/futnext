"use client";
import React, { useState, useEffect } from "react";
import { navData } from "./Helper";
import Image from "next/image";
import { CommonButton } from "./commonbtn";

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
    <nav className="relative !bg-green">
      <div className="max-w-[1600px] mx-auto px-3">
        <div className="lg:px-[50px] p-2 sm:p-[15px] lg:py-[11px] flex justify-between items-center">
          <div className="flex gap-[78px]">
            <a href="#" className="relative z-[51]">
              <Image
                width={195}
                height={48}
                src="/assets/images/svg/pageLogo.svg"
                alt="graph-img"
                className="w-full"
              />
            </a>
            <ul className="hidden lg:flex gap-5 lg:gap-6 items-center">
              {navData.slice(0, 4).map((obj, i) => (
                <li key={i}>
                  <a
                    className="font-inter font-normal hover:bg-moss-green rounded-[36px] p-[7.5px_16px] text-xs lg:text-sm block hover:text-gold duration-300 text-light-white relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                    href={obj.to}
                  >
                    {obj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-4">
              <CommonButton className="flex p-[14px_20px] md:p-[16px_24px] justify-center border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky" text="Discord" />
              <CommonButton className="p-[14px_20px] md:p-[16px_24px] border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky" text="Login" />
            </div>
          </div>
          <button
            aria-label="navshow-hide"
            onClick={() => setNavBarVisible(!navBarVisible)}
            className="lg:hidden relative z-100"
          >
            {navBarVisible ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[25px] h-[25px] sm:w-[45px] sm:h-[35px] cursor-pointer">
                <span className={`bg-white w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "rotate-45" : ""} transition-all duration-300`}></span>
                <span className={`bg-white w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "-rotate-45" : ""} transition-all duration-300`}></span>
              </div>
            ) : (
              <div className="flex lg:hidden flex-col justify-between w-[25px] h-[25px] sm:w-[45px] sm:h-[35px] cursor-pointer relative">
                <span className="bg-white w-1/2 h-[3px] sm:h-1 transition-all duration-300"></span>
                <span className="bg-white w-full h-[3px] sm:h-1 transition-all duration-300"></span>
                <span className="bg-white w-1/2 h-[3px] sm:h-1 ml-auto transition-all duration-300"></span>
              </div>
            )}
          </button>
          <ul
            className={`flex flex-col items-center gap-5 lg:hidden bg-dark-green w-full h-full fixed top-0 left-0 transition-transform duration-300 ${navBarVisible ? "translate-y-0" : "-translate-y-full"}`}
          >
            {navData.map((obj, i) => (
              <li key={i}>
                <a
                  onClick={() => setNavBarVisible(false)}
                  className="font-inter font-normal text-sm block hover:text-gold duration-300 text-light-white relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                  href={obj.to}
                >
                  {obj.name}
                </a>
              </li>
            ))}
            <div className="sm:hidden block">
              <div className="flex items-center gap-4">
                <CommonButton className="flex p-[14px_20px] md:p-[16px_24px] justify-center border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky" text="Discord" />
                <CommonButton className="flex p-[14px_20px] md:p-[16px_24px] justify-center border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky" text="Login" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
