import { SearchIcon } from "../Icon";

export default function SbcsContent() {
    return(
        <>
        <div className="flex justify-between">
<div>
    <h3 className=" text-light-white text-2xl leading-121 font-semibold tracking-[-0.04em]">Squad Building Challenges</h3>
    <p className="text-sm text-[#6B6B6B] leading-121 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
</div>
<div className="flex">
<div className="flex px-4 py-3 gap-2 max-w-[320px] border border-solid border-gray">
<SearchIcon/>
</div>
</div>
        </div>
        </>
    )
}