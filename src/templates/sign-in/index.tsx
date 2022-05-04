import { Form } from '~/components'
import * as S from './styles'

export const SignInTemplate = () => (
  <S.Wrapper>
    <S.Heading>Sign In</S.Heading>
    <Form signIn />
  </S.Wrapper>
)
