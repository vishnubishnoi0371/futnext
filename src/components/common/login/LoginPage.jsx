"use client"
import React from 'react'
import bg from "../../../../public/assets/images/webp/loginBg.webp"
import Image from 'next/image'
import Inputs from './Inputs'
const LoginPage = () => {
    return (
        <div className='min-h-screen bg-vampire-black flex flex-col md:flex-row'>
            <div className='max-w-[808px] w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col px-3' style={{
                backgroundImage: `url(${bg.src})`,
            }}>
                <a href='/'>
                    <Image
                        width={194.56}
                        height={48}
                        className='pt-20 ps-[68px]'
                        src='/assets/images/svg/pageLogo.svg' />
                </a>
                <div className='flex  items-center justify-center flex-col gap-2 mt-80 pt-1'>
                    <h2 className='font-semibold text-4xxl leading-121 tracking-tighter bg-font-gradient bg-clip-text text-transparent text-center'>The <span className='text-white'>most accurate</span> <span className='block'>SBC solution and pack odds</span></h2>
                    <p className='font-normal text-light-gray text-lg tracking-tight max-w-[514px] leading-121 text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
                </div>
            </div>
            <div className='w-full max-w-[1112px] flex items-center justify-center px-3'>
                <div className='max-w-[376px]'>
                    <p className='font-semibold text-3xxl leading-121 text-light-white tracking-tighter'>Welcome Back 👋🏻  </p>
                    <p className='font-normal text-base leading-121 text-old-silver mt-2 tracking-tighter'>Start making more coins and submit more SBC’s</p>
                   <div className='pt-[21px]'>
                     <Inputs
                     placeholder='Enter your email address'
                     type='email'
                     inputuse="Email address"
                     eyeclasses='hidden'/>
                     </div>
                   <div className='pt-[21px]'>
                     <Inputs
                     placeholder='Password'
                     type='Password'
                     inputuse="Password" />
                     </div>
                     <a href="" className='font-normal text-xs leading-121 text-malachite tracking-tighter mt-2 after:w-full after:absolute relative after:h-[1px] after:left-0 after:bottom-[-.5px] after:bg-malachite hover:after:w-0 hover:after:left-[50%] after:duration-300 after:ease-in-out'>Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage