"use client"
import { Cost, Nonrepeat, Saturated, Timer } from '../common/Icon'
import { PrimaryButton } from '../common/PrimaryButton'
import NavBar from '../common/NavBar'
import Image from 'next/image'

const CommonHeader = () => {
    return (
        <>
            <NavBar />
            <div className='pt-16 bg-vampire-black'>
                <div className='max-w-[1056px] mx-auto max-[2000px]:px-4'>
                    <div className=' flex flex-row flex-wrap justify-between'>
                        <div className='w-8/12'>
                            <p className=' font-medium text-base text-malachite'>85 Rated Squad</p>
                            <h2 className='text-4xl font-semibold text-light-white leading-155'>Weekly 90+ TOTS Player Pick <span className='text-light-gray text-base'>(Avg Return 200,00K)</span></h2>
                            <p className='text-base font-normal text-light-gray leading-200'>Earn 1 of 3 rare gold players rated 85 overall or higher</p>
                            <div className='my-6 gap-2 flex flex-col max-w-[270px]'>
                                <div className='flex items-center gap-2 group'>
                                    <Nonrepeat  />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>Non-Repeatable</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Timer  />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>6 Days Remaining</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Cost  />
                                    <p className='text-light-white text-base group-hover:opacity-60 duration-300 font-normal'>13,000 Cost</p>
                                </div>
                                <div className='flex items-center gap-2 group'>
                                    <Saturated  />
                                    <p className='text-light-white text-nowrap text-base group-hover:opacity-60 duration-300 font-normal'>14,708 Solutions Generated</p>
                                </div>
                            </div>
                            <PrimaryButton className='text-sm font-normal text-light-white' text="Generate Unique Solutions" />
                        </div>
                        <div className=' w-[4/12]'>
                            <Image src="/assets/images/webp/globalPlate.png" alt='global' width={320} height={356}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonHeader