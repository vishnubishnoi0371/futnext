// SignUp.js
import React from 'react';

const SignUp = ({ onSwitchToLogin }) => {
    return (
        <div className='max-w-[376px] w-full'>
            <p className='font-semibold text-3xxl leading-121 text-light-white tracking-tighter'>Create Account</p>
            <p className='font-normal text-base leading-121 text-old-silver mt-2 tracking-tighter'>Join us to make more coins and submit more SBC’s</p>
            {/* Add your sign-up form here */}
            <CommonButton
                text="Sign Up"
                className="bg-malachite py-4 px-6 text-light-white w-full flex justify-center mt-[21px] max-h-[48px]"
                onClick={() => console.log('Sign Up')}
            />
            <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-6'>Already have an account? <a href='' onClick={onSwitchToLogin} className='text-malachite'>Login</a></p>
        </div>
    );
}

export default SignUp;
