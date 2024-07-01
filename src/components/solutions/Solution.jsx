import Link from 'next/link'
import React from 'react'
import { LeftArrow } from '../common/Icon'
import { rateingList } from '../common/Helper'

const Solution = () => {
  return (
    <div className='bg-vampire-black'>
      <div className='max-w-[1632px] mx-auto px-4 pt-[72px]'>
        <Link href="/" className='flex gap-1 py-1 items-center text-light-white font-normal text-base'>
          <span><LeftArrow /></span> Back
        </Link>
        <div className='flex gap-8 justify-center items-start'>
          <div className='flex w-9/12 justify-between items-center'>
            <div className='flex flex-col w-full'>
              <p className='font-medium text-base text-malachite pt-6'>85 Rated Squad</p>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-3xxl py-1.5 text-light-white !leading-[121%]'>Weekly 90+ <span className='text-4xl'>TOTS Player Pick</span> <span className='font-normal text-base'>(Avg Return 200,00K)</span></h2>
                <div className='flex gap-7 justify-center items-center'>
                  {rateingList.map((obj, index) => (
                    <div key={index} className='flex gap-2 items-center'>
                      {obj.icon}
                      <p className='text-base font-normal text-light-white leading-[121%]'>{obj.number}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className='text-light-gray text-base font-normal'>Solution #1</p>
            </div>

          </div>
          <div className='w-3/12'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution