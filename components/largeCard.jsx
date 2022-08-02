import React from 'react';
import Image from 'next/image'


const LargeCard = ({ img, title, desc, btntext }) => {
    return (
        <section className='relative mt-16'>
            <div className='relative w-full h-96'>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-lg' />
            </div>
            <div className='absolute top-32 pl-3'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='my-2'>{desc}</p>
                <button className='bg-black text-white px-3 py-2 rounded-lg'>{btntext}</button>
            </div>
        </section>
    );
};

export default LargeCard;