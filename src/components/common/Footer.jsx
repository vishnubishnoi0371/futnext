"use client";
import { footerData, SocialMediaLinks } from "./Helper";
import Image from "next/image";
import { CommonButton } from "./commonbtn";

const Footer = () => {
  return (
    <div className="relative">
      <div className="px-6">
        <div className="max-w-[784px] translate-y-[20%] sm:translate-y-[40%] mx-auto bg-light-green p-[24px_24px_24px_24px] sm:p-[24px_50px_24px_24px] lg:p-[24px_63px_24px_24px] flex flex-col sm:flex-row justify-between items-center rounded-[32px]">
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start">
            <p className="font-normal text-center sm:text-start text-darkgreen text-sm-13">FUTnext Subscription</p>
            <p className="text-2xl lg:text-3xxl text-center sm:text-start text-white font-semibold max-w-[290px] my-2">Get your subscription today</p>
            <p className="text-sm md:text-base text-center sm:text-start font-normal text-white max-w-[340px] mb-3 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <CommonButton className="flex p-[14px_20px] md:p-[16px_24px] justify-center border border-transparent hover:border-light-sky text-white hover:text-green bg-pigment hover:bg-light-sky" text="Subscribe Now >" />
          </div>
          <Image
            width={195}
            height={205}
            src="/assets/images/webp/newsletterImg.png"
            alt="graph-img"
            className="mx-auto mt-8 sm:mt-0 md:mx-0"
          />
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-[1328px] px-3 mx-auto pt-[154px]">
          <div className="flex flex-col md:flex-row gap-10 justify-between pb-10">
            <div>
              <a href="#" className="relative max-w-[194px] h-[48px] z-[51] mb-4">
                <Image
                  width={195}
                  height={48}
                  src="/assets/images/svg/pageLogo.svg"
                  alt="graph-img"
                  className="mx-auto md:mx-0"
                />
              </a>
              <p className="font-normal mt-4 text-center md:text-start mx-auto text-light-white mb-6 max-w-[396px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className="flex justify-center md:justify-start items-center md:mb-10 gap-4">
  {SocialMediaLinks.map((link, index) => (
    <div key={index} className="transform hover:-translate-y-2 duration-300">
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.icon}
      </a>
    </div>
  ))}
</div>

            </div>
            <ul className="flex gap-5 justify-center md:justify-start sm:gap-8 flex-wrap items-center">
              {footerData.slice(0, 5).map((obj, i) => (
                <li key={i} className="p-[7.5px_16px]">
                  <a
                    className="font-inter font-normal text-lg duration-300 text-light-white relative z-[1] after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-5px] hover:after:left-0 hover:after:w-full after:bg-white after:duration-300 after:z-[-1]"
                    href={obj.to}
                  >
                    {obj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
