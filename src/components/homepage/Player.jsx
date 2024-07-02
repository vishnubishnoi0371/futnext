import { SearchIcon } from "../common/Icon";

export default function Player() {
    const images = new Array(40).fill(null); 
    return(
              <>
            <div className="lg:flex justify-between mb-10 items-center ">
<div className=" max-lg:mb-10">
    <h3 className=" text-light-white text-2xl leading-121 font-semibold tracking-[-0.04em] max-lg:text-center">Recent Players</h3>
    <p className="text-sm text-[#6B6B6B] leading-121 font-normal max-lg:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
</div>
<div className="flex gap-4 max-lg:justify-between">
<div className="flex items-center px-4 py-3 rounded-[36px] gap-2 w-[320px] border border-solid border-gray">
<SearchIcon/>
<input type="text" className="bg-transparent w-[90%] focus:outline-none placeholder:text-sm text-sm placeholder:text-dim-gray text-light-white leading-121 font-normal" placeholder="Search"/>
</div>
<div className="relative after:content-[url(/assets/images/svg/selectArrow.svg)] border border-solid border-gray w-[144px] after:absolute rounded-[36px] after:top-[25%] after:right-[10%] after:pointer-events-none">
    <select  name="latest" id="recent" className="bg-transparent focus:outline-none px-4 py-[15.5px] text-sm text-light-white leading-121 font-normal ">
        <option value="recent">Most Recent</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
    </select>
</div>
</div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 justify-center">
        {images.map((_, index) => (
        <div className=" 3xxl:!w-1/8 lg:w-1/6 sm:w-1/4 w-1/3 flex justify-center px-3 mb-8">
            <img
              key={index}
              src="/assets/images/webp/playerImg.webp"
              alt={`image-${index}`}
              className="" width={168} height={232}
            /> 
        </div>
      ))}
       </div>
        </>
    )
}