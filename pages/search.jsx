import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useRouter } from 'next/router'


const Search = () => {
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query;
    return (
        <>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays for 5 number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>
                    <div className='hidden md:inline-flex space-x-3 whitespace-nowrap mb-5 text-gray-800'>
                        <p className='button'>Cancelling Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                </ section>
            </main>
            <Footer />
        </>
    );
};

export default Search;