import React from 'react';
import Image from 'next/image'
import airbnb from '../assets/logo.png'
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className='grid grid-cols-3 shadow-md bg-white sticky top-0 p-3 md:p-5 md:px-10 z-50'>
            {/* top  */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src={airbnb} layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* middle */}
            <div className='flex h-10 items-center justify-between md:border-2 md:rounded-full md:shadow-sm mx-2'>
                <input className='bg-transparent focus:outline-none w-full px-3 text-sm' type="text" placeholder='start searching here' />
                <SearchIcon className="h-8 bg-red-400 rounded-full p-2 text-white hidden md:inline cursor-pointer md:mr-1" />
            </div>
            {/* right  */}
            <div className='flex items-center justify-end text-gray-400 space-x-2'>
                <p className='hidden md:block cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex rounded-full border-2 p-2 space-x-2'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    );
};

export default Header;