import Head from 'next/head'
import { ButtonLink } from '~/components'
import * as S from './styles'

export const PageNotFoundTemplate = () => (
  <S.Wrapper>
    <Head>
      <title>Página não encontrada.</title>
    </Head>
    <S.Heading>Page not found.</S.Heading>
    <ButtonLink href='/' reverse='true'>Back home page</ButtonLink>
  </S.Wrapper>
)
