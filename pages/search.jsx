import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/infoCard';
import MapBox from '../components/map';


const Search = ({ searchResults }) => {
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartingDate = format(new Date(startDate), 'dd-MM-yyyy');
    const formattedEndingDate = format(new Date(endDate), 'dd-MM-yyyy');
    const range = `${formattedStartingDate} - ${formattedEndingDate}`
    return (
        <>
            <Header searchInfo={`${location} | ${range} | ${noOfGuests} guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden md:inline-flex space-x-3 whitespace-nowrap mb-5 text-gray-800'>
                        <p className='button'>Cancelling Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className=''>
                        {searchResults.map(item => <InfoCard
                            key={item.img}
                            item={item}
                        />)}
                    </div>

                </ section>
                <section className='hidden lg:inline-flex min-w-[400px]'>
                    <MapBox />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())
    return {
        props: { searchResults: searchResults },
    }
}
