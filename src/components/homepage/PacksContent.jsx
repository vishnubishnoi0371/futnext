import { PacksList } from "../common/Helper";
import { SearchIcon } from "../common/Icon";
import PackCard from "./PackCard";

export default function PacksContent() {
    return(
        <>
            <div className="lg:flex justify-between mb-10 items-center">
<div className="max-lg:mb-10">
    <h3 className=" text-light-white text-2xl leading-121 font-semibold tracking-[-0.04em] max-lg:text-center">Packs</h3>
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
        <div className="flex flex-row flex-wrap -mx-3">
            {
                PacksList.map((item,i)=>(
                    <div key={i}   className={`2xxl:w-1/4 md:w-1/2 w-full px-3 flex justify-center  ${i % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}><PackCard title={item.title} className={`${item.title==="Classic Packs"?"hidden":""}`} img={item.img} heading={item.heading} color={`${item.title==='Active Promo Packs' ? 'text-mustard':''} ${item.title==="Expired Packs"?"text-silver-sand":""}`} class={`${item.title ==='Active Promo Packs'? ' after:bg-musturd-gradient':''} ${item.title==="Expired Packs"?"after:bg-grey-gradient":""} ${i > 13 ? "mb-0":"mb-8"} ${i > 11 ? "mb-8 2xxl:mb-0":"mb-8"}`} ellipsegradient={` ${item.title ==='Active Promo Packs'? ' bg-musturd-gradient':''} ${item.title==="Expired Packs"?"bg-grey-gradient":""} `} /></div>
                  
                ))
            }
       </div>
        </>
    )
}