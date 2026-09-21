import React from 'react';

import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <>
        <div className="bg-[rgba(12,11,20,0.82)] backdrop-blue-[16px] sticky top-0 z-50">
<div className="container mx-auto px-4 py-2  flex gap-4 justify-between items-center">
               <img src={Logo} alt="Logo" className="w-94.2 h-28" />

                <ul className="flex gap-3 justify-between items-center text-2xl text-[#cac5d8] hover:text-white">
                <li> <a href='#home'>Home</a></li>
                <li><a href='#technologies'>Technologies</a></li>
                <li><a href='#projects'>Projects</a> </li>
                <li><a href='#about'>About</a></li>
                <li><a href='#Contact'>Contact</a></li>
                 </ul>

                 <div className="flex gap-3 justify-between items-center">
                    <button className="rounded-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Sign In</button>
                    <button className="rounded-full  bg-pink-500 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Sign Up</button>
                 </div>
               
        </div>
        </div>
        
        </>
    );
};

export default Navbar;