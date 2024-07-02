// LoginInput.js
import React, { useState } from 'react';
import Inputs from './Inputs';
import { CommonButton } from '../common/commonbtn';
import { GoogleIcon, LoginDiscordIcon, LoginFacebookIcon } from '../common/Icon';
import SocialMediaLogin from './SocialMediaLogin';

const LoginInput = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and contain both letters and numbers');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='max-w-[376px] w-full'>
            <p className='font-semibold text-3xxl leading-121 text-light-white tracking-tighter'>Welcome Back 👋🏻</p>
            <p className='font-normal text-base leading-121 text-old-silver mt-2 tracking-tighter'>Start making more coins and submit more SBC’s</p>
            <div className='pt-[21px]'>
                <Inputs
                    placeholder='Enter your email address'
                    type='email'
                    inputuse="Email address"
                    eyeclasses='hidden'
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
            </div>
            <div className='pt-[21px]'>
                <Inputs
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    inputuse="Password"
                    eyeclasses=''
                    value={password}
                    onChange={handlePasswordChange}
                    togglePasswordVisibility={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />
                {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}
            </div>
            <a href="" className='font-normal text-xs leading-121 text-malachite tracking-tighter mt-2 after:w-full after:absolute relative after:h-[1px] after:left-0 after:bottom-[-.5px] after:bg-malachite hover:after:w-0 hover:after:left-[50%] after:duration-300 after:ease-in-out'>Forgot Password?</a>
            <CommonButton
                text="Login"
                className="bg-malachite py-4 px-6 text-light-white w-full flex justify-center mt-[21px] max-h-[48px]"
                onClick={handleSubmit}
            />
            <p className='font-normal text-xs leading-121 tracking-tighter text-white w-[72px] h-[32px] relative z-[2] bg-vampire-black mx-auto flex items-center justify-center mt-6'>or</p>
            <hr className='h-[2px] w-full bg-light-white opacity-50 -translate-y-4 relative z-[1' />
            <div className='flex gap-2 items-center pt-6'>
                <SocialMediaLogin
                    icons={<GoogleIcon />}
                    socialiconlinks='https://www.google.com/'
                />
                <SocialMediaLogin
                    icons={<LoginDiscordIcon />}
                    socialiconlinks='https://discord.com/channels/984345847628181504/999268522427437086'
                />
                <SocialMediaLogin
                    icons={<LoginFacebookIcon />}
                    socialiconlinks='https://www.facebook.com/'
                />
            </div>
            <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-6'>Don’t have an account? <a href='' onClick={onSwitchToSignUp} className='text-malachite'>Sign Up</a></p>
        </div>
    );
}

export default LoginInput;
