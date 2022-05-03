import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { CardCard } from '~/components'
import { Car } from '~/resources'

import * as S from './styles'

type HomeTemplateProps = {
  cars: Car[]
}

export const HomeTemplate = ({ cars }: HomeTemplateProps) => (
  <>
    <Head>
      <title>Exotic Cars</title>
    </Head>
    <S.Wrapper>
      {cars.map((car) => (
        <Fragment key={car.id}>
          <Link href={`/car/${car.slug}`} passHref>
            <a><CardCard {...car} /></a>
          </Link>
        </Fragment>
      ))}
    </S.Wrapper>
  </>
)
