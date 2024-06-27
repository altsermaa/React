import React from 'react';
import { BsMoonStars } from "react-icons/bs";
import Button from './Button';
import { IoMenu } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


function Navbar({ isDark, toggleDarkMode }) {


    return (
        <div className='m-auto lg:py-4 lg:px-20 p-4'>
            <div className='flex justify-between m-auto items-center lg:w-[1280px] w-[343px] '>
                <h1>TOM</h1>
                <div className='lg:flex lg:gap-6 lg:items-center hidden'>
                    <div className='flex gap-6 items-center'>
                        <h3>About</h3>
                        <h3>Testimonials</h3>
                        <h3>Skills</h3>
                        <h3>Contact</h3>
                    </div>
                    <button onClick={toggleDarkMode}>
                        {isDark ? <BsMoonStars/> : <IoSunnyOutline/>}
                    </button>
                    <Button />
                </div>
                <div className='lg:hidden sm:contents'>
                    <IoMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar;

