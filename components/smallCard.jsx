import React from 'react';
import Image from 'next/image'


const SmallCard = ({ item }) => {
    const { img, location, distance } = item
    return (
        <div className='flex space-x- m-2 mt-5 space-x-2 items-center rounded-lg hover:bg-gray-300 cursor-pointer hover:scale-105 transition-all duration-150 ease-out'>
            {/* left  */}
            <div className='relative h-16 w-16'>
                <Image src={img} className='rounded-lg' layout='fill' objectFit='full' objectPosition='left' />
            </div>
            {/* right  */}
            <div >
                <h2>{location}</h2>
                <h2 className='text-gray-500'>{distance}</h2>
            </div>
        </div>
    );
};

export default SmallCard;