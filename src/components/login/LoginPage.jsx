// LoginPage.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import LoginInput from './LoginInput';
import SignUp from './SignUp';


const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='min-h-screen bg-vampire-black'>
            <a href='/'>
                <Image
                    width={194.56}
                    height={48}
                    className='pt-20 ps-[68px]'
                    src='/assets/images/svg/pageLogo.svg'
                    alt='Page Logo'
                />
            </a>
            <div className='pt-32'>
                <div className='flex md:flex-row flex-col items-center justify-center'>
                    <div className='lg:max-w-[808px] w-full md:w-1/2 lg:w-full px-3'>
                        <div className='flex items-center justify-center flex-col gap-2 pt-1'>
                            <h2 className='font-semibold text-4xxl leading-121 tracking-tighter bg-font-gradient bg-clip-text text-transparent text-center'>
                                The <span className='text-white'>most accurate</span> <span className='block'>SBC solution and pack odds</span>
                            </h2>
                            <p className='font-normal text-light-gray text-lg tracking-tight max-w-[514px] leading-121 text-center mx-auto'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-full w-full md:w-1/2 lg:max-w-[1112px] flex items-center justify-center px-3 pt-10'>
                        {showLogin ? (
                            <LoginInput onSwitchToSignUp={() => setShowLogin(false)} />
                        ) : (
                            <SignUp onSwitchToLogin={() => setShowLogin(true)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
