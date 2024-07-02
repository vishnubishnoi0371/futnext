'use client'
import { useState } from "react";
import { CommonButton } from "../common/commonbtn";
import PacksContent from "./PacksContent";
import SbcsContent from "./SbcsContent";
import Player from "./Player";

export default function Header() {
    const [tab, setTab] = useState("tab1");

    function openNav(selectedTab) {
      setTab(selectedTab);
    }
    return(
        <div className="bg-vampire-black">
        <div className=" container max-w-[1624px] px-3 mx-auto pt-[120px] ">
            <h1 className="text-4xxl font-semibold leading-121 text-center text-transparent bg-clip-text bg-font-gradient mb-2">The <span className=" text-white">most accurate</span> <span className=" block">SBC solution and pack odds</span></h1>
            <p className="text-light-gray text-lg text-center font-normal leading-121 max-w-[550px] mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
            <div className=" flex justify-center gap-4 mb-20">
<CommonButton onClick={() => openNav("tab1")} text="SBC’s" className={`text-light-white bg-black-olive p-[14px_20px] md:p-[16px_24px] ${tab === "tab1"? "bg-pigment":""}`}/>
<CommonButton onClick={() => openNav("tab2")} text="Packs" className={`text-light-white bg-black-olive p-[14px_20px] md:p-[16px_24px] ${tab === "tab2"? "bg-pigment":""}`}/>
<CommonButton onClick={() => openNav("tab3")} text="Recent players" className={`text-light-white bg-black-olive p-[14px_20px] md:p-[16px_24px] ${tab === "tab3"? "bg-pigment":""}`}/>
            </div>
            {tab === "tab1" && (
      <SbcsContent/>
              )}
              {tab === "tab2" && (
 <PacksContent />
              )}
                   {tab === "tab3" && (
<Player/>
              )}
            
        </div>
        </div>
    )
}