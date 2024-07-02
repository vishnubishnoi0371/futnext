import { trendsData } from '../common/Helper'
import Image from 'next/image'
import CommonHeader from '../players/CommonHeader'

const Squard = () => {
    return (
        <div className='bg-vampire-black pt-[108px]'>
            <CommonHeader/>
            <div className='container max-w-[1632px] max-md:max-w-[500px] mx-auto px-4'>
                <h2 className='text-light-white font-semibold text-lg lg:text-2xl leading-[29px] tracking-[-4%] mb-2'>Challenges</h2>
                <p className='text-light-gray1 font-normal text-xs lg:text-sm leading-[16px] pb-[32px] tracking-[-4%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] pb-[80px]'>
                    {trendsData.map((dataC, index) => {
                        return (
                            <div key={index} className=' bg-border-gradient rounded-[32px] p-[1px]'>
                                <div className='!bg-eerie-black rounded-[32px]'>
                                    <div className='p-4 md:p-6'> 
                                        <div className='flex items-center justify-between pb-6 md:pb-[46px]'>
                                            <h2 className='font-semibold text-lg lg:text-2xl leading-[29px] text-light-white text-nowrap'>{dataC.name}</h2>
                                            <div className='flex items-center gap-2'>
                                                <Image src={dataC.moneyimg} alt='moneyimg' width={32} height={32} />
                                                <p className='font-normal text-sm lg:text-base leading-[19px] tracking-[-4%] text-light-white text-nowrap'>{dataC.money}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-col justify-center mb-4 md:mb-[46px]'>
                                            <Image className='mb-3' src={dataC.img} alt='imgUt' width={110} height={159} />
                                            <p className=' text-center mx-auto text-sm-15 font-normal leading-[18px] tracking-[-4%] text-light-white'>{dataC.paraLine}</p>
                                        </div>
                                        <p className=' font-medium text-xl leading-[24px] tracking-[-4%] text-light-white mb-3 md:mb-4'>{dataC.object}</p>
                                        <div className='flex items-center gap-2 mb-4'>
                                            <p className=' bg-dark-green w-[40px] h-[40px] rounded-[20px] flex items-center justify-center font-semibold text-lg tracking-[-4%] leading-[24px] text-malachite'>1</p>
                                            <p className=' font-normal text-sm lg:text-base leading-[19px] tracking-[-4%] text-light-gray'>{dataC.rating}</p>
                                        </div>
                                        <div className='flex items-center gap-2 mb-4 md:mb-6 '>
                                            <p className=' bg-dark-green w-[40px] h-[40px] rounded-[20px] flex items-center justify-center font-semibold text-lg tracking-[-4%] leading-[24px] text-malachite'>2</p>
                                            <p className=' font-normal text-sm lg:text-base leading-[19px] tracking-[-4%] text-light-gray'>{dataC.player}</p>
                                        </div>
                                        <button className='flex items-center gap-2 py-2 px-4 bg-pigment rounded-3xl font-normal text-xs lg:text-sm text-light-white h-[48px] border border-transparent hover:bg-transparent hover:border hover:border-white duration-300'>View Solutions <Image src={dataC.arrow} /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Squard
