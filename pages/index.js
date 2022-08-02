import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header.jsx'
import Banner from '../components/banner'
import SmallCard from '../components/smallCard'
import MediumCard from '../components/mediumCard'
import LargeCard from '../components/largeCard'
import Footer from '../components/footer'

export default function Home({ items, mediumcartitems }) {
  return (
    <div>
      <Head>
        <title>airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-3 md:px-10'>
        {/* small card  */}
        <section>
          <h2 className='text-xl md:text-4xl my-4 md:my-5 font-bold'>Explore Nearby</h2>
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {items.map(item => <SmallCard key={item.img} item={item}></SmallCard>)}
          </div>
        </section>
        {/* medium card  */}
        <section>
          <h2 className='text-xl md:text-4xl my-4 md:my-5 font-bold'>Live anywhere</h2>
          <div className='flex overflow-scroll scrollbar-hide -ml-3'>
            {mediumcartitems.map(({ img, title }) => <MediumCard key={img} img={img} title={title} />)}
          </div>
        </section>
        {/* large card  */}
        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' desc='Wishlists curated by Airbnb' btntext='Get Inspired' />
      </main>
      <Footer />

    </div>
  )
}


export async function getStaticProps(context) {
  const items = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  const mediumcartitems = await fetch('https://links.papareact.com/zp1').then(res => res.json())

  return {
    props: {
      items, mediumcartitems
    },
  }
}