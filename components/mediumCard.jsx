import React from 'react';
import Image from 'next/image'


const MediumCard = ({ img, title }) => {
    return (
        <div className='p-3 hover:scale-105 transition-all duration-150 ease-out cursor-pointer '>
            <div className='relative h-80 w-80'>
                <Image src={img} layout='fill' objectFit='full' className='rounded-lg' />
            </div>
            <div><h3 className='text-lg md:text-xl mt-2'>{title}</h3></div>
        </div>
    );
};

export default MediumCard;