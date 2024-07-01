import { Clock, Repeat } from "../Icon";

export default function SbcsCards(props) {
    return(
        <>
        <div className="max-w-[376px] w-full border-gradient bg-black-olive relative rounded-[36px] after:rounded-[36px] after:bg-green-gradient p-4">
       <p className="text-sm-13 leading-121 tracking-[-0.04em] text-yellow-green font-normal ">Upgrades</p>
       <h5 className=" text-lg leading-[178%] text-bright-gray font-semibold tracking-[-0.04em]">Weekly 90+ TOTS Player Pick</h5>
       <div className="flex justify-between">
        <div>
            <p className="text-sm-13 leading-121 text-bright-gray font-normal tracking-[-0.04em] mb-4">Average Return: 200K</p>
            <div className="flex gap-2 items-center mb-2">
                <Repeat/>
                <p className="text-sonic-silver text-sm-13 leading-121 font-normal tracking-[-0.04em]">Non-Repeatable</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
         <Clock/>
                <p className="text-light-white text-sm-13 leading-121 font-normal tracking-[-0.04em]">6 Days Remaining</p>
            </div>
            <div className="flex gap-2 items-center ">
     <img src="/assets/images/svg/utCoin.svg" alt="coin" width="24" height="24" />
                <p className="text-light-white text-sm-13 leading-121 font-normal tracking-[-0.04em]">13,000 Cost</p>
            </div>
        </div>
        <img src="/assets/images/webp/upgradeshield1.webp" alt="shield" width="152" height="167" />
       </div>
        </div>
        </>
    )
}