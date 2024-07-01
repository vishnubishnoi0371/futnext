"use client"
import { Cost, Nonrepeat, Saturated, Timer } from '../common/Icon'
import { PrimaryButton } from '../common/PrimaryButton'
import Image from 'next/image'

const CommonHeader = () => {
    return (
        <>
            <div className='pt-16 bg-vampire-black pb-[106px]'>
                <div className='max-w-[1056px] mx-auto max-[2000px]:px-4  relative z-[1]'>
                    <div className=' flex flex-row flex-wrap justify-between'>
                        <div className='w-8/12'>
                            <p className=' font-medium text-base text-malachite'>85 Rated Squad</p>
                            <h2 className='text-4xl font-semibold !tracking-[-0.25px] text-light-white leading-155'>Weekly 90+ TOTS Player Pick <span className='text-light-gray font-normal text-base'>(Avg Return 200,00K)</span></h2>
                            <p className='text-base font-normal text-light-gray leading-200'>Earn 1 of 3 rare gold players rated 85 overall or higher</p>
                            <div className='my-6 gap-2 flex flex-col max-w-[270px]'>
                                <div className='flex items-center gap-2 group'>
                                    <Nonrepeat />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>Non-Repeatable</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Timer />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>6 Days Remaining</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Cost />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>13,000 Cost</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Saturated />
                                    <p className='text-light-white text-nowrap text-base group-hover:opacity-60 duration-300 font-normal'>14,708 Solutions Generated</p>
                                </div>
                            </div>
                            <PrimaryButton className="text-sm font-normal text-light-white !tracking-[-0.24px]" text="Generate Unique Solutions" />
                        </div>
                        <div className=' w-[4/12]'>
                            <Image src="/assets/images/webp/trianglesImg.png" alt='triangles' width={597} height={475} className=' absolute top-[-38px] z-[-1] right-[-140px] max-w-[597px] w-full' />
                            <Image src="/assets/images/webp/globalPlate.png" alt='global' width={320} height={356} />
                            <div className='w-[228px] h-[228px] rounded-full blur-[100px] absolute top-[60px] z-[-1] right-[40px] bg-malachite'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonHeader