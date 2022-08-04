import React from 'react';
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

const InfoCard = (item) => {
    const { img, description, location, price, star, title, total } = item.item;
    console.log(item);
    return (
        <div className='flex mb-5 border-b pb-5 cursor-pointer hover:opacity-80 first:border-t first:pt-5 hover:shadow-lg transition ease-out duration-200'>
            <div className='h-24 w-40 md:h-52 md:w-80  relative flex-shrink-0'>
                <Image className='rounded-2xl' src={img} alt='info img' layout='fill' objectFit='cover' />
            </div>
            <div className='flex flex-col flex-grow pl-5 justify-between pr-5'>
                <div>
                    <div className='flex justify-between md:mb-2'>
                        <p>{location}</p>
                        <span>
                            <HeartIcon className='h-5' />
                        </span>
                    </div>
                    <h1 className=' text-xl'>{title}</h1>
                    <div className='w-14 border-b my-3'></div>
                    <span className='text-sm flex-grow  text-gray-500'>{description}</span>
                </div>
                <div>
                    <span className='flex justify-end mb-2 text-xl font-semibold'>{price}</span>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <StarIcon className='h-6 text-red-400' />
                            <span className='font-semibold'>{star}</span>
                        </div>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;