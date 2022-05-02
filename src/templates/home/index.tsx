import Head from 'next/head'
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
      {cars.map(({ id, ...props }) => <CardCard key={id} {...props} />)}
    </S.Wrapper>
  </>
)
