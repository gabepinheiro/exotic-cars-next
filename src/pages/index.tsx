import Head from 'next/head'
import { CardCard } from '~/components'

const cars = [
  {
    brand: 'Ferrari',
    model: 'California',
    brandImage: '/images/brand.png',
    thumb: '/images/thumb.png',
    rent: {
      amount: 725,
      per: 'day',
    },
  },
  {
    brand: 'Ferrari',
    model: 'California',
    brandImage: '/images/brand.png',
    thumb: '/images/thumb.png',
    rent: {
      amount: 725,
      per: 'day',
    },
  },
  {
    brand: 'Ferrari',
    model: 'California',
    brandImage: '/images/brand.png',
    thumb: '/images/thumb.png',
    rent: {
      amount: 725,
      per: 'day',
    },
  },
]

const Home = () => (
  <>
    <Head>
      <title>Exotic Cars</title>
    </Head>
    <section>
      {cars.map((car, index) => <CardCard key={index} {...car} />)}
    </section>
  </>
)

export default Home
