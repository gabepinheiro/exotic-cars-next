import Head from 'next/head'
import { CardCard } from '~/components'

import * as S from './styles'

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

export const HomeTemplate = () => (
  <>
    <Head>
      <title>Exotic Cars</title>
    </Head>
    <S.Wrapper>
      {cars.map((car, index) => <CardCard key={index} {...car} />)}
    </S.Wrapper>
  </>
)
