import { ButtonLink } from '~/components'
import * as S from './styles'

export const PageNotFoundTemplate = () => (
  <S.Wrapper>
    <S.Heading>Page not found.</S.Heading>
    <ButtonLink href='/' reverse='true'>Back home page</ButtonLink>
  </S.Wrapper>
)
