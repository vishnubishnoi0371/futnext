import { Clock } from "../common/Icon";
import { CommonButton } from "../common/commonbtn";

export default function PackCard(props) {
    return(
        <>
             <div className={`max-w-[376px] w-full borderGradient bg-eerie-black relative rounded-[36px] overflow-hidden z-[1] after:rounded-[36px] after:bg-green-gradient pr-9 p-4 ${props.class}`}>
        <p className={`text-sm-13 leading-[185%] tracking-[-0.04em] text-yellow-green font-normal ${props.color}`}>
{props.title}
        </p>
        <h5 className=" text-lg leading-[178%] text-bright-gray font-semibold tracking-[-0.04em]">
      {props.heading}
        </h5>
        <div className="flex justify-between  ">
          <div>
            <p className="text-sm-13 leading-[185%] text-bright-gray font-normal tracking-[-0.04em] mb-4">
            Average Return: 200K
            </p>
            <div className={`flex gap-2 items-center mb-2 ${props.className} `}>
            <Clock/>
              <p className="text-light-white text-sm-13 leading-121 font-normal tracking-[-0.04em]">
              1 Hour 32 Mins
              </p>
            </div>
            <div className="flex gap-2 items-center mb-2">
            <img
                src="/assets/images/svg/utCoin.svg"
                alt="coin"
                width="24"
                height="24"
              />
              <p className="text-light-white text-sm-13 leading-121 font-normal tracking-[-0.04em]">
              13,000 Coins
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <img
                src="/assets/images/svg/fcIcon.svg"
                alt="coin"
                width="24"
                height="24"
              />
              <p className="text-light-white text-sm-13 leading-121 font-normal tracking-[-0.04em]">
           125 FC Points
              </p>
            </div>
          </div>
          <img
            src={props.img}
            alt="shield"
            width="110"
            height="160"
            className="-translate-y-2.5"
          />
        </div>
        <CommonButton
          text="View Solutions"
          className="bg-pigment text-light-white text-sm leading-121 text-center tracking-[-0.04em] px-4 py-[15.5px]"
        />
        <div className={`w-[251.13px] h-[208px] bg-gradient-green blur-[50px] absolute top-[-40%] z-[-1] right-[18%] ${props.ellipsegradient}`}></div>
        <div className={`w-[260px] h-[260px] rounded-full bg-gradient-green rotate-[97deg] absolute bottom-[-28%] right-[-25%] ${props.ellipsegradient} z-[-1]`}></div>
      </div>
        </>
    )
}