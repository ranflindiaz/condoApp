import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';

const Home: NextPage = ({exploreData, cardData}) => {
  return (
    <div className="">
      <Head>
        <title>My Condo App</title>
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-xl md:text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-flow-grow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location} 
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardData?.map(({img, title }) =>(
            <MediumCard 
              key={img}
              img={img}
              title={title}
            />
          ))}</div>
          
        </section>
      </main>
     
    </div>
  )
}

export default Home;
export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  const cardData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());

  return  {
    props: {
      exploreData,
      cardData
    }
  }
}
