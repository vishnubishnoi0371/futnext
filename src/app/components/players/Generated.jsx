import React from 'react'
import { playersData } from '../common/Helper'
import Image from 'next/image'
import CommonHeader from '@/components/common/CommonHeader'

const Generated = () => {
    return (
        <>
            <CommonHeader />
            <div className='max-w-[1172px] max-md:max-w-[476px] min-[1536px]:max-w-[1344px] min-[1800px]:max-w-[1600px] mx-auto max-xl:px-4'>
                <div className=' grid min-[1800px]:grid-cols-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {playersData.map((obj, index) => {
                        return (
                            <div className=' flex w-full justify-center'>
                                <div className='bg-black-olive h-[72px] p-4 w-full rounded-3xl'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <p className=' font-medium text-base text-white'>{obj.title}</p>
                                            <p className=' font-medium text-sm-13 leading-123 text-dark-white'>{obj.description}</p>
                                        </div>
                                        <div className=' flex items-center gap-2'>
                                            <Image src={obj.img} alt='coin' height={32} width={32} />
                                            <p className=' font-medium text-base lh-[19.36px] text-light-white'>{obj.cost}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Generated