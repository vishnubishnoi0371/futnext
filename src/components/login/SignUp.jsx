"use client"
import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Button } from '../common/Button';
import Link from 'next/link';

const SignUp = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (usernameError) setUsernameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateUsername = (username) => {
        return username.length >= 3;
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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

        if (!validateUsername(username)) {
            setUsernameError('Username must be at least 3 characters long');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long, and contain both letters, numbers, and a special character');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Email:', email);
            console.log('Username:', username);
            console.log('Password:', password);
            setEmail('');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className='max-w-[376px] mx-auto border p-7 mt-10 w-full'>
            <h1 className='text-5xl text-center text-black font-bold'>Form</h1>
            <div className='pt-[21px]'>
                <Inputs
                    placeholder='Enter your username'
                    type='text'
                    inputuse="Username"
                    eyeclasses='hidden'
                    value={username}
                    onChange={handleUsernameChange}
                /></div>
            {usernameError && <p className='text-red-500 text-xs'>{usernameError}</p>}



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
            <Button
                text="Sign Up"
                className="bg-black text-white max-w-[180px] mx-auto py-4 px-6 text-light-white w-full flex justify-center mt-[21px] max-h-[48px]"
                onClick={handleSubmit}
            />
            <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-6'>Don’t have an account? <Link href='/Input' className='text-blue-400'>login</Link></p>

        </div>
    );
}

export default SignUp;
