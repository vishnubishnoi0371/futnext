import Image from 'next/image'
import Link from 'next/link'
import { rateingList } from '../common/Helper'
import { LeftArrow, Money } from '../common/Icon'

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
              <div className='!bg-solution bg-cover mt-32 min-h-[334px]'>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/cb.png" alt='cb' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/cb92.png" alt='cb92' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/cdm.png" alt='cdm' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/cm.png" alt='cm' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/cm91.png" alt='cm91' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/gk.png" alt='gk' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/lb.png" alt='lb' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/lw.png" alt='lw' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/rb.png" alt='rb' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/rw.png" alt='rw' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image width={80} height={110} src="/assets/images/png/st.png" alt='st' />
                  <p className='text-light-green text-xs font-semibold'>LW</p>
                </div>
              </div>
            </div>

          </div>
          <div className='w-3/12'>
            <div className='bg-black-olive h-[72px] p-4 pe-[18px] w-full rounded-3xl'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <p className=' font-medium text-base text-white'>Solution #1</p>
                  <p className=' font-medium text-sm-13 leading-123 text-dark-white'>Generated 6/3/24</p>
                </div>
                <div className=' flex items-center gap-2'>
                  <Money />
                  <p className=' font-medium text-base lh-[19.36px] text-light-white'>13,000 Cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution