"use client";
import React, { useState, useEffect } from "react";
import { navData } from "./Helper";
import Image from "next/image";
import { CommonButton } from "./commonbtn";
import Link from "next/link";
import { NavArrow } from "./Icon";

const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (navBarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navBarVisible]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="relative !bg-green">
      <div className="max-w-[1600px] py-3 lg:py-6 mx-auto px-3">
        <div className="lg:px-[50px] p-2 sm:p-[15px] lg:py-[11px] flex justify-between items-center">
          <div className="flex gap-[78px]">
            <Link href="/" className="relative z-[51]">
              <Image
                width={195}
                height={48}
                src="/assets/images/svg/pageLogo.svg"
                alt="graph-img"
                className="!w-[170px] !h-[44px] md:w-[195px] md:h-[48px]"
              />
            </Link>
            <ul className="hidden lg:flex gap-5 lg:gap-4 xl:gap-6 items-center">
              {navData.slice(0, 5).map((obj, i) => (
                <li key={i} className="relative group">
                  {obj.name === "Packs" ? (
                    <>
                      <Link
                        href={obj.to}
                        className="font-normal hover:bg-moss-green rounded-[36px] p-[7.5px_16px] text-xs lg:text-sm block duration-300 text-light-white relative z-[1] after:absolute after:w-0 leading-121 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1] flex items-center"
                        onClick={toggleDropdown}
                      >
                        {obj.name}
                        <span
                          className={`ml-2 transform ${dropdownVisible ? "rotate-180" : "rotate-0"
                            } transition-transform duration-300`}
                        >
                          <NavArrow />
                        </span>
                      </Link>
                      {dropdownVisible && (
                        <ul className="absolute left-0 mt-2 w-[86px] text-center bg-light-sky border border-gray-200 rounded-lg shadow-lg z-50">
                          <li className="p-2 hover:bg-gray-200">
                            <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                              Pack 1
                            </Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200">
                            <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                              Pack 2
                            </Link>
                          </li>
                          <li className="p-2 hover:bg-gray-200">
                            <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                              Pack 3
                            </Link>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={obj.to}>
                      <Link href="#"
                        className="font-normal hover:bg-moss-green rounded-[36px] p-[7.5px_16px] text-xs lg:text-sm block duration-300 text-light-white relative z-[1] after:absolute after:w-0 leading-121 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                      >
                        {obj.name}
                      </Link>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <CommonButton
              className="p-[14px_20px] max-w-[96px] max-h-[48px] md:p-[16px_24px] justify-center border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky"
              text="Discord"
            />
            <CommonButton
              className="p-[14px_20px] md:p-[16px_24px] max-h-[48px] max-w-[96px] sm:max-w-[88px] border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky"
              text="Login"
            />
          </div>
          <button
            aria-label="navshow-hide"
            onClick={() => setNavBarVisible(!navBarVisible)}
            className="lg:hidden relative z-[80]"
          >
            {navBarVisible ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[25px] h-[25px] sm:w-[45px] sm:h-[35px] cursor-pointer">
                <span
                  className={`bg-white w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "rotate-45" : ""
                    } transition-all duration-300`}
                ></span>
                <span
                  className={`bg-white w-full h-[3px] sm:h-1 absolute top-[50%] left-[50%] transform ${navBarVisible ? "-rotate-45" : ""
                    } transition-all duration-300`}
                ></span>
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
            className={`flex flex-col justify-center items-center gap-5 z-[70] leading-121 lg:hidden bg-dark-green w-full h-full fixed top-0 left-0 transition-transform duration-300 ${navBarVisible ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            {navData.map((obj, i) => (
              <li key={i}>
                {obj.name === "Packs" ? (
                  <>
                    <button
                      className="font-normal hover:bg-moss-green rounded-[36px] p-[7.5px_16px] text-xs lg:text-sm block  duration-300 text-light-white relative z-[1] after:absolute after:w-0 leading-121 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1] flex items-center"
                      onClick={toggleDropdown}
                    >
                      {obj.name}
                      <span
                        className={`ml-2 transform ${dropdownVisible ? "rotate-180" : "rotate-0"
                          } transition-transform duration-300`}
                      >
                        <NavArrow />
                      </span>
                    </button>
                    {dropdownVisible && (
                      <ul className="mt-2 text-center bg-light-sky border border-gray-200 rounded-lg shadow-lg z-50">
                        <li className="p-2 hover:bg-gray-200">
                          <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                            Pack 1
                          </Link>
                        </li>
                        <li className="p-2 hover:bg-gray-200">
                          <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                            Pack 2
                          </Link>
                        </li>
                        <li className="p-2 hover:bg-gray-200">
                          <Link href="/" className="text-dark-green" onClick={closeDropdown}>
                            Pack 3
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={obj.to}>
                    <Link href=""
                      className="font-normal text-sm block  duration-300 text-light-white relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                    >
                      {obj.name}
                    </Link>
                  </Link>
                )}
              </li>
            ))}
            <div className="block sm:hidden">
              <div className="flex items-center gap-4 ">
                <CommonButton
                  className="flex p-[14px_20px] max-w-[96px] max-h-[48px] md:p-[16px_24px] justify-center border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky"
                  text="Discord"
                />
                <CommonButton
                  className="p-[14px_20px] md:p-[16px_24px] max-h-[48px] max-w-[96px] sm:max-w-[88px] border border-white hover:border-light-sky text-white hover:text-green bg-transparent hover:bg-light-sky"
                  text="Login"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
