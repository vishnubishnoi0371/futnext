import { SbcsList } from "../common/Helper";
import { SearchIcon } from "../common/Icon";
import SbcsCards from "./SbcsCards";

export default function SbcsContent() {
    return(
        <>
        <div className="lg:flex justify-between mb-10 items-center">
<div className=" max-lg:mb-10">
    <h3 className=" text-light-white text-2xl leading-121 font-semibold tracking-[-0.04em] max-lg:text-center">Squad Building Challenges</h3>
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
    SbcsList.map((item,i) =>(
        <div key={i}   className={`2xxl:w-1/4 md:w-1/2 w-full px-3 flex justify-center  ${i % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}>
            <SbcsCards discription={item.discription} title={item.title} heading={item.heading} cost={item.cost} img={item.img} class={`${item.title==='Exchanges' ? " after:bg-gradient-yellow" : ""} ${item.title ==='Foundation'? "after:!bg-blue-gradient":''} ${item.title==='Icons'? "after:bg-purple-gradient":""} ${item.title === 'Challenges'?"after:bg-grey-gradient":""} ${item.title==="Players"?"after:bg-musturd-gradient":""} ${i > 13 ? "mb-0":"mb-8"} ${i > 11 ? "mb-8 2xxl:mb-0":"mb-8"}`} ellipsegradient={` ${item.title ==='Exchanges'? ' bg-gradient-yellow':''} ${item.title === 'Foundation'? "!bg-blue-gradient":""} ${item.title==='Icons'? "bg-purple-gradient":""} ${item.title === 'Challenges'?"bg-grey-gradient":""} ${item.title==="Players"?"bg-musturd-gradient":""}
            `} color={`${item.title==='Foundation' ? "!text-blue":""} ${item.title==='Icons'?"!text-purple":""} ${item.title==="Challenges"?"!text-silver-sand":""} ${item.title==='Players'?"!text-mustard":""}`}/>
        </div>
    )
    )
}
        </div>
        </>
    )
}