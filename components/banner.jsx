import React from 'react';
import Image from 'next/image'
import bannerpic from '../assets/banner.jpg'


const Banner = () => {
    return (
        <div className='relative h-[300px] md:h-[400px] lg:h-[500px]'>
            <Image src={bannerpic} alt='banner img' layout='fill' objectFit='cover' objectPosition='left' />
            <div className='absolute top-1/2 text-white w-full text-center'>
                <p className='md:text-xl'>Don't know where to go? Perfect.</p>
                <button className='text-purple-400 bg-white px-3 rounded-full  py-2 active:scale-90 transition duration-100 my-2 md:py-3 md:px-4 font-bold'>I'm Flexible</button>
            </div>
        </div>
    );
};

export default Banner;