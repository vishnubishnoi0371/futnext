"use client"
import React from 'react'
import bg from "../../../../public/assets/images/webp/loginBg.webp"
import Image from 'next/image'
const LoginPage = () => {
    return (
        <div className='min-h-screen bg-vampire-black '>
            <div className='max-w-[808px] w-full h-screen bg-cover bg-no-repeat bg-center ps-20' style={{
                backgroundImage: `url(${bg.src})`,
            }}>
                <Image
                    width={194.56}
                    height={48}
                    className='pt-20'
                    src='/assets/images/svg/pageLogo.svg' />
                <h2 className='font-semibold text-4xxl leadimg-121 !tracking-[-4%]'>The most accurate SBC solution and pack odds</h2>
            </div>
        </div>
    )
}

export default LoginPage