import { CommonButton } from "../commonbtn";
import SbcsContent from "./SbcsContent";

export default function Header() {
    return(
        <div className="bg-vampire-black">
        <div className=" container max-w-[1624px] px-3 mx-auto ">
            <h1 className="text-4xxl font-semibold leading-121 text-center text-transparent bg-clip-text bg-font-gradient mb-2">The <span className=" text-white">most accurate</span> <span className=" block">SBC solution and pack odds</span></h1>
            <p className="text-light-gray text-lg text-center font-normal leading-121 max-w-[550px] mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
            <div className=" flex justify-center gap-4 mb-20">
<CommonButton text="SBC’s" className={`text-light-white bg-black-olive`}/>
<CommonButton text="Packs" className={`text-light-white bg-black-olive`}/>
<CommonButton text="Recent players" className={`text-light-white bg-black-olive`}/>
            </div>
            <SbcsContent/>
        </div>
        </div>
    )
}