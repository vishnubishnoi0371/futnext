"use client";
import { footerData, SocialMediaLinks } from "./Helper";
import Image from "next/image";
import { CommonButton } from "./commonbtn";
import Link from "next/link";
import React from 'react';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 5L15.5 12L8.5 19" stroke="#F4F4F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Footer = () => {
  return (
    <div className="relative">
      <div className="px-3">
        <div className="max-w-[784px] max-sm:min-h-[288px] relative border-t-[1px]  border-t-malachite z-40 translate-y-[40%] mx-auto  bg-light-green p-[24px_24px_24px_24px] sm:p-[24px_50px_24px_24px] lg:p-[24px_63px_24px_24px] flex flex-col  rounded-[32px]">
          <div className=" ">
            <p className="font-normal leading-121 text-darkgreen text-sm-13">FUTnext Subscription</p>
            <p className="text-2xl lg:text-3xxl text-white font-semibold leading-133 sm:leading-100 max-w-[190px] md:max-w-[290px] my-2">Get your subscription today</p>
            <p className="text-base font-normal text-white leading-121 max-w-[270px] lg:max-w-[340px] mb-3 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <CommonButton className="flex items-center gap-2  max-h-[48px] max-w-[168px] p-3 md:p-4 justify-center border border-transparent text-sm font-normal leading-121  text-white  bg-pigment hover:border-white" text="Subscribe Now " icon={<ArrowIcon />} />
          </div>
          <Image
            width={195}
            height={205}
            src="/assets/images/webp/newsletterImg.webp"
            alt="graph-img"
            className="mx-auto absolute md:mt-8 sm:mt-0 right-[6%] max-sm:w-[120px] max-sm:h-[125px] !sm:w-[145px] !sm:h-[175px] !lg:w-[195px] !lg:h-[205px] top-[3%] md:top-[1%] xl:top-[2%] md:mx-0"
          />

        </div>
      </div>
      <div className="bg-black relative z-10">
        <div className="max-w-[1328px] relative px-3 mx-auto pt-[154px]">
          <div className="lg:w-[880.13px] lg:h-[308px] md:w-[680.13px] md:left-[13%] md:h-[308px] sm:w-[580.13px] sm:left-[6%]  w-[280.13px] h-[308px] sm:h-[308px]  xl:w-[1081.13px] lg:left-[8%] xl:h-[308px] bg-gradient-green xl:left-[10%] blur-[120px] absolute top-[-2%] z-[-1] left-[%]  "></div>

          <div className="relative flex flex-col-reverse md:flex-row gap-10 justify-between">
            <div>
              <Link href="#" className="relative max-w-[194px] h-[48px] mb-4">
                <Image
                  width={195}
                  height={48}
                  src="/assets/images/svg/pageLogo.svg"
                  alt="graph-img"
                />
              </Link>
              <p className="font-normal mt-4 leading-121 text-light-white mb-6 max-w-[396px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className="flex justify-start items-center mb-10 gap-4">
                {SocialMediaLinks.map((link, index) => (
                  <div key={index} className="transform hover:-translate-y-2 duration-300">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </Link>
                  </div>
                ))}

              </div>
            </div>
            <ul className="flex justify-center  flex-col sm:flex-row md:justify-start  gap-4 md:gap-8 flex-wrap items-center">
              {footerData.slice(0, 5).map((obj, i) => (
                <li key={i} className="p-[7.5px_16px]">
                  <Link
                    className="font-normal text-lg duration-300 leading-121 text-light-white relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-5px] hover:after:left-0 hover:after:w-full after:bg-white after:duration-300 after:z-[-1]"
                    href={obj.to}
                  >
                    {obj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-white hidden sm:block border">
            <p className='text-xs sm:text-sm my-5 sm:my-8 xl:pb-4 text-center md:text-start font-normal text-light-white opacity-[50%] leading-121'>FUTnext {new Date().getFullYear()}, All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
