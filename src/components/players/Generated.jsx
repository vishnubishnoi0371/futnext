"use client"
import { playersData } from '../common/Helper'
import Image from 'next/image'
import CommonHeader from './CommonHeader'
import { TabArrowLeft, TabArrowRight } from '../common/Icon'
import NavBar from '../common/NavBar'

const Generated = () => {
    return (
        <>
            <div className=' bg-vampire-black'>
                <CommonHeader />
                <div className='max-w-[1172px] max-md:max-w-[476px] min-[1536px]:max-w-[1344px] min-[1800px]:max-w-[1600px] mx-auto max-xl:px-4'>
                    <div className=' grid min-[1800px]:grid-cols-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {playersData.map((obj, index) => {
                            return (
                                <div key={index} className=' flex w-full justify-center'>
                                    <div className='bg-black-olive h-[72px] p-4 w-full rounded-3xl'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex flex-col'>
                                                <p className=' font-medium text-base text-white'>{obj.title}</p>
                                                <p className=' font-medium text-sm-13 leading-123 text-dark-white'>{obj.description}</p>
                                            </div>
                                            <div className=' flex items-center gap-2'>
                                                <Image src="/assets/images/svg/coinsImg.svg" alt='coin' height={32} width={32} />
                                                <p className=' font-medium text-base lh-[19.36px] text-light-white'>{obj.cost}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div class="flex justify-center rounded-[16px] gap-4 self-center items-center mx-auto mt-[56px] bg-grey-black h-[56px] w-[374px]">
                        <div
                            class="w-[24px] cursor-pointer duration-300 group h-[24px] rounded flex justify-center items-center hover:bg-dark-gray2">
                            <TabArrowLeft />
                        </div>
                        <div
                            class="w-[40px] cursor-pointer duration-200 h-[40px] group hover:bg-light-black rounded flex justify-center items-center">
                            <p class=" font-normal text-sm text-white opacity-60 group-hover:opacity-100 duration-200">1</p>
                        </div>
                        <div
                            class="w-[40px] cursor-pointer duration-300 h-[40px] rounded flex group hover:bg-light-black justify-center items-center">
                            <p class=" font-normal text-sm text-white opacity-60 group-hover:opacity-100 duration-200">2</p>
                        </div>
                        <div
                            class="w-[40px] cursor-pointer duration-300 h-[40px] rounded group hover:bg-light-black flex justify-center items-center">
                            <p class=" font-normal text-sm text-white opacity-60 group-hover:opacity-100 duration-200">3</p>
                        </div>
                        <div
                            class="w-[40px] cursor-pointer duration-300 h-[40px] rounded flex group hover:bg-light-black justify-center items-center">
                            <p class=" font-normal text-sm text-white opacity-60 group-hover:opacity-100 duration-200">4</p>
                        </div>
                        <div
                            class="w-[40px] cursor-pointer duration-300 h-[40px] rounded flex group hover:bg-light-black justify-center items-center">
                            <p class=" font-normal text-sm text-white opacity-60 group-hover:opacity-100 duration-200">5</p>
                        </div>
                        <div
                            class="w-[24px] cursor-pointer duration-200 h-[24px] group rounded flex justify-center items-center group">
                            <TabArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Generated