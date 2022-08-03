import React, { useState } from 'react';
import Image from 'next/image'
import airbnb from '../assets/logo.png'
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'

const Header = () => {
    const [inputValue, setInputValue] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const router = useRouter()
    const handleSelect = (ranges) => {
        {
            selection: {
                setStartDate(ranges.selection.startDate);
                setEndDate(ranges.selection.endDate)
            }
        }
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: inputValue,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: numberOfGuests
            }
        })
    }
    return (
        <header className='grid grid-cols-3 shadow-md bg-white sticky top-0 p-3 md:p-5 md:px-10 z-50'>
            {/* top  */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image onClick={() => router.push('/')} src={airbnb} alt='header img' layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* middle */}
            <div className='flex h-10 items-center justify-between md:border-2 md:rounded-full md:shadow-sm mx-2'>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='bg-transparent focus:outline-none w-full px-3 text-sm' type="text" placeholder='start searching here' />
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
            {inputValue && <>
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={['#F87171']}
                    />
                    <div className='flex  items-center ml-5 border-b pb-3'>
                        <p className='text-xl flex-grow font-semibold'>Number of Guests</p>
                        <div className='flex'>
                            <UsersIcon className='w-7' />
                            <input className='w-12 text-lg text-red-400 ml-2 outline-none ' value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} min='1' type="number" />
                        </div>
                    </div>
                    <div className='flex justify-around mt-3'>
                        <button onClick={() => setInputValue("")}
                            className='text-xl'>Cancel</button><button onClick={search} className='text-xl text-red-400'>Search</button>
                    </div>
                </div>

            </>}
        </header>
    );
};

export default Header;