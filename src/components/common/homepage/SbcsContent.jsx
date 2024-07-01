import { SearchIcon } from "../Icon";

export default function SbcsContent() {
    return(
        <>
        <div className="flex justify-between">
<div>
    <h3 className=" text-light-white text-2xl leading-121 font-semibold tracking-[-0.04em]">Squad Building Challenges</h3>
    <p className="text-sm text-[#6B6B6B] leading-121 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
</div>
<div className="flex gap-4">
<div className="flex items-center px-4 py-3 rounded-[36px] gap-2 w-[320px] border border-solid border-gray">
<SearchIcon/>
<input type="text" className="bg-transparent focus:outline-none placeholder:text-sm text-sm text-[#6B6B6B] leading-121 font-normal" placeholder="Search"/>
</div>
</div>
        </div>
        </>
    )
}